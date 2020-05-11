// pages/TradeSettings/TradeSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nostate:1,
    dxstate:0,
    qqstate:1,
    font:'《免责声明》',
  },
  qb: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        nostate: 0
      })
    } else {
      this.setData({
        nostate: 1
      })
    }
  },
  dx: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        dxstate: 0
      })
    } else {
      this.setData({
        dxstate: 1
      })
    }
  },
  qq: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        qqstate: 0
      })
    } else {
      this.setData({
        qqstate: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '交易设置',
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