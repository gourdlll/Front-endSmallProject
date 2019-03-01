// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const ctx = wx.createCanvasContext('canvasII')
    var text = '超级无敌长的一段文字canvas不能自动换行怎么办呢实现自动换行有点儿麻烦'
    var c = text.split(""); //split方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    ctx.setFontSize(16)
    ctx.setFillStyle("#000")
    for (var a = 0; a < c.length; a++) {
      if (ctx.measureText(temp).width < 250) { //measureText测量文本尺寸信息
        temp += c[a];
      } else {
        a--; //防止字符丢失
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);

    //如果数组长度大于2 则截取前两个
    if (row.length > 2) {
      var rowCut = row.slice(0, 2); //slice从已有的数组中返回选定的元素。
      var rowPart = rowCut[1];
      var test = "";
      var empty = [];
      for (var a = 0; a < rowPart.length; a++) {
        if (ctx.measureText(text).width < 220) {
          test += rowPart[a];
        } else {
          break;
        }
      }
      empty.push(test);
      var beyond = empty[0] + "..." //只显示两行，超出的用...表示
      rowCut.splice(1, 1, beyond);
      row = rowCut;
    }
    for (var b = 0; b < row.length; b++) {
      ctx.fillText(row[b], 10, 30 + b * 30, 300);
    }
    ctx.draw();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})