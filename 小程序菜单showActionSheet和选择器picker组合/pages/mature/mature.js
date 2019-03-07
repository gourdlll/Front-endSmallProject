// pages/mature/mature.js
Page({
  data: {
    pickerShow: false,
    val: [
      ['e', 'e', 't', 'y']
    ]
  },
  finishHandler(e) {
    console.log(e.detail)
  },

  showActionSheet: function() {
    var that = this
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
        that.setData({
          pickerShow: true
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})