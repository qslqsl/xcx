// pages/FollowDataSurvey/FollowDataSurvey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收益
    Profit: [{
      LineName: '收益',
      value: '￥694.32',
    },
    {
      LineName: '收益率',
      value: '217.17%',
    },
    {
      LineName: '自主收益',
      value: '￥255.66',
    },
    {
      LineName: '跟随收益',
      value: '￥78',
    },
    {
      LineName: '自主收益率',
      value: '-17.52%',
    },
    {
      LineName: '跟随收益率',
      value: '2.36%',
    },
    {
      LineName: '平均盈利',
      value: '￥11.11',
    },
    {
      LineName: '自主平均盈利',
      value: '￥70.37',
    },
    {
      LineName: '跟随平均盈利',
      value: '￥78',
    },
    {
      LineName: '平均亏损',
      value: '￥-70.38',
    },
    {
      LineName: '自主平均亏损',
      value: '2.36%',
    },
    {
      LineName: '跟随平均亏损',
      value: '5151:5059',
    },
    {
      LineName: '盈亏比',
      value: '￥11',
    },
    {
      LineName: '自主盈亏比',
      value: '5150:5059',
    },
    {
      LineName: '跟随盈亏比',
      value: '4640:4680',
    }],
    // 点数
    PointNumber: [{
      LineName: '收益点数',
      value: '6443.80',
    },
    {
      LineName: '自主收益点数',
      value: '-33256.50',
    },
    {
      LineName: '跟随收益点数',
      value: '39700.30',
    }],
    // 笔数
    StrokeNumber: [{
      LineName: '交易笔数',
      value: '102.00',
    },
    {
      LineName: '自主交易笔数',
      value: '￥11',
    },
    {
      LineName: '跟随交易笔数',
      value: '39700.30',
    }],
    //手数（标准手）
    NumberOfHands: [{
      LineName: '手数',
      value: '102.00',
    },
    {
      LineName: '自主交易笔手数',
      value: '25',
    },
    {
      LineName: '跟随交易手数',
      value: '39700.30',
    }],
    //其他
    Others: [{
      LineName: '杠杆',
      value: '1:100',
    },
    {
      LineName: '交易周数',
      value: '27',
    },
    {
      LineName: '开户时间',
      value: '2019/09/12',
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '数据概况',
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