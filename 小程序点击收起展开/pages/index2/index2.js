Page({
  data: {
    list01: [{
      item_id: 0
    }, {
      item_id: 11
    }],

    // 展开折叠
    selectedFlag: [],

  },
  // 展开折叠选择 
  changeToggle: function(e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }

    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },

})