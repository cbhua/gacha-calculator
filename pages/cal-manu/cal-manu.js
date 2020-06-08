Page({
  data: {
    gacahTimes: 1,
    winTimes: 1,
    probability: 0
  },
  gachaProbInput: function(e) {
    this.setData({
      probability: e.detail.value * 0.01
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
      url: '/pages/result/result?gachaTimes=' + this.data.gacahTimes + '&winTimes=' + this.data.winTimes + '&probability=' + this.data.probability
    });
  }
})