var parkingPlaces = []
var carPosition = {
  x: 750,
  y: 500
}
$(document).ready(function () {
  $.ajax({
    url: 'getParkingPlaces',
    success: function (response) {
      response.forEach(function (parkingPlace) {
        var match = parkingPlace.position.split(',')
        parkingPlaces.push({
          position: { x: match[0], y: match[1]},
          status: parkingPlace.status,
          orientation: parkingPlace.orientation,
          direction: parkingPlace.direction
        })
      })
      fillFullPlace()
      calculate()
    }
  })
})

function fillFullPlace () {
  var canvas = document.getElementById('parkingSpace')
  var ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'
  parkingPlaces.forEach(function (parkingPlace) {
    var x = parkingPlace.position.x
    var y = parkingPlace.position.y
    if (parkingPlace.status == 'full') {
      ctx.fillRect(x, y, 40, 40)
    }
  })
}

function calculate () {
  var canvas = document.getElementById('parkingSpace')
  var ctx = canvas.getContext('2d')
  ctx.strokeStyle = 'green'
  var minDistancePosition = {
    x: 0,
    y: 0,
    orientation: '',
    direction: ''
  }
  var minDistance = 0
  parkingPlaces.forEach(function (parkingPlace) {
    var x = parkingPlace.position.x
    var y = parkingPlace.position.y

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
      }
    }
  })
  if (minDistancePosition.direction == 'right') {
    ctx.beginPath()
    ctx.moveTo(carPosition.x, carPosition.y)
    ctx.lineTo(carPosition.x, carPosition.y + 180)
    ctx.lineTo(carPosition.x - 660, carPosition.y + 180)
    ctx.lineTo(carPosition.x - 660, carPosition.y + 80)
    ctx.lineTo(minDistancePosition.x + 20, carPosition.y + 80)
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
}
