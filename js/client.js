$(document).foundation();

$(window).load(function(){
  draw();
});

function draw(){

/*  var canvas = document.getElementById('HeaderCanvas');
  if (canvas.getContext){*/
    var ctx = document.getCSSCanvasContext('2d', 'animation', 1200, 300);
  for (var i = 0; i < 12; i++) {
    ctx.fillStyle = gimmeDatRGB();
    ctx.fillRect (i*100, 0, 100, 300);
  }
  /*}*/
}
function gimmeDatRGB() {
  var min = 127;
  var range = 255-min;
    var r = String(min + Math.round(Math.random() * range));
    var g = String(min + Math.round(Math.random() * range));
    var b = String(min + Math.round(Math.random() * range));
  var rgb = "rgb("+r+","+g+","+b+")";
  return rgb;
}