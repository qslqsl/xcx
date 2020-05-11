// pages/Varietydetails/varietydetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    statusBarHeight: app.globalData.statusBarHeight,

    FontTimeIndex:0,
    FontTimeDataList: [
      { one: '1分',id:0},
      { one: '5分',id:1},
      { one: '15分',id:2},
      { one: '30分',id:3},
      { one: '1小时',id:4},
      { one: '4小时',id:5},
      { one: '1日',id:6},
      { one: '1周',id:7},
      { one: '1月',id:8},
      ],
  },
  backTabBar: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  tanchuang:function(){
    wx.showToast({
      title: '自选成功',
    })
  },
  Klinetime:function(e){
    //console.log(e)
    let index=e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      FontTimeIndex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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