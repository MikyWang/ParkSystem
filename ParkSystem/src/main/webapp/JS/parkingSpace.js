function createParkingSpace () {
  var canvas = document.getElementById('parkingSpace')
  var ctx = canvas.getContext('2d')
  // 绘制大小
  ctx.strokeStyle = 'black'
  ctx.beginPath()
  ctx.moveTo(20, 20)
  ctx.lineTo(800, 20)
  ctx.lineTo(800, 550)
  ctx.moveTo(20, 20)
  ctx.lineTo(20, 550)
  ctx.moveTo(100, 550)
  ctx.lineTo(100, 470)
  ctx.lineTo(730, 470)
  ctx.lineTo(730, 550)
  ctx.stroke()
  ctx.closePath()
  var flag = 0
  var y = 20
  while (y < 425) {
    var x = 110
    var xflag = 0
    while (x < 690) {
      if (flag == 0) {
        y += 40
        flag++
      }
      if (flag == 1) {
        createDownPakingPlace(ctx, x, y)
      }
      if (flag == 2) {
        createUpPakingPlace(ctx, x, y)
      }
      xflag++
      if (xflag == 3) {
        x += 10
        xflag = 0
      }
      x += 40
    }
    if (flag == 2) {
      flag = 0
    } else {
      flag++
    }
    y += 40
  }
  for (var y = 460; y > 40; y -= 120) {
    addUpDirection(ctx, 755, y)
  }
  for (var y = 60; y < 460; y += 120) {
    addDownDirection(ctx, 60, y)
  }
  for (var y = 280; y >= 40; y -= 120) {
    for (var x = 640; x > 120; x -= 120) {
      addLeftDirection(ctx, x, y)
    }
  }
  for (var x = 120; x < 640; x += 120) {
    addRightDirection(ctx, x, 400)
  }
}

function addRightDirection (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + 20, y)
  ctx.lineTo(x + 10, y + 10)
  ctx.moveTo(x + 20 , y)
  ctx.lineTo(x + 10, y - 10)
  ctx.stroke()
  ctx.closePath()
}

function addLeftDirection (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x - 20, y)
  ctx.lineTo(x - 10, y + 10)
  ctx.moveTo(x - 20 , y)
  ctx.lineTo(x - 10, y - 10)
  ctx.stroke()
  ctx.closePath()
}

function addDownDirection (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y + 20)
  ctx.lineTo(x - 10, y + 10)
  ctx.moveTo(x , y + 20)
  ctx.lineTo(x + 10, y + 10)
  ctx.stroke()
  ctx.closePath()
}

function addUpDirection (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y - 20)
  ctx.lineTo(x - 10, y - 10)
  ctx.moveTo(x , y - 20)
  ctx.lineTo(x + 10, y - 10)
  ctx.stroke()
  ctx.closePath()
}

function createUpPakingPlace (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y + 40)
  ctx.lineTo(x, y)
  ctx.lineTo(x + 40, y)
  ctx.lineTo(x + 40, y + 40)
  ctx.stroke()
  ctx.closePath()
  for (var index = x; index < x + 40; index += 5) {
    if (index % 2 != 0) {
      ctx.strokeStyle = 'black'
    } else {
      ctx.strokeStyle = 'yellow'
    }
    ctx.beginPath()
    ctx.moveTo(index, y + 10)
    ctx.lineTo(index + 5, y + 10)
    ctx.stroke()
    ctx.closePath()
  }
}

function createDownPakingPlace (ctx, x, y) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y + 40)
  ctx.lineTo(x + 40, y + 40)
  ctx.lineTo(x + 40, y)
  ctx.stroke()
  ctx.closePath()
  for (var index = x; index < x + 40; index += 5) {
    if (index % 2 != 0) {
      ctx.strokeStyle = 'black'
    } else {
      ctx.strokeStyle = 'yellow'
    }
    ctx.beginPath()
    ctx.moveTo(index, y + 30)
    ctx.lineTo(index + 5, y + 30)
    ctx.stroke()
    ctx.closePath()
  }
}

$(document).ready(function () {
  createParkingSpace()
})
