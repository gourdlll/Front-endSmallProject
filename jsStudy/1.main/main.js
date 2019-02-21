$(document).ready(function () {
    'use strict'
    paper.install(window);//将paper.js声明成全局变量
    paper.setup(document.getElementById('mainCanvas'));
    var c = Shape.Circle(200,200,50);//(x.y坐标和半径)
    c.fillColor = 'green';
    paper.view.draw();//在屏幕上绘画

    console.log('main.jsloaded');
})
