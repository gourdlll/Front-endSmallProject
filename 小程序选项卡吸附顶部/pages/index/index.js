var app = getApp()

Page({
  data: {
    navbar: ['首页', '图集', '我的'],
    currentTab: 0,
    bIsPaste: false,
    height: 0,
  },
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  onLoad(options) {
    const query = wx.createSelectorQuery()
    query.select('#topview').boundingClientRect((res) => {
      console.log(res.height)
      this.data.height = res.height //res.height选项卡距离顶部的距离
      //
    }).exec()

  },
  // 滚动时获取离顶部的距离
  // 滚动过的距离大于距离顶部的距离时，修改顶部导航栏样式
  // 将原有导航栏设置为fixed，吸附顶部

  //滚动监听
  onPageScroll(e) {
    console.log(e.scrollTop) //e.scrollTop滚动过的距离
    if (e.scrollTop >= this.data.height) {
      if (this.data.bIsPaste) {
        return
      }
      this.setData({
        bIsPaste: true
      })
    } else {
      this.setData({
        bIsPaste: false
      })
    }
  }

  //scroll-view组件和onPageScroll冲突，所以用下面的scroll
  // scroll: function (e) {
  //   console.log(e.detail.scrollTop + "滚动")
  //   if (e.detail.scrollTop >= this.data.height) {
  //     if (this.data.bIsPaste) {
  //       return
  //     }
  //     this.setData({
  //       bIsPaste: true
  //     })
  //   } else {
  //     this.setData({
  //       bIsPaste: false
  //     })
  //   }
  // }
})