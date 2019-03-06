$(document).ready(function () {
    'use strict'
    paper.install(window);//将paper.js声明成全局变量
    paper.setup(document.getElementById('mainCanvas'));

    //单个圆
    // var c = Shape.Circle(200,200,50);//(x.y坐标和半径)
    // c.fillColor = 'red';

    //64个均匀排列的圆
    // var c;
    // for (var x = 25; x < 400; x += 50) {
    //   for (var y = 25; y < 400; y += 50) {
    //     c = Shape.Circle(x, y, 20);
    //     c.fillColor = 'red'
    //   }
    // }

    //hello world
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    //处理用户输入 点击圆
    var tool = new Tool();
    //给tool绑定了一个点击事件
    //每单击一次，就出现一个圆
    tool.onMouseDown = function (event) {
      // var c = Shape.Circle(event.point.x, event.point.y, 20);
      var c = Shape.Circle(event.point, 20)
      c.fillColor = 'red'
    }

    paper.view.draw();//在屏幕上绘画

    console.log('main.jsloaded');
  }
)
