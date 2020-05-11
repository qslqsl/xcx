//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // ione: '/images/Tabbar/ic_index_unckecked.png',
    // sione: '/images/Tabbar/ic_index_ckecked.png',

    // itwo: '/images/Tabbar/ic_account_unchecked.png',
    // sitwo: '/images/Tabbar/ic_account_checked.png',

    // ithree: '/images/Tabbar/ic_quotation_unchecked.png',
    // sithree: '/images/Tabbar/ic_quotation_checked.png',

    // ifour: '/images/Tabbar/ic_mine_unchecked.png',
    // sifour: '/images/Tabbar/ic_mine_checked.png',





    statusBarHeight: app.globalData.statusBarHeight,
    // PersonTitleHeight: app.globalData.PersonTitleHeight,


    
    UserHeadImg: '../../images/headimg/pic_heading1.png',
    scrollDataList: [
      {
        'imgs': '../../images/topbar/bg_account1.png',
        'username': '淡墨无殇',
        'accountnumner': '1',
        'server': 'GoldwellCapital-Demo',
        'level': '钻石',
        'yieldsvalue': '0.00%',
        'MaximumRetracementValue': '0.00%',
        'SubscribePriceMonth': '9.99',
      },
      {
        'imgs':'../../images/topbar/bg_account2.png',
        'username': '淡墨无殇',
        'accountnumner': '2',
        'server': 'GoldwellCapital-Demo',
        'level': '王者',
        'yieldsvalue': '0.00%',
        'MaximumRetracementValue': '0.00%',
        'SubscribePriceMonth': '9.99',
      },
      {
        'imgs': '../../images/topbar/bg_account3.png',
        'username': '淡墨无殇',
        'accountnumner': '2',
        'server': 'GoldwellCapital-Demo',
        'level': '青铜',
        'yieldsvalue': '0.00%',
        'MaximumRetracementValue': '0.00%',
        'SubscribePriceMonth': '9.99',
      },
      {
        'imgs': '../../images/topbar/bg_account4.png',
        'username': '淡墨无殇',
        'accountnumner': '3',
        'server': 'GoldwellCapital-Demo',
        'level': '钻石',
        'yieldsvalue': '0.00%',
        'MaximumRetracementValue': '0.00%',
        'SubscribePriceMonth': '9.99',
      },
      {
        'imgs': '../../images/topbar/bg_account5.png',
        'username': '淡墨无殇',
        'accountnumner': '4',
        'server': 'GoldwellCapital-Demo',
        'level': '青铜',
        'yieldsvalue': '0.00%',
        'MaximumRetracementValue': '0.00%',
        'SubscribePriceMonth': '9.99',
      }
    ],

  },
  // 自定义底部导航栏事件
  index: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  Transaction: function () {
    wx.navigateTo({
      url: '/pages/Transaction/Transaction',
    })
  },
  Quotation: function () {
    wx.navigateTo({
      url: '/pages/Quotation/Quotation',
    })
  },
  My: function () {
    wx.navigateTo({
      url: '/pages/My/My',
    })
  },
  
  
  



  GOtoTradeStars:function(){
    wx.navigateTo({
      url: '../TradeStars/TradeStars'
    })
  },
  GoToFollowBigShot:function(){
    wx.navigateTo({
      url: '../FollowBigShot/FollowBigShot',
    })
  },
  GoToHotVariety:function(){
    wx.navigateTo({
      url: '../HotVariety/HotVariety',
    })
  },
  GoToSearchNickName:function(){
    wx.navigateTo({
      url: '../SearchNickName/SearchNickName',
    })
  },
  GoToScreenSettings:function(){
    wx.navigateTo({
      url: '../ScreenSettings/ScreenSettings',
    })
  },
  GoToBindingAccount:function(){
    wx.navigateTo({
      url: '../BindingAccount/BindingAccount',
    })
  },
  onLoad: function () {


    // console.log(111, this.data.PersonTitleHeight)


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    //导航栏标题
    wx.setNavigationBarTitle({
      title: '账户',
    })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  

  //右上角分享功能
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '',
      path: '/pages/list/list?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
