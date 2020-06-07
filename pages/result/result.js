Page({
  data: {
    gachaTimes: null, 
    winTimes: null, 
    probability: null, 
    result: 1
  }, 
  onLoad: function(options) {
    this.setData({
      gachaTimes: options.gachaTimes, 
      winTimes: options.winTimes, 
      probability: options.probability, 
      result: this.combi(options.gachaTimes, options.winTimes, options.probability)
    });
  }, 
  return: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }, 
  combi: function(gachaTimes, winTimes, probability) {
    var or_probability = 1 - probability;
    var lossTimes = gachaTimes - winTimes;
    return (this.factorial(gachaTimes)) / (this.factorial(winTimes) * this.factorial(lossTimes)) * this.pow(probability, winTimes) * this.pow(or_probability, lossTimes);
  }, 
  factorial: function(n) {
    var output = 1;
    for(var i = 1; i <= n; i++) {
      output = output * i;
    }
    return output;
  }, 
  pow: function(m, n) {
    var output = m;
    for(var i = 1; i < n; i++) {
      output = output * m;
    }
    return output;
  }
})