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
    this.draw();
  },

  draw: function() {
    var that = this;
    const device = wx.getSystemInfoSync()
    console.log("device.windowWidth=" + device.windowWidth)
    console.log("device.screenHeight=" + device.screenHeight)
    const screenWidth = device.windowWidth
    this.setData({
      width: screenWidth,
      height: screenWidth
    })

    const ctx = wx.createCanvasContext('canvasExe')
    //本地图片
    let width = screenWidth
    let height = 280
    ctx.save()
    ctx.drawImage('../image/bgcard.jpg', 0, 0, width, height)
    ctx.drawImage('../image/code.jpg', width - 140, 290, 125, 125)

    //文字描述
    ctx.moveTo(width / 2, 20) //画笔移动到垂直居中位置
    ctx.setFillStyle('#333') //字体颜色
    ctx.setFontSize(15) //字体大小
    ctx.fillText("我是小葫芦", 20, 320) //字体内容和位置
    ctx.setFillStyle('#F8BF60') //字体颜色
    ctx.fillText("长按识别，查看更多", width - 140, 430)

    //二维码里面的头像(头像弄成圆)
    ctx.save()
    ctx.beginPath()
    let r = 28;
    let d = r * 2;
    let x = 125 / 2 + r + width - 196;
    let y = 290 + 125 / 2 - r;
    let cx = x + r;
    let cy = y + r;
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage('../image/bgcard.jpg', x, y, d, d);
    ctx.restore();
    ctx.draw()

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