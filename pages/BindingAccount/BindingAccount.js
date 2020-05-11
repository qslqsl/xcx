// pages/BindingAccount/BindingAccount.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
    jymmzdmm:'交易密码',
    checkone:false,
    checktwo:true,
    index:0,
    qxz:'请选择',
    PasswordState:1,
    Identitystete: 0,
    check: false,
    checked: true,
    xzstate: 0,
    jyzdState:0,
    choosestate: 0,
    // 经纪商数据
    BrokerFilterDataList: [{
        ServerName: '第一金汇',
        ServiceCharge: '零手续费', //手续费
        ServiceSupervise: 'FMA FSP1762', //监管
        MinimumDeposit: '100',
      },
      {
        ServerName: '第一金',
        ServiceCharge: '零手续费', //手续费
        ServiceSupervise: 'FMA FSP1762', //监管
        MinimumDeposit: '100',
      },
      {
        ServerName: '第一金汇',
        ServiceCharge: '零手续费', //手续费
        ServiceSupervise: 'FMA FSP1762', //监管
        MinimumDeposit: '100',
      }
    ],
    fwqarr:[
      { one: '服务器1', id:0},
      { one: '服务器2', id:1},
      { one: '服务器3', id:2},
    ],
    mm:[
      { two:' 交易密码', id:0},
      { two: '只读密码', id:1}
    ]
  },

  QXhideModalfour:function(){
    let that=this
    that.hideModalfour()
  },
  UpdateIdentity: function(e) {
    let that = this;
    that.hideModalthree();
    setTimeout(function() {
      that.showModaltwo();
    }, 600)
    let index = that.data.index
    let checkone=that.data.check
    //console.log(index)
    if(index==0){
      that.setData({
        Identitystete: 0,
        checktwo: true,
        check: false,
      })
    }else{
      that.setData({
        Identitystete: 1,
        checktwo:false,
        check: true,
      })
    }
  },
  IdentityBtn: function(e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    this.setData({
      index:index
    })
    //console.log(index)
    if (index == 0) {
      this.setData({
        Identitystete: 0,
      })
    }else {
      this.setData({
        Identitystete: 1,
      })
    }
  },
  radiocon: function(e) {
    var check = this.data.check;
    check = !check;
    this.setData({
      check: check
    })
  },
  BangDingTrader: function() {
    wx.showToast({
      title: '绑定成功',
    })
    let that = this
    setTimeout(function() {
      that.setData({
        Identitystete: 0,
      })
      that.hideModalthree();
    }, 800)
  },
  chooseid: function(e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that=this
    let arrfwq = that.data.fwqarr[index].one
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestate: 0,
        qxz:arrfwq
      })
    } else if (index == 1) {
      this.setData({
        choosestate: 1,
        qxz: arrfwq
      })
    } else {
      this.setData({
        choosestate: 2,
        qxz: arrfwq
      })
    }
    this.hideModalfour();
  },
  jyzdmm: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let mmarr=this.data.mm[index].two
    console.log(index)
    console.log(mmarr)
    if (index == 0) {
      this.setData({
        jyzdState:0,
        jymmzdmm: mmarr
      })
    } else {
      this.setData({
        jyzdState:1,
        jymmzdmm: mmarr
      })
    }
    this.PWDhideModal();
  },
  //点击我显示底部弹出框
  clickme: function() {
    this.showModal();
  },
  //显示对话框
  showModal: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  TCtwo: function() {
    this.showModaltwo();
    this.hideModal();
  },
  //显示对话框
  showModaltwo: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatatwo: animation.export(),
      showModalStatustwo: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatatwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModaltwo: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatatwo: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatatwo: animation.export(),
        showModalStatustwo: false
      })
    }.bind(this), 200)
    this.hideModal()
  },

  //点击我显示底部弹出框
  GotoThree: function() {
    this.showModalthree();
    this.hideModaltwo();
  },
  //显示对话框
  showModalthree: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatathree: animation.export(),
      showModalStatusthree: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatathree: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalthree: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatathree: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatathree: animation.export(),
        showModalStatusthree: false
      })
    }.bind(this), 200)
    this.hideModaltwo();
  },

  //点击我显示底部弹出框
  ChoosePop: function() {
    this.showModalfour();
  },
  //显示对话框
  showModalfour: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatafour: animation.export(),
      showModalStatusfour: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatafour: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalfour: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatafour: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatafour: animation.export(),
        showModalStatusfour: false
      })
    }.bind(this), 200);
  },


  //点击我显示底部弹出框
  password: function () {
    this.PWDshowModal();
  },
  //显示对话框
  PWDshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      PWDanimationData: animation.export(),
      PWDshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        PWDanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  PWDhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      PWDanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        PWDanimationData: animation.export(),
        PWDshowModalStatus: false
      })
    }.bind(this), 200)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '绑定账户',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})