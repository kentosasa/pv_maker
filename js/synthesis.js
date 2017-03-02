'use strict';

var data = {
  imageUrl: 'http://1.bp.blogspot.com/_HmZhi2U5N_w/TDo7b5ttEYI/AAAAAAAABF8/VwRvxQd8_1o/s1600/IMG_0002.PNG',
  text: 'これは動画を簡単に作成できるツールです。',
  movie: './img/movie.mov',
  backColor: '#333333',
  textColor: '#ffffff'
}

// 定数
var width = 1280;
var height = 720;
var frame = './img/frame.png';
var count = 0;
var canvas;
var video;
var ctx;
var animationTimer;

// 初期化処理
var initialize = function initialize() {
  video = document.getElementById("video");
  video.addEventListener('loadeddata', function () {
    video.play();
  });
  canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');
  animationTimer = setInterval(draw, 1000);
};

var draw = function draw() {
  count = count + 1;
  ctx.fillStyle = data.backColor;
  ctx.fillRect(0, 0, width, height);

  // テキストの描画
  drawText(data.text + count);

  // iPhoneの枠を描画
  drawImage(frame, width / 2, 0, 450, height);

  drawImage(data.imageUrl, 758, 168, 216, 393);
  // drawVideo()
  //exportPng()
};

var drawText = function drawText(text) {
  ctx.fillStyle = data.textColor;
  ctx.font = "24px 'メイリオ'";
  ctx.fillText(text, 10, 50);
};

var drawVideo = function drawVideo() {
  ctx.drawImage(video, 758, 168, 216, 393);
};

// 非同期処理
var drawImage = function drawImage(url, x, y, width, height) {
  var img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, x, y, width, height);
  };
};

// 現在のcnavasのモノをbase64で返す
var exportPng = function exportPng() {
  var data = canvas.toDataURL("image/png");
  console.log(data);
};

window.onload = function () {
  console.log('これは動画を簡単に作成できるツールです。');
  initialize();
};
