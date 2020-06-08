Page({
  data: {
    index: 0,
    gacahTimes: 1,
    winTimes: 1,
    array: ['BanGDream', 'BanGDream Fes', 'Love Live!', '明日方舟', '公主链接', '崩坏三(女武神)', '崩坏三(武器)', '崩坏三(圣痕)', '阴阳师', '碧蓝航线', 'FGO(从者)', 'FGO(概念礼装)', '地球 OL'], 
    describe: ['★★★★ 概率为 3%', '★★★★ 概率为 6%', 'UR 概率为 1%', '★★★★★★ 概率为 2%', '★★★ 概率为 2.5%', 'S 概率为 1.5%', '★★★★ 概率为 0.46%', '★★★★ 概率为 0.73%', 'SSR 概率为 1.25%', '★★★★★★ 概率为 7%', '★★★★★ 概率为 1%', '★★★★★ 概率为 4%', '别做梦了少年'], 
    probability: [0.03, 0.06, 0.01, 0.02, 0.025, 0.015, 0.0046, 0.0073, 0.0125, 0.007, 0.01, 0.04, 0]
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
    });
  }
})