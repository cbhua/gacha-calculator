Page({
  data: {
    gachaTimes: null, 
    winTimes: null, 
    probability: null, 
    result: 1,
    describe: null, 
    result_type_flag: false, 
    nan: true, 
    correct: true
  }, 
  onLoad: function(options) {
    console.log("run onload");
    this.setData({
      gachaTimes: options.gachaTimes, 
      winTimes: options.winTimes, 
      probability: options.probability, 
      result: this.combi(options.gachaTimes, options.winTimes, options.probability).toFixed(10), 
      describe: this.describe_type(this.combi(options.gachaTimes, options.winTimes, options.probability))
    });
    // console.log(options.gachaTimes + " " + options.winTimes);
    // console.log(options.gachaTimes < options.winTimes);
    if(parseInt(options.gachaTimes) < parseInt(options.winTimes)) {
      console.log("change correct");
      this.setData({
        correct: false
      })
    };
    if(isNaN(this.combi(options.gachaTimes, options.winTimes, options.probability)) || (this.combi(options.gachaTimes, options.winTimes, options.probability) < 0.00000000001)) {
      this.setData({
        nan: false
      })
    }
  }, 
  return: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }, 
  combi: function(gachaTimes, winTimes, probability) {
    if(probability == 0) {
      return 0;
    }
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
    if(n == 0 || m == 0) {
      return 1;
    }
    var output = m;
    for(var i = 1; i < n; i++) {
      output = output * m;
    }
    return output;
  }, 
  describe_type: function(i) {
    if(0.5 > i && i >= 0.3) {
      return '立直';
    }
    else if(0.3 > i && i >= 0.15) {
      return '断幺九';
    }
    else if(0.15 > i && i >= 0.07) {
      return '一发';
    }
    else if(0.07 > i && i >= 0.03) {
      return '混一色';
    }
    else if(0.03 > i && i >= 0.01) {
      return '七对子';
    }
    else if(0.01 > i && i >= 0.004) {
      return '清一色';
    }
    else if(0.004 > i && i >= 0.0005) {
      return '小三元';
    }
    else if(0.0005 > i && i >= 0.0003) {
      return '大三元';
    }
    else if(0.0003 > i && i >= 0.0002) {
      return '国士无双';
    }
    else if(0.0002 > i && i >= 0.00008) {
      return '小四喜';
    }
    else if(0.00008 > i && i >= 0.00005) {
      return '四暗刻单骑';
    }
    else if(0.00005 > i && i >= 0.00002) {
      return '字一色';
    }
    else if(0.00002 > i && i >= 0.000009) {
      return '天和';
    }
    else if(0.000009 > i && i >= 0.000005) {
      return '大四喜';
    }
    else if(0.000005 > i && i >= 0.000001) {
      return '纯正九宝莲灯';
    }
    else {
      return null;
    }
  },
  back: function() {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})