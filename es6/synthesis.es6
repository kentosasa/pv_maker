var data = {
  imageUrl: 'http://1.bp.blogspot.com/_HmZhi2U5N_w/TDo7b5ttEYI/AAAAAAAABF8/VwRvxQd8_1o/s1600/IMG_0002.PNG',
  text: 'これは動画を簡単に\n作成できるツールです。',
  movie: './img/movie.mov',
  backColor: '#333333',
  textColor: '#ffffff'
}

// 定数
var width = 1280
var height = 720
var iphoneImage = './img/frame.png'
var frameRate = 10
var time = 0

var canvas
var video
var ctx
var animationTimer
var exportImages = []

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
}

var draw = function () {
  time = time + 1
  ctx.fillStyle = data.backColor
  ctx.fillRect(0, 0, width, height)

  // テキストの描画
  drawText(data.text +'\n' + time, 50, 300)

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
      return new Promise(function(resolve, reject) {
        if (time < 100) {
          exportImages.push(exportPng())
        } else {
          console.log(exportImages)
          clearInterval(animationTimer)
        }
      })
    })
    .catch(function (error) {
      console.log(error)
    })
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

var exportVideo = function () {
  var output = encoder.compile();
  var url = webkitURL.createObjectURL(output);
  console.log('url')
}

window.onload = function() {
  console.log('これは動画を簡単に作成できるツールです。')
  initialize()
}
