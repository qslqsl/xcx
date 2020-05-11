// pages/TransactionDataSurvey/TransactionDataSurvey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收益
    Profit: [{
      LineName: '收益率',
      value: '64.32%',
    },
    {
      LineName: '收益',
      value: '￥253.44',
    },
    {
      LineName: '点数',
      value: '0点',
    },
    {
      LineName: '平均盈利',
      value: '￥78',
    },
    {
      LineName: '平均亏损',
      value: '￥11',
    },
    {
      LineName: '盈亏比',
      value: '2.36%',
    },
    {
      LineName: '平均持仓时间（小时）',
      value: '0',
    }],
    // 笔数
    StrokeNumber: [{
      LineName: '交易笔数',
      value: '25',
    },
    {
      LineName: '平均每笔获利',
      value: '￥253.44',
    },
    {
      LineName: '平均每笔亏损',
      value: '0点',
    },
    {
      LineName: '日均交易笔数',
      value: '11',
    },
    {
      LineName: '最大单笔获利',
      value: '￥11',
    },
    {
      LineName: '最大单笔亏损',
      value: '￥258.66',
    }],
    //手数（标准手）
    NumberOfHands: [{
      LineName: '手数',
      value: '25',
    },
    {
      LineName: '日均交易手数',
      value: '25',
    },
    {
      LineName: '每笔平均手数',
      value: '25',
    },
    {
      LineName: '最大持仓手数',
      value: '25',
    }],
    //其他
    Others: [{
      LineName: '杠杆',
      value: '21',
    },
    {
      LineName: '手续费',
      value: '223',
    },
    {
      LineName: '隔夜利息',
      value: '55',
    },
    {
      LineName: '余额',
      value: '68',
    },
    {
      LineName: '出金',
      value: '99',
    },
    {
      LineName: '入金',
      value: '545',
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