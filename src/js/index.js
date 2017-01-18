import '../css/style.css';
import $ from 'jquery';
import p5 from 'p5';

function sketch(p){
  var canvasWidth, currentCanvasWdith, currentCanvasHeight, scaleValue, centerT;

  p.responsive_canvas = function(){
    p.translate((1 - scaleValue)*currentCanvasWdith/2, (1 - scaleValue)*currentCanvasHeight/2);
    p.scale(scaleValue, scaleValue);
  }

  p.preload = function(){
    currentCanvasWdith = $('#sketch').width();
    currentCanvasHeight = $('#sketch').height();

    if(currentCanvasWdith < 640){
      scaleValue = currentCanvasWdith/640;
    } else{
      scaleValue = currentCanvasWdith/canvasWidth;
    }
  }

  p.setup = function(){
    p.createCanvas(currentCanvasWdith, currentCanvasHeight)
    .id('canvas')
    .parent('sketch');

    p.noLoop();
  }

  p.draw = function(){
    p.responsive_canvas();
    p.ellipse(p.width/2, p.height/2, 100, 100);
  }

  p.windowResized = function(){
    currentCanvasWdith = $('#sketch').width();
    currentCanvasHeight = $('#sketch').height();
    p.resizeCanvas(currentCanvasWdith, currentCanvasHeight);

    if(currentCanvasWdith < 640){
      scaleValue = currentCanvasWdith/640;
    } else{
      scaleValue = currentCanvasWdith/canvasWidth;
    }
  }
}

var app = new p5(sketch, $('body')[0]);
