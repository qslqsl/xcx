// pages/FollowBigShot/FollowBigShot.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,



    head:'../../images/right2_head.png',
    headtwo: '../../images/right_head.png',
    zzzstate:0,
    rrrstate: 3,
    zhxz: [
      { zhone: '全部', id: 0 },
      { zhone: '近一日收益', id: 1 },
      { zhone: '近一周收益', id: 2 },
      { zhone: '近一月收益', id: 3 }
    ],
    zhxzTwo:[
      { zhonetwo: '跟随收益', id: 0},
      { zhonetwo: '盈亏点数',  id: 1},
      { zhonetwo: '跟随收益率',  id: 2},
      { zhonetwo: '平均收益点数',  id: 3},
      { zhonetwo: '跟随笔数', id: 4},
      { zhonetwo: '交易周期', id: 5}
    ],
    twoindex:-1,
    oneindex:0,
    zz:true,
    ff:true,
    showOne:false,
    showTwo: false,

    showModal: false,
    contentgz: '',
    Aone: '近一月收益',
    imgurlone: '../../images/ic_tradestarts_down@2x.png',
    Atwo: '跟随收益从高到底',
    imgurltwo: '../../images/ic_tradestarts_up@2x.png',
    
    FollowBigShotDataList: [
      {
        headingImg: '../../images/headimg/pic_followheadimg1.png', //用户头像
        username: '迟暮晚归 @1', //用户名
        Server: 'GoldwellCapital-Demo', //服务器
        isFocus: 1,
        FollowAmount: ' ￥31.02k', //跟随收益
        BreakevenPoint: ' 8075.20点', //盈亏点数
        FollowYield: ' 32.66%', //收益率
        AverageRevenuePoints: ' 5.77点', //平均收益点数
        FollowerNumber: '1546笔', //跟随笔数
        TradingCycle: '22周', //交易周期
        TrenChart: '../../images/headimg/runchart.png' //走势图
      },
      {
        headingImg: '../../images/headimg/pic_followheadimg2.png',
        username: '迟暮晚归 @2',
        Server: 'GoldwellCapital-Demo',
        isFocus: 0,
        FollowAmount: ' ￥31.02k',
        BreakevenPoint: ' 8075.20点',
        FollowYield: ' 32.66%',
        AverageRevenuePoints: ' 5.77点',
        FollowerNumber: '1546笔',
        TradingCycle: '22周',
        TrenChart: '../../images/headimg/runchart.png'
      },
      {
        headingImg: '../../images/headimg/pic_followheadimg3.png',
        username: '迟暮晚归 @3',
        Server: 'GoldwellCapital-Demo',
        isFocus: 1,
        FollowAmount: ' ￥31.02k',
        BreakevenPoint: ' 8075.20点',
        FollowYield: ' 32.66%',
        AverageRevenuePoints: ' 5.77点',
        FollowerNumber: '1546笔',
        TradingCycle: '22周',
        TrenChart: '../../images/headimg/runchart.png'
      },
      {
        headingImg: '../../images/headimg/pic_followheadimg4.png',
        username: '迟暮晚归 @4',
        Server: 'GoldwellCapital-Demo',
        isFocus: 1,
        FollowAmount: ' ￥31.02k',
        BreakevenPoint: ' 8075.20点',
        FollowYield: ' 32.66%',
        AverageRevenuePoints: ' 5.77点',
        FollowerNumber: '1546笔',
        TradingCycle: '22周',
        TrenChart: '../../images/headimg/runchart.png'
      },
      {
        headingImg: '../../images/headimg/pic_followheadimg1.png',
        username: '唐志远1997@1',
        Server: 'GoldwellCapital-Demo',
        isFocus: 0,
        FollowAmount: ' ￥31.02k',
        BreakevenPoint: ' 8075.20点',
        FollowYield: ' 32.66%',
        AverageRevenuePoints: ' 5.77点',
        FollowerNumber: '1546笔',
        TradingCycle: '22周',
        TrenChart: '../../images/headimg/runchart.png'
      }
    ]
  },
  backone:function(){
    wx.navigateBack({
      delta:1,
    })
  },

  gszhjzTap: function (e) {
    let index = e.currentTarget.dataset.index;
    //console.log(e);
    let gszharr = this.data.zhxz[index].zhone;
    //console.log(gszharr)
    if (index == 0) {
      this.setData({
        rrrstate: 0,
        Aone: gszharr,
      })
      this.topnavone()
    } else if (index == 1) {
      this.setData({
        rrrstate: 1,
        Aone: gszharr
      })
      this.topnavone()
    } else if(index==2){
      this.setData({
        rrrstate: 2,
        Aone: gszharr
      })
      this.topnavone()
    }else{
      this.setData({
        rrrstate: 3,
        Aone: gszharr
      })
      this.topnavone()
    }
  },


  // topnavone: function (e) {
  //   //console.log(e)
  //   let that = this
  //   that.setData({
  //     showOne: !that.data.showOne,
  //     ff: !that.data.ff,
  //   })
  // },


  gszhjzTapTwo: function (e) {
    let index = e.currentTarget.dataset.index;
    //console.log(e);
    let gszharr = this.data.zhxzTwo[index].zhonetwo;
    //console.log(gszharr)
    let that=this
    if (index == 0) {
      that.setData({
        zzzstate: 0,
        Atwo: gszharr,
        oneindex:index,
        twoindex: -1
      })
      that.topnavTwo()
    } else if (index == 1) {
      that.setData({
        zzzstate: 1,
        Atwo: gszharr,
        oneindex: index,
        twoindex: -1
      })
      that.topnavTwo()
    } else if (index == 2) {
      that.setData({
        zzzstate: 2,
        Atwo: gszharr,
        oneindex: index,
        twoindex: -1
      })
      that.topnavTwo()
    } else if(index==3){
      that.setData({
        zzzstate: 3,
        Atwo: gszharr,
        oneindex: index,
        twoindex: -1
      })
      that.topnavTwo()
    } else if (index == 4) {
      that.setData({
        zzzstate: 4,
        Atwo: gszharr,
        oneindex: index,
        twoindex: -1
      })
      that.topnavTwo()
    }else{
      that.setData({
        zzzstate: 5,
        Atwo: gszharr,
        oneindex: index,
        twoindex: -1
      })
      that.topnavTwo()
    }
  },
  gszhjzTapTwoT:function(e){
    let index = e.currentTarget.dataset.index;
    //console.log(e);
    let gszharr = this.data.zhxzTwo[index].zhonetwo;
    //console.log(gszharr)
    if (index == 0) {
      this.setData({
        zzzstate: 0,
        Atwo: gszharr,
        twoindex:index,
        oneindex: -1,
      })
      this.topnavTwo()
    } else if (index == 1) {
      this.setData({
        zzzstate: 1,
        Atwo: gszharr,
        twoindex: index,
        oneindex: -1,
      })
      this.topnavTwo()
    } else if (index == 2) {
      this.setData({
        zzzstate: 2,
        Atwo: gszharr,
        twoindex: index,
        oneindex: -1,
      })
      this.topnavTwo()
    } else if (index == 3) {
      this.setData({
        zzzstate: 3,
        Atwo: gszharr,
        twoindex: index,
        oneindex: -1,
      })
      this.topnavTwo()
    } else if (index == 4) {
      this.setData({
        zzzstate: 4,
        Atwo: gszharr,
        twoindex: index,
        oneindex: -1,
      })
      this.topnavTwo()
    } else {
      this.setData({
        zzzstate: 5,
        Atwo: gszharr, 
        twoindex: index,
        oneindex: -1,
      })
      this.topnavTwo()
    }
  },

  // topnavTwo: function (e) {
  //   //console.log(e)
  //   let that = this
  //   that.setData({
  //     showTwo: !that.data.showTwo,
  //     zz: !that.data.zz,
  //   })
  // },

  //点击我显示底部弹出框
  topnavone: function () {
    let that = this;
    if (that.data.showOne == false) {
      that.setData({
        showOne: !that.data.showOne,
        showTwo: false,
        ff: !that.data.ff,
      })
      that.showModal();
      console.log(1111)
    } else {
      that.setData({
        showOne: !that.data.showOne,
        ff: !that.data.ff,
      })
      that.hideModal();
      console.log(2222)
    }
    that.GSSYhideModal();
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
      animation.height(180).step()
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
      animation.height(180).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        showOne: false,
        ff: true,
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  topnavTwo: function () {
    let that = this;
    if (that.data.showTwo == false) {
      that.setData({
        showTwo: !that.data.showTwo,
        showOne: false,
        zz: !that.data.zz,
      })
      that.GSSYshowModal();
      console.log(1111)
    } else {
      that.setData({
        showTwo: !that.data.showTwo,
        zz: !that.data.zz,
      })
      that.GSSYhideModal();
      console.log(2222)
    }
    that.hideModal();
  },
  //显示对话框
  GSSYshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      GSSYanimationData: animation.export(),
      GSSYshowModalStatus: true
    })
    setTimeout(function () {
      animation.height(270).step()
      this.setData({
        GSSYanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  GSSYhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.height(0).step()
    this.setData({
      GSSYanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.height(270).step()
      this.setData({
        GSSYanimationData: animation.export(),
        GSSYshowModalStatus: false,
        showTwo: false,
        zz: true,
      })
    }.bind(this), 200)
  },


  GoToHisTradeStars: function () {
    wx.navigateTo({
      url: '../HisTradeStars/HisTradeStars',
    })
  },
  followed: function (e) {
    var index = e.currentTarget.id; //当前数组的索引下标
    var arr = this.data.FollowBigShotDataList; //声明的数组
    if (arr[index].isFocus == true) {
      this.setData({
        contentgz: '确认取消关注？'
      })
    } else {
      this.setData({
        contentgz: '确认关注？'
      })
    }
    this.setData({
      showModal: true,
      val: index
    })
  },
  boxqx: function () {
    this.setData({
      showModal: false
    })
  },
  boxqr: function (e) {
    var that = this;
    var arr = that.data.FollowBigShotDataList; //声明的数组
    if (arr[that.data.val].isFocus == true) { //如果当前数组下标的状态为true
      arr[that.data.val].isFocus = false; //将false赋给当前数组的下标
      wx.showToast({
        title: '取消成功',
      })
    } else { //反之
      arr[that.data.val].isFocus = true;
      wx.showToast({
        title: '关注成功',
      })
    }
    that.setData({
      FollowBigShotDataList: arr,
      showModal: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '跟随大咖',
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