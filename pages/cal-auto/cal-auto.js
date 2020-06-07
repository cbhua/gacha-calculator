Page({
  data: {
    index: 0,
    gacahTimes: 1,
    winTimes: 1,
    array: ['BanGDream', 'Love Live!', '少女前线', '公主链接'], 
    describe: ['四星概率是 3%', 'UR 概率是 1%', '最稀有概率为 5%', '六星概率为 3%'], 
    probability: [0.03, 0.01, 0.05, 0.03]
    // probability: 0.03
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  back: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }, 
  gachaTimesInput: function(e) {
    this.setData({
      gacahTimes: e.detail.value
    })
  }, 
  winTimesInput: function(e) {
    this.setData({
      winTimes: e.detail.value
    })
  }, 
  submit: function() {
    wx.navigateTo({
      url: '/pages/result/result?gachaTimes=' + this.data.gacahTimes + '&winTimes=' + this.data.winTimes + '&probability=' + this.data.probability[this.data.index]
    })
  }
})