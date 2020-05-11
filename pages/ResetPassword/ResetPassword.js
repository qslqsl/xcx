// pages/ResetPassword/ResetPassword.js
let timeld=null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ff: true,
    img: '../../images/ic_eyes_close@2x.png',
    imgs: '../../images/ic_eyes_open@2x.png',
    ee: true,
    imgtwo: '../../images/ic_eyes_close@2x.png',
    imgstwo: '../../images/ic_eyes_open@2x.png',
    sendmsg: "sendmsg",
    getmsg: "获取短信验证码",
  },
  selectTap(e) {
    this.setData({
      ff: !this.data.ff
    });
  }, 
  selectTaptwo(e) {
    this.setData({
      ee: !this.data.ee
    });
  },
  queren:function(){
    wx.showToast({
      title: '修改成功',
    })
  },
  sendmessg: function (e) {
    var timer = 1;
    if (timer == 1) {
      timer = 0
      var that = this
      var time = 60
      that.setData({
        sendmsg: "sendmsgafter",
      })
      var inter = setInterval(function () {
        that.setData({
          getmsg: time + "s后重新获取",
        })
        time--
        if (time < 0) {
          timer = 1
          clearInterval(inter)
          that.setData({
            sendmsg: "sendmsg",
            getmsg: "获取短信验证码",
          })
        }
      }, 1000)
    }
  }, 
  SwitchStatus: function (type, params) {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置密码',
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