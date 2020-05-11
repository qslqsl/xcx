// pages/CardInformation/CardInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    z_img: '',
    f_img: '',
    last_img:''
  },
  ShootingFront:function(){
    var that = this;
    wx.chooseImage({
      success: function (res) {
        // console.log(res.tempFilePaths)
        var src = res.tempFilePaths;
        var aa = that.data.z_img.concat(src)
        // console.log(aa)
        that.setData({
          z_img: aa
        })
      },
    })
  },
  ShootNegative:function(){
    var that = this;
    wx.chooseImage({
      success: function (res) {
        // console.log(res.tempFilePaths)
        var src = res.tempFilePaths;
        var bb = that.data.z_img.concat(src)
        // console.log(aa)
        that.setData({
          f_img: bb
        })
      },
    })
  },
  yinghangka: function() {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        // console.log(res.tempFilePaths)
        var src = res.tempFilePaths;
        var cc = that.data.z_img.concat(src)
        // console.log(aa)
        that.setData({
          last_img: cc
        })
      },
    })
  },
  successback:function(){
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '卡证信息',
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