var data = {
  imageUrl: 'http://1.bp.blogspot.com/_HmZhi2U5N_w/TDo7b5ttEYI/AAAAAAAABF8/VwRvxQd8_1o/s1600/IMG_0002.PNG',
  text: 'これは動画を簡単に作成できるツールです。',
  movie: './img/movie.mov',
  backColor: '#333333',
  textColor: '#ffffff'
}

// 定数
var width = 1280
var height = 720
var frame = './img/frame.png'
var time = 0
var canvas
var video
var ctx
var animationTimer

// 初期化処理
var initialize = function () {
  video = document.getElementById("video")
  video.addEventListener('loadeddata', function() {
    video.play()
  })
  canvas = document.getElementById('canvas')
  canvas.width = width
  canvas.height = height
  ctx = canvas.getContext('2d')
  animationTimer = setInterval(draw, 100);

  ctx.fillStyle = data.backColor
  ctx.fillRect(0, 0, width, height)
}

var draw = function () {
  time = time + 1

  // テキストの描画
  drawText(data.text + time)

  Promise.resolve()
    .then(function() {
      return drawImage(frame, width/2, 0, 450, height)
    })
    .then(function () {
      return new Promise(function(resolve, reject) {
        drawVideo()
        resolve('taskB death')
      })
    })
    .catch(function (error) {
      console.log(error)
    })

  // iPhoneの枠を描画
  // drawImage(frame, width/2, 0, 450, height)

  // drawImage(data.imageUrl, 758, 168, 216, 393)
  // drawVideo()
  //exportPng()
}

// 非同期処理
var drawImage = function (url, x, y, width, height) {
    return new Promise(function(resolve, reject) {
    var img = new Image()
    img.src = frame
    img.onload = function() {
      ctx.drawImage(img, x, y, width, height)
      resolve('draw image');
    }
  })
}

var drawText = function (text) {
  ctx.fillStyle = data.textColor
  ctx.font = "24px 'メイリオ'";
  ctx.fillText(text, 10, 50)
}

var drawVideo = function () {
  ctx.drawImage(video, 758, 168, 216, 393)
}


// 現在のcnavasのモノをbase64で返す
var exportPng = function () {
  var data = canvas.toDataURL("image/png");
  console.log(data)
}

window.onload = function() {
  console.log('これは動画を簡単に作成できるツールです。')
  initialize()
}
