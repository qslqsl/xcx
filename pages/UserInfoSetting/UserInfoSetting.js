// pages/UserInfoSetting/UserInfoSetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2020-03-17',

    columns: ["男", "女"],
    gender: 0 || wx.getStorageSync("gender") * 1,
    z_img:'',
    region: ['广东省', '深圳市', '福田区'],

  },
  GoToPersonalizedSignature:function(){
    wx.navigateTo({
      url: '../PersonalizedSignature/PersonalizedSignature',
    })
  },
  GoToSetNickName:function(){
    wx.navigateTo({
      url: '../SetNickName/SetNickName',
    })
  },
  ShootingFront: function () {
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
  bindRegionChange: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  pickSex: function (e) {
    this.setData({
      gender: e.detail.value
    });
    // console.log("当前选择性别-sex", e.detail.value);
  },
  bindDateChange:function(e){
    console.log('picker发生选择改变，携带值为',e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人信息设置',
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