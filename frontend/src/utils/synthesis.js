export var canvasMovie = function () {
  var data = {
  backColor: '#333333',
  textColor: '#ffffff',
  scenes: [
    {
      text: 'Promo',
      logo: `${require('./img/logo.png')}`,
      duration: 6,
      opBackColor: '#ffffff',
      opBoxColor: '#333333',
      opTextColor: '#ffffff',
      type: 'op'
    }
    ,{
      text: 'こんな感じで\n画像と文字が映像になります',
      image: `${require('./img/screenshot.PNG')}`,
      duration: 2,
      type: 'image'
    },
    {
      text: 'これは動画を簡単に\n作成できるツールです。\n\nスマホで撮影した映像を\n投稿するとこんな感じになります。',
      movie: `${require('./img/movie.mov')}`,
      duration: 3,
      type: 'movie'
    },
    {
      text: '動画２つ目だ\n\nスマホで撮影した映像を\n投稿するとこんな感じになります。',
      movie: `${require('./img/movie.mov')}`,
      duration: 10,
      type: 'movie'
    }
  ]
}

// 定数
var width = 1280
var height = 720
var iphoneImage = `${require('./img/frame.png')}`
var frameRate = 10
var boxWidth = 150

var canvas
var video
var ctx

var exportImages = []
var time = 0
var animationTimer
var sceneNum = 0


// web speech API
var synthes = new SpeechSynthesisUtterance()
synthes.lang = "ja-JP"

// 初期化処理
var initialize = function () {
  video = document.createElement("video")
  document.body.appendChild(video)
  canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  canvas.width = width
  canvas.height = height
  ctx = canvas.getContext('2d')
  encoder(sceneNum)
}

var encoder = function () {
  if (data.scenes.length <= sceneNum) {
    console.log('complete')
    console.log(exportImages)
    var xmlHttpRequest = new XMLHttpRequest()
    xmlHttpRequest.onreadystatechange = function() {
      var READYSTATE_COMPLETED = 4;
      var HTTP_STATUS_OK = 200;
      if ( this.readyState == READYSTATE_COMPLETED && this.status == HTTP_STATUS_OK ) {
         console.log(this.responseText)
      }
    }
    xmlHttpRequest.open( 'POST', 'http://localhost:3000/api/upload' )
    xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json' )
    xmlHttpRequest.send(JSON.stringify(exportImages))
    return
  }
  console.log('call encoder: ' + sceneNum)
  var scene = data.scenes[sceneNum]
  switch (scene.type) {
    case 'movie':
      var movieTypeEncoder = new MovieTypeEncoder(data.scenes[sceneNum])
      movieTypeEncoder.encode(encoder)
      console.log('movie encode')
      break;
    case 'image':
      var imageTypeEncoder = new ImageTypeEncoder(data.scenes[sceneNum])
      imageTypeEncoder.encode(encoder)
      console.log('image encode')
      break;
    case 'op':
      var opTypeEncoder = new OpTypeEncoder(data.scenes[sceneNum])
      opTypeEncoder.encode(encoder)
      console.log('op encode')
      break;
    default:
      console.log('default type')
      break;
  }
}

class OpTypeEncoder {
  constructor (scene) {
    this.scene = scene
    this.encode = this.encode.bind(this)
    this.draw = this.draw.bind(this)
    this.titleBox = [width, 200+boxWidth, boxWidth*3, 150]
    this.logoBox = [-200, 270, boxWidth, boxWidth]
  }

  encode (callback) {
    time = 0
    this.callback = callback
    animationTimer = setInterval(this.draw, 1000/frameRate)
  }

  draw () {
    time = time + 1
    var logo = this.scene.logo

    // Boxの位置調整
    this.logoBox[0] += (width/2-this.logoBox[0])/10
    this.titleBox[0] -= (this.titleBox[0]+this.titleBox[2]/2-width/2)/5

    //canvas初期化
    ctx.fillStyle = this.scene.opBackColor
    ctx.fillRect(0, 0, width, height)

    // Boxの描画
    drawCircle(this.scene.opBoxColor, boxWidth/2, this.logoBox)
    drawBox(this.scene.opBoxColor, this.titleBox)

    // テキストの描画
    drawLogo(this.scene.text, this.scene.opTextColor, [width/2-this.titleBox[2]/2 + 100, this.titleBox[1] + 100])

    Promise.resolve()
      .then(function() {
        //枠の描画
        return drawImage(logo, width/2-boxWidth/2+boxWidth*0.15, 180+boxWidth*0.20, boxWidth*0.7, boxWidth*0.7)
      })
      .then(function () {
        return new Promise((resolve, reject) => {
          exportImages.push(exportPng())
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    if (time > frameRate*this.scene.duration) {
      clearInterval(animationTimer)
      sceneNum += 1
      this.callback(sceneNum)
    }

  }
}

class ImageTypeEncoder {
  constructor (scene) {
    this.scene = scene
    this.encode = this.encode.bind(this)
    this.draw = this.draw.bind(this)
  }
  encode (callback) {
    time = 0
    this.callback = callback
    say(this.scene.text)
    animationTimer = setInterval(this.draw, 1000/frameRate)
  }
  draw () {
    time = time + 1
    var image = this.scene.image
    //canvas初期化
    ctx.fillStyle = data.backColor
    ctx.fillRect(0, 0, width, height)
    // テキストの描画
    // drawText(this.scene.text +'\n' + time, 100, 300, 10)
    drawText(this.scene.text, 100, 300, 10)

    Promise.resolve()
      .then(function() {
        //枠の描画
        return drawImage(iphoneImage, width/2, 0, 450, height)
      })
      .then(function() {
        //枠の描画
        return drawImage(image, 758, 168, 216, 393)
      })
      .then(function () {
        return new Promise((resolve, reject) => {
          exportImages.push(exportPng())
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    if (time > frameRate*this.scene.duration) {
      clearInterval(animationTimer)
      sceneNum += 1
      this.callback(sceneNum)
    }
  }
}

class MovieTypeEncoder {
  constructor (scene) {
    this.scene = scene
    this.encode = this.encode.bind(this)
    this.draw = this.draw.bind(this)
  }

  encode (callback) {
    video.setAttribute('src', this.scene.movie)
    // video.play()
    video.addEventListener('loadeddata', function() {
      video.play()
    })
    this.callback = callback
    say(this.scene.text)
    time = 0
    animationTimer = setInterval(this.draw, 1000/frameRate)
  }

  draw () {
    time = time + 1
    ctx.fillStyle = data.backColor
    ctx.fillRect(0, 0, width, height)

    // テキストの描画
    drawText(this.scene.text)

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
    if (time >= frameRate*this.scene.duration) {
      clearInterval(animationTimer)
      sceneNum += 1
      this.callback(sceneNum)
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

var drawText = function (text, x, y, fadeIn = 1) {
  ctx.globalAlpha = time/fadeIn
  ctx.fillStyle = data.textColor
  ctx.font = "36px 'メイリオ'";
  var textList = text.split('\n');
  var lineHeight = ctx.measureText("あ").width;
  textList.forEach(function(text, i) {
    ctx.fillText(text, x, y+lineHeight*i);
  })
  ctx.globalAlpha = 1
}

var drawVideo = function () {
  ctx.drawImage(video, 758, 168, 216, 393)
}

var drawLogo = function (text, color, pos) {
  ctx.fillStyle = color
  ctx.font = "96px 'メイリオ'";
  ctx.fillText(text, pos[0], pos[1], pos[2], pos[3])
}

var drawCircle = function (color, scale, pos) {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.arc(pos[0], pos[1], scale, 0, Math.PI*2, false)
  ctx.fill()
}

var drawBox = function (color, pos) {
  ctx.fillStyle = color
  ctx.fillRect(pos[0], pos[1], pos[2], pos[3])
}

// 現在のcnavasのモノをbase64で返す
var exportPng = function () {
  var data = canvas.toDataURL("image/png");
  return data
}

var say = function(text) {
  console.log('say: ' + text)
  synthes.text = text
  speechSynthesis.speak(synthes)
}

window.onload = function() {
  console.log('これは動画を簡単に作成できるツールです。')
  initialize()
}
initialize()
}
