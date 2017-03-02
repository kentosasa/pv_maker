var data = {
  backColor: '#333333',
  textColor: '#ffffff',
  scenes: [
    {
      text: 'これは動画を簡単に\n作成できるツールです。',
      movie: './img/movie.mov'
    }
  ]
}

// 定数
var width = 1280
var height = 720
var iphoneImage = './img/frame.png'
var frameRate = 10

var canvas
var video
var ctx

var exportImages = []
var time = 0
var animationTimer

// 初期化処理
var initialize = function () {
  video = document.getElementById("video")

  canvas = document.getElementById('canvas')
  canvas.width = width
  canvas.height = height
  ctx = canvas.getContext('2d')
  var encoder = new EncodeMovieType(data.scenes[0])
  encoder.encode()

}

class EncodeMovieType {
  constructor (scene) {
    console.log(scene)
      this.exportImages = []
      this.scene = scene
      this.time= 0
      this.encode = this.encode.bind(this)
      this.draw = this.draw.bind(this)
  }

  encode () {
    video.setAttribute('src', this.scene.movie)
    video.play()
    video.addEventListener('loadeddata', function() {
      video.play()
    })
    time = 0
    animationTimer = setInterval(this.draw, 100)
  }

  draw () {
    time = time + 1
    ctx.fillStyle = data.backColor
    ctx.fillRect(0, 0, width, height)

    // テキストの描画
    drawText(this.scene.text +'\n' + time, 50, 300)
    Promise.resolve()
      .then(function() {
        //枠の描画
        return drawImage(iphoneImage, width/2, 0, 450, height)
      })
      .then(function () {
        return new Promise(function(resolve, reject) {
          drawVideo()
          resolve('taskB death')
        })
      })
      .then(function () {
        return new Promise((resolve, reject) => {
          if (time < 100) {
            exportImages.push(exportPng())
          }
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    if (time > 100) {
      console.log(exportImages)
      clearInterval(animationTimer)
    }
  }
}

// 非同期処理
var drawImage = function (url, x, y, width, height) {
    return new Promise(function(resolve, reject) {
    var img = new Image()
    img.src = url
    img.onload = function() {
      ctx.drawImage(img, x, y, width, height)
      resolve('draw image');
    }
  })
}

var drawText = function (text, x, y) {
  ctx.fillStyle = data.textColor
  ctx.font = "36px 'メイリオ'";
  var textList = text.split('\n');
  var lineHeight = ctx.measureText("あ").width;
  textList.forEach(function(text, i) {
    ctx.fillText(text, x, y+lineHeight*i);
  })
}

var drawVideo = function () {
  ctx.drawImage(video, 758, 168, 216, 393)
}

// 現在のcnavasのモノをbase64で返す
var exportPng = function () {
  var data = canvas.toDataURL("image/png");
  return data
}

window.onload = function() {
  console.log('これは動画を簡単に作成できるツールです。')
  initialize()
}