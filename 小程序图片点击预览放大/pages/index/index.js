//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgalist: ['http://www.qikemao.cn/uploads/allimg/180119/1-1P11915531T43.jpg', 'http://www.qikemao.cn/uploads/allimg/180119/1-1P11915531T43.jpg', 'http://www.qikemao.cn/uploads/allimg/180119/1-1P11915531T43.jpg', 'http://www.qikemao.cn/uploads/allimg/180119/1-1P11915531T43.jpg'] //数组
  },
  
  //单张图片预览点击事件
  preSingleImage: function(e) {
    var src = e.currentTarget.dataset.src; //获取src
    //图片预览
    wx.previewImage({
      current: src,
      urls: [src]
    })
    console.log("这是1" + src);
  },

  //多张图片预览点击事件
  preManyImage: function(e) {
    var current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgalist
    })
  }
})