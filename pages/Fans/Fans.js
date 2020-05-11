// pages/Fans/Fans.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,



    contentgz: '',
    FansData: [{
      'img': '../../images/headimg/pic_Headportrait2.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '44',
      'FansNumber': '111',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 0,
    },
    {
      'img': '../../images/headimg/pic_Headportrait3.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '33',
      'FansNumber': '306',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 1,
    },
    {
      'img': '../../images/headimg/pic_Headportrait4.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '25',
      'FansNumber': '445',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 0,
    },
    {
      'img': '../../images/headimg/pic_Headportrait1.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '48',
      'FansNumber': '484',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 1,
    },
    {
      'img': '../../images/headimg/pic_Headportrait2.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '11',
      'FansNumber': '88',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 0,
    },
    {
      'img': '../../images/headimg/pic_Headportrait3.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '15',
      'FansNumber': '903',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 1,
    },
    {
      'img': '../../images/headimg/pic_Headportrait4.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '15',
      'FansNumber': '336',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 1,
    },
    {
      'img': '../../images/headimg/pic_Headportrait1.png',
      'UserName': '啦啦啦啦啦',
      'FocusNumber': '15',
      'FansNumber': '336',
      'PersonSignature': '个性签名：众人皆醉我独醒，哇哈哈哈',
      isFocus: 1,
    },
    ]
  },
  backone: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  followed: function (e) {
    var index = e.currentTarget.id; //当前数组的索引下标
    var arr = this.data.FansData; //声明的数组
    if (arr[index].isFocus == true) {
      this.setData({
        contentgz: '确认取消关注？'
      })
    } else {
      this.setData({
        contentgz: '确定要关注吗？'
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
    var arr = that.data.FansData; //声明的数组
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
      FansData: arr,
      showModal: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '粉丝',
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