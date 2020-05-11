// pages/My/My.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    statusBarHeight: app.globalData.statusBarHeight,

    //立即登入的信息，是否支持button
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
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

  GoToTradeSettings:function(){
    wx.navigateTo({
      url: '../TradeSettings/TradeSettings',
    })
  },
  GoToRiskSettings:function(){
    wx.navigateTo({
      url: '../RiskSettings/RiskSettings',
    })
  },
  GoToMyWallet:function(){
    wx.navigateTo({
      url: '../MyWallet/MyWallet',
    })
  },
  GoToMyAccount:function(){
    wx.navigateTo({
      url: '../MyAccount/MyAccount',
    })
  },
  GoToBindingAccount:function(){
    wx.navigateTo({
      url: '../BindingAccount/BindingAccount',
    })
  },
  GoToCardInformation:function(){
    wx.navigateTo({
      url: '../CardInformation/CardInformation',
    })
  },
  GoToSetUp:function(){
    wx.navigateTo({
      url: '../SetUp/SetUp',
    })
  },
  GoToFans:function(){
    wx.navigateTo({
      url: '../Fans/Fans',
    })
  },
  GoToFocus:function(){
    wx.navigateTo({
      url: '../Focus/Focus',
    })
  },
  GOToLoginPage:function(){
    wx.navigateTo({
      url: '../LoginPage/LoginPage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  },
  getUserInfo: function (e) {
    console.log(e);
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
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