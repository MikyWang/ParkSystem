var parkingPlaces = []
var carPosition = {
	x: 750,
	y: 500
}
var tagetFlag = false;
var completeFlag = false;
var leftFlag = false
var rightFlag = false

function clearData() {
	tagetFlag = false;
	completeFlag = false;
	leftFlag = false
	rightFlag = false
}

var background = null

function drawCar(x, y, horizontal) {
	var canvas = document.getElementById('parkingSpace')
	var ctx = canvas.getContext('2d')
	ctx.fillStyle = "rgba(163, 177, 255, 1)"
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(x, parseFloat(y) + parseFloat(30))
	ctx.lineTo(parseFloat(x) + parseFloat(30), parseFloat(y) + parseFloat(30))
	ctx.lineTo(parseFloat(x) + parseFloat(30), parseFloat(y))
	ctx.lineTo(x, y)
	ctx.closePath()
	ctx.fill()
	if (!horizontal) {
		drawTire(ctx, parseFloat(x) - 1, parseFloat(y) + 2, 2, 4)
		drawTire(ctx, parseFloat(x) + 31, parseFloat(y) + 2, 2, 4)
		drawTire(ctx, parseFloat(x) - 1, parseFloat(y) + 28, 2, 4)
		drawTire(ctx, parseFloat(x) + 31, parseFloat(y) + 28, 2, 4)
	} else {
		drawTire(ctx, parseFloat(x) - 1, parseFloat(y) - 1, 4, 2)
		drawTire(ctx, parseFloat(x) + 28, parseFloat(y) - 1, 4, 2)
		drawTire(ctx, parseFloat(x) - 1, parseFloat(y) + 31, 4, 2)
		drawTire(ctx, parseFloat(x) + 28, parseFloat(y) + 31, 4, 2)
	}
}

function update(ctx, x, y, tagetX, tagetY) {
	ctx.clearRect(0, 0, 1000, 600)
	createParkingSpace()
	fillFullPlace()
	calculate()
	var horizontal = false;
	if (minDistancePosition.direction == "left") {
		if (y > tagetY && !tagetFlag) {
			y--;
		}
		if (y == tagetY + 80 && !tagetFlag) {
			$('#background').attr('src', 'lib/turnLeft.wav');
			background.play()
		}
		if (y <= tagetY && x > tagetX && !tagetFlag) {

			horizontal = true
			x--;
		}
		if (x <= tagetX && y <= tagetY && !tagetFlag) {
			tagetFlag = true;
		}
		if (x == tagetX + 20) {
			$('#background').attr('src', 'lib/end.wav');
			background.play()
		}
		if (minDistancePosition.orientation == "up") {
			if (tagetFlag && y < tagetY + 40) {
				horizontal = false
				y++;
			}
			if (tagetFlag && y == tagetY + 40) {
				updateStatus(updatePlace)
				completeFlag = true;
			}
		}
		if (minDistancePosition.orientation == "down") {
			if (tagetFlag && y > tagetY - 30) {
				horizontal = false
				y--;
			}
			if (tagetFlag && y == tagetY - 30) {
				updateStatus(updatePlace)
				completeFlag = true;
			}
		}
	}
	if (minDistancePosition.direction == "right") {
		if (y > 260 && !rightFlag) {
			horizontal = false
			y--;
		}
		if (y <= 260) {
			rightFlag = true
		}
		if (y == 340 && !rightFlag) {
			$('#background').attr('src', 'lib/turnLeft.wav');
			background.play()
		}
		if (rightFlag && x > 70 && !leftFlag) {
			horizontal = true
			x--;
		}
		if (rightFlag && x == 140 && !leftFlag) {
			$('#background').attr('src', 'lib/turnLeft.wav');
			background.play()
		}
		if (rightFlag && x <= 70) {
			leftFlag = true
		}
		if (leftFlag && rightFlag) {
			if (y < tagetY && !tagetFlag) {
				horizontal = false
				y++;
			}
			if (y == tagetY - 70 && !tagetFlag) {
				$('#background').attr('src', 'lib/turnLeft.wav');
				background.play()
			}
			if (y >= tagetY && x < tagetX && !tagetFlag) {
				horizontal = true
				x++;
			}
			if (x >= tagetX && y >= tagetY && !tagetFlag) {
				tagetFlag = true;
			}
			if (x == tagetX - 20 && !tagetFlag) {
				$('#background').attr('src', 'lib/end.wav');
				background.play()
			}
			if (minDistancePosition.orientation == "up") {
				if (tagetFlag && y < tagetY + 40) {
					horizontal = false
					y++;
				}
				if (tagetFlag && y == tagetY + 40) {
					updateStatus(updatePlace)
					completeFlag = true;
				}
			}
			if (minDistancePosition.orientation == "down") {
				if (tagetFlag && y > tagetY - 30) {
					horizontal = false
					y--;
				}
				if (tagetFlag && y == tagetY - 30) {
					updateStatus(updatePlace)
					completeFlag = true;
				}
			}
		}
	}
	drawCar(x, y, horizontal)
	if (!completeFlag) {
		setTimeout(function () {
			update(ctx, x, y, tagetX, tagetY)
		}, 1);
	}

}

