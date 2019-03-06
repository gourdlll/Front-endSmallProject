Page({
  data: {
    actionSheetLevelItems: ['A', 'B', 'C', 'D'],
    addLevelData: "",
    addLevelDis: false
  },
  addLevel: function(event) {
    this.setData({
      addLevelDis: true
    })
    var that = this
    wx.showActionSheet({
      itemList: that.data.actionSheetLevelItems,
      success: function(res) {
        if (!res.cancel) {
          that.setData({
            addLevelData: that.data.actionSheetLevelItems[res.tapIndex]
          })
        }
        that.setData({
          addLevelDis: false
        })
      }
    })
  }
})