Page({
  data: {
    pickerShow: false,
    val: [ // 数据列表
      ['红色', '蓝色', '白色', '绿色', '黄色']
      // ['红色', '蓝色', '白色', '绿色', '黄色']
    ]
  },
  finishHandler(e) {
    console.log(e.detail) // 选择的结果 如：["红色", "黄色"]
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