function updatePlace() {
	parkingPlaces[parseInt(minDistancePosition.placeId) - 1].status = "full"
	var canvas = document.getElementById('parkingSpace')
	var ctx = canvas.getContext('2d')
	ctx.clearRect(0, 0, 1000, 600)
	createParkingSpace()
	fillFullPlace()
	clearData()
	drawCar(parseFloat(carPosition.x), parseFloat(carPosition.y), false)
}

function updateStatus(callback) {
	$.ajax({
		type: "POST",
		url: "updateStatus?placeId=" + minDistancePosition.placeId,
		success: function (response) {
			if (callback) {
				callback()
			}
		},
		error: function (response) {
			alert(response.responseText)
		}
	});
}

function drawTire(ctx, x, y, a, b) {
	var step = (a > b) ? 1 / a : 1 / b;
	ctx.beginPath();
	ctx.moveTo(x + a, y);
	for (var i = 0; i < 2 * Math.PI; i += step) {
		ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
	}
	ctx.closePath();
	ctx.stroke();
}

var minDistancePosition = {
	x: 0,
	y: 0,
	orientation: '',
	direction: '',
	placeId: 0,
}
$(document).ready(function () {
	$('#calculatePlace').bind('click', calculate)
	$("#startParking").bind('click', startParking);
	background = document.getElementById("background")
	getParkingPlaces()

})

function startParking() {
	$('#background').attr('src', 'lib/start.wav');
	background.play()
	calculate()
	var canvas = document.getElementById('parkingSpace')
	var ctx = canvas.getContext('2d')
	var tagetY = parseFloat(minDistancePosition.y);
	var tagetX = parseFloat(minDistancePosition.x)
	if (minDistancePosition.orientation == "down") {
		tagetY = tagetY + 40
		tagetX = tagetX + 5
	}
	if (minDistancePosition.orientation == "up") {
		tagetY = tagetY - 40
		tagetX = tagetX + 5
	}
	update(ctx, parseFloat(carPosition.x), parseFloat(carPosition.y), tagetX,
		tagetY)
}

function getParkingPlaces() {
	parkingPlaces = []
	$
		.ajax({
			url: 'getParkingPlaces',
			success: function (response) {
				response.forEach(function (parkingPlace) {
					var match = parkingPlace.position.split(',')
					parkingPlaces.push({
						position: {
							x: match[0],
							y: match[1]
						},
						status: parkingPlace.status,
						orientation: parkingPlace.orientation,
						direction: parkingPlace.direction,
						placeId: parkingPlace.placeId
					})
				})
				fillFullPlace()
				drawCar(parseFloat(carPosition.x),
					parseFloat(carPosition.y), false)
			}
		})
}

