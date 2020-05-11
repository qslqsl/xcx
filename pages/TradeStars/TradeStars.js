// pages/TradeStars/TradeStars.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,



    acstateTwo: 2,
    acstate: 2,
    showThree: false,
    showTwo: false,
    zhpjgdd: [
      {zhpjone: '账户评级高到低',id: 0},
      {zhpjone: '收益率高到低',id: 1},
      {zhpjone: '最近13周最大回撤低到高',id: 2},
      {zhpjone: '跟随者收益高到低',id: 3},
      {zhpjone: '订阅价格高到低',id: 4},
      {zhpjone: '订阅价格低到高',id: 5}
    ],
    kk: true,
    gg: true,
    ll: true,
    lllstate: 0,
    showOne: false,
    Aone: '账户评级高到低',
    Atwo: '收益率',
    Athree: '最近13周最大回撤',
    Afour: '筛选',
    imgurlone: '../../images/ic_tradestarts_down@2x.png',
    imgurltwo: '../../images/ic_tradestarts_right@2x.png',
    imgurlthree: '../../images/ic_tradestarts_up@2x.png',

    navState: 0,
    zfMoney: '￥7.47',
    zfName: '迟暮晚归@1',
    zfTime: '试用7天',
    ndgszh: '@1 2143443735 净值：￥111.11',
    zxgd: '正向跟单',
    gdblstate: 0,
    rrrstate: 0,
    nnnstate: 0,
    zhxz: [
      { zhone: '@1 2143443735 净值：￥111.11', id: 0 },
      { zhone: '@2 2143443735 净值：￥333.33', id: 1 },
      { zhone: '@3 2143443735 净值：￥444.44', id: 2 }
    ],
    gsfs: [
      { zxone: '正向跟单', id: 0 },
      { zxone: '反向跟单', id: 1 }
    ],
    dysj: [
      { time: '试用7天', money: '￥7.47', id: 0 },
      { time: '一个月', money: '￥29.90', id: 1 },
      { time: '三个月', money: '￥89.70', id: 2 },
      { time: '一年', money: '￥385.80', id: 3 }
    ],
    
    TradeStarsDataList: [
      {
        HeadingImage: '../../images/headimg/pic_Headportrait1.png',
        username: '淡墨无殇',
        AccountNumber: '1',
        level: '黄金',
        // shouyilv: '352.36%',
        // followAmount: '123.07',
        // subscribeAmount: '26',
        // Maxhuichelv: '352.36%',
        // shipanjine: '455，233.23',
        pricemonth: '29.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait2.png',
        username: '梨花雨凉',
        AccountNumber: '2',
        level: '白银',
        // shouyilv: '352.36%',
        // followAmount: '169.07',
        // subscribeAmount: '45',
        // Maxhuichelv: '312.36%',
        // shipanjine: '485，126.23',
        pricemonth: '99.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait3.png',
        username: '醉酒思红颜',
        AccountNumber: '3',
        level: '青铜',
        // shouyilv: '352.36%',
        // followAmount: '144.07',
        // subscribeAmount: '16',
        // Maxhuichelv: '352.36%',
        // shipanjine: '48，556.23',
        pricemonth: '99.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait4.png',
        username: '指上菁芜',
        AccountNumber: '4',
        level: '钻石',
        // shouyilv: '352.36%',
        // followAmount: '1223.07',
        // subscribeAmount: '44',
        // Maxhuichelv: '352.36%',
        // shipanjine: '45，256.23',
        pricemonth: '29.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait5.png',
        username: '淡墨无殇',
        AccountNumber: '2',
        level: '黄金',
        // shouyilv: '352.36%',
        // followAmount: '123.07',
        // subscribeAmount: '26',
        // Maxhuichelv: '352.36%',
        // shipanjine: '455，233.23',
        pricemonth: '29.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait6.png',
        username: '梨花雨凉',
        AccountNumber: '3',
        level: '白银',
        // shouyilv: '352.36%',
        // followAmount: '169.07',
        // subscribeAmount: '45',
        // Maxhuichelv: '312.36%',
        // shipanjine: '485，126.23',
        pricemonth: '99.9'
      },
      {
        HeadingImage: '../../images/headimg/pic_Headportrait1.png',
        username: '醉酒思红颜',
        AccountNumber: '4',
        level: '青铜',
        // shouyilv: '352.36%',
        // followAmount: '144.07',
        // subscribeAmount: '16',
        // Maxhuichelv: '352.36%',
        // shipanjine: '48，556.23',
        pricemonth: '99.9'
      }
    ]
  },
  backone:function(){
    wx.navigateBack({
      delta:1,
    })
  },
  backcolor: function (e) {
    let index = e.currentTarget.dataset.index
    if (index == 0) {
      this.setData({
        acstate: 0
      })
    } else if (index == 1) {
      this.setData({
        acstate: 1
      })
    } else if (index == 2) {
      this.setData({
        acstate: 2
      })
    } else if (index == 3) {
      this.setData({
        acstate: 3
      })
    } else if (index == 4) {
      this.setData({
        acstate: 4
      })
    }
  },
  backcolorTwo: function (e) {
    let index = e.currentTarget.dataset.index
    if (index == 0) {
      this.setData({
        acstateTwo: 0
      })
    } else if (index == 1) {
      this.setData({
        acstateTwo: 1
      })
    } else if (index == 2) {
      this.setData({
        acstateTwo: 2
      })
    } else if (index == 3) {
      this.setData({
        acstateTwo: 3
      })
    } else if (index == 4) {
      this.setData({
        acstateTwo: 4
      })
    }
  },
  zhpjgddTap: function (e) {
    let index = e.currentTarget.dataset.index;
    //console.log(e);
    let gszharr = this.data.zhpjgdd[index].zhpjone;
    //console.log(gszharr)
    let that = this
    if (index == 0) {
      that.setData({
        lllstate: 0,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    } else if (index == 1) {
      that.setData({
        lllstate: 1,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    } else if (index == 2) {
      that.setData({
        lllstate: 2,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    } else if (index == 3) {
      that.setData({
        lllstate: 3,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    } else if (index == 4) {
      that.setData({
        lllstate: 4,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    } else {
      that.setData({
        lllstate: 5,
        Aone: gszharr,
        showOne: false,
        ll: true
      })
      that.hideModal();
    }
  },



  //点击我显示底部弹出框
  aaaa: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this
    if (that.data.showOne == false) {
      that.setData({
        showOne: !that.data.showOne,
        showTwo: false,
        showThree: false,
        ll: !that.data.ll,
      })
      that.showModal();
    } else {
      that.setData({
        showOne: !that.data.showOne,
        ll: !that.data.ll,
      })
      that.hideModal();
    }
    that.SYLhideModal();
    that.ZDHChideModal();
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.height(270).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.height(270).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        showOne: false,
        ll: true,
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  bbbb: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this
    if (that.data.showTwo == false) {
      that.setData({
        showTwo: !that.data.showTwo,
        showOne: false,
        showThree: false,
        gg: !that.data.gg,
      })
      that.SYLshowModal();
    } else {
      that.setData({
        showTwo: !that.data.showTwo,
        gg: !that.data.gg,
      })
      that.SYLhideModal();
    }
    that.hideModal();
    that.ZDHChideModal();
  },
  //显示对话框
  SYLshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      SYLanimationData: animation.export(),
      SYLshowModalStatus: true
    })
    setTimeout(function () {
      animation.height(160).step()
      this.setData({
        SYLanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  SYLhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      SYLanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.height(160).step()
      this.setData({
        SYLanimationData: animation.export(),
        SYLshowModalStatus: false,
        showTwo: false,
        gg: true,
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  cccc: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this
    if (that.data.showThree == false) {
      that.setData({
        showThree: !that.data.showThree,
        showOne: false,
        showTwo: false,
        kk: !that.data.kk,
      })
      that.ZDHCshowModal();
    } else {
      that.setData({
        showThree: !that.data.showThree,
        kk: !that.data.kk,
      })
      that.ZDHChideModal();
    }
    that.hideModal();
    that.SYLhideModal();
  },
  //显示对话框
  ZDHCshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      ZDHCanimationData: animation.export(),
      ZDHCshowModalStatus: true
    })
    setTimeout(function () {
      animation.height(160).step()
      this.setData({
        ZDHCanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  ZDHChideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      ZDHCanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.height(160).step()
      this.setData({
        ZDHCanimationData: animation.export(),
        ZDHCshowModalStatus: false,
        showThree: false,
        kk: true,
      })
    }.bind(this), 200)
  }, 
  //导航栏的切换
  navSwitch: function (e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        navState: 0
      })
    } else if (index == 1) {
      this.setData({
        navState: 1
      })
    } else if(index == 2){
      this.setData({
        navState: 2
      })
    }else{
      this.setData({
        navState:3
      })
    }
  },
  gdss: function () {
    this.setData({
      gdblstate: 0,
      gdblstatetwo: 0,
    })
  },
  gdbl: function () {
    this.setData({
      gdblstatetwo: 1,
      gdblstate: 1,
    })
  },
  nextbtn: function () {
    let that = this
    that.GSDYTChideModal();
    setTimeout(function () {
      that.setData({
        showModal: true
      })
    }, 600)
  },
  boxqx: function () {
    this.setData({
      showModal: false
    })
  },
  boxqr: function () {
    let that = this
    that.boxqx();
    setTimeout(function () {
      that.setData({
        showModaltwo: true
      })
    }, 600)
  },
  boxqrqx: function () {
    this.setData({
      showModaltwo: false
    })
  },
  //点击我显示底部弹出框
  boxqrqr: function () {
    let that = this;
    that.boxqrqx();
    setTimeout(function () {
      that.showModalQR();
    }, 600)
  },
  qrzfbtn: function () {
    wx.showToast({
      title: '支付成功',
    })
    this.QRZFhideModal();
  },
  GoToScreenSettings:function(){
    wx.navigateTo({
      url: '../ScreenSettings/ScreenSettings',
    })
  },
  GoToHisTradeStars:function(){
    wx.navigateTo({
      url: '../HisTradeStars/HisTradeStars',
    })
  },
  //点击我显示底部弹出框
  GSDYTCtwo: function () {
    this.GSDYTCshowModal();
  },
  //显示对话框
  GSDYTCshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYTCanimationData: animation.export(),
      GSDYTCshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYTCanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  GSDYTChideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYTCanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYTCanimationData: animation.export(),
        GSDYTCshowModalStatus: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  gszhjz: function () {
    this.gszhjzshowModal();
  },
  //显示对话框
  gszhjzshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      gszhjzanimationData: animation.export(),
      gszhjzshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        gszhjzanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  gszhjzhideModal: function (e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      gszhjzanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        gszhjzanimationData: animation.export(),
        gszhjzshowModalStatus: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  gsfs: function () {
    this.gsfsshowModal();
  },
  //显示对话框
  gsfsshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      gsfsanimationData: animation.export(),
      gsfsshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        gsfsanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  gsfshideModal: function (e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      gsfsanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        gsfsanimationData: animation.export(),
        gsfsshowModalStatus: false
      })
    }.bind(this), 200)
  },
  gszhjzTap: function (e) {
    let index = e.currentTarget.dataset.index;
    //console.log(e);
    let gszharr = this.data.zhxz[index].zhone;
    //console.log(gszharr)
    if (index == 0) {
      this.setData({
        rrrstate: 0,
        ndgszh: gszharr
      })
    } else if (index == 1) {
      this.setData({
        rrrstate: 1,
        ndgszh: gszharr
      })
    } else {
      this.setData({
        rrrstate: 2,
        ndgszh: gszharr
      })
    }
    this.gszhjzhideModal();
  },
  zxgdTap: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this;
    let gsfsarr = that.data.gsfs[index].zxone;
    //console.log(gsfsarr)
    if (index == 0) {
      that.setData({
        nnnstate: 0,
        zxgd: gsfsarr
      })
    } else {
      that.setData({
        nnnstate: 1,
        zxgd: gsfsarr
      })
    }
    this.gsfshideModal();
  },

  //显示对话框
  showModalQR: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataQR: animation.export(),
      showModalStatusQR: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataQR: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalQR: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataQR: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataQR: animation.export(),
        showModalStatusQR: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  qrzfxx: function (e) {
    let that=this;
    that.hideModalQR();
    setTimeout(function(){
      that.QRZFshowModal();
    },600)

    console.log(e)
    let index = e.currentTarget.dataset.index;
    console.log(index);
    let qrzfxxarr = that.data.dysj[index]
    console.log(qrzfxxarr)
    let zftime = that.data.dysj[index].time
    console.log(zftime)
    let zfmoney = that.data.dysj[index].money
    console.log(zfmoney)

    if (index == 0) {
      that.setData({
        zfMoney: zfmoney,
        zfTime: zftime
      })
    } else if (index == 1) {
      that.setData({
        zfMoney: zfmoney,
        zfTime: zftime
      })
    } else if (index == 2) {
      that.setData({
        zfMoney: zfmoney,
        zfTime: zftime
      })
    } else {
      that.setData({
        zfMoney: zfmoney,
        zfTime: zftime
      })
    }
  },

  //显示对话框
  QRZFshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      QRZFanimationData: animation.export(),
      QRZFshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        QRZFanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  QRZFhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      QRZFanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        QRZFanimationData: animation.export(),
        QRZFshowModalStatus: false
      })
    }.bind(this), 200)
    this.hideModalQR();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '交易明星',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})