function fillFullPlace() {
	var canvas = document.getElementById('parkingSpace')
	var ctx = canvas.getContext('2d')
	ctx.fillStyle = 'red'
	parkingPlaces.forEach(function (parkingPlace) {
		var x = parkingPlace.position.x
		var y = parkingPlace.position.y
		if (parkingPlace.status == 'full') {
			ctx.fillRect(x, y, 38, 38)
		}
		ctx.font = 'bold 15px consolas'
		ctx.textAlign = 'left'
		ctx.textBaseline = 'top'
		ctx.strokeStyle = 'black'
		if (parkingPlace.orientation == 'down') {
			ctx.strokeText(parkingPlace.placeId, parseInt(x) + 10,
				parseInt(y) + 10)
		} else {
			ctx.strokeText(parkingPlace.placeId, parseInt(x) + 10, parseInt(y))
		}
	})
}

function calculate() {
	var canvas = document.getElementById('parkingSpace')
	var ctx = canvas.getContext('2d')
	ctx.strokeStyle = 'green'

	var minDistance = 0
	parkingPlaces.forEach(function (parkingPlace) {
		var x = parseFloat(parkingPlace.position.x)
		var y = parseFloat(parkingPlace.position.y)

		if (parkingPlace.status == 'empty') {
			var distance = carPosition.x - x + carPosition.y - y
			if (parkingPlace.orientation == 'down') {
				distance = distance - 80
			}
			if (parkingPlace.direction == 'right') {
				distance = carPosition.x - x + carPosition.y - y + 620 + 180
			}
			if (minDistance == 0 || distance < minDistance) {
				minDistance = distance
				minDistancePosition.x = x
				minDistancePosition.y = y
				minDistancePosition.direction = parkingPlace.direction
				minDistancePosition.orientation = parkingPlace.orientation
				minDistancePosition.placeId = parkingPlace.placeId
			}
		}
	})
	if (minDistancePosition.direction == 'right') {
		ctx.beginPath()
		ctx.moveTo(carPosition.x, carPosition.y)
		ctx.lineTo(carPosition.x, parseFloat(carPosition.y) - 220)
		ctx.lineTo(parseFloat(carPosition.x) - 660,
			parseFloat(carPosition.y) - 220)
		ctx.lineTo(parseFloat(carPosition.x) - 660,
			parseFloat(carPosition.y) - 100)
		ctx.lineTo(parseFloat(minDistancePosition.x) + 20,
			parseFloat(carPosition.y) - 100)
		if (minDistancePosition.orientation == "up") {
			ctx.lineTo(parseFloat(minDistancePosition.x) + 20,
				parseFloat(carPosition.y) - 60)
		} else {
			ctx.lineTo(parseFloat(minDistancePosition.x) + 20,
				parseFloat(carPosition.y) - 140)
		}
		ctx.stroke()
		ctx.closePath()
	}
	if (minDistancePosition.direction == 'left') {
		ctx.beginPath()
		var x = parseInt(minDistancePosition.x) + parseInt(20)
		if (minDistancePosition.orientation == 'down') {
			ctx.moveTo(x, parseInt(minDistancePosition.y) + 20)
			var y = parseInt(minDistancePosition.y) + parseInt(60)
			ctx.lineTo(x, y)
			ctx.lineTo(carPosition.x, y)
			ctx.lineTo(carPosition.x, carPosition.y)
		} else {
			ctx.moveTo(x, minDistancePosition.y)
			var y = parseInt(minDistancePosition.y) - parseInt(20)
			ctx.lineTo(x, y)
			ctx.lineTo(carPosition.x, y)
			ctx.lineTo(carPosition.x, carPosition.y)
		}
		ctx.stroke()
		ctx.closePath()
	}
	ctx.strokeText(
		'最佳位置为' + minDistancePosition.placeId + ',距离为' + minDistance, 220,
		500)

}
