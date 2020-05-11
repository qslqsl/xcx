// pages/HotVariety/HotVariety.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,

    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: ''
      },
      children: [{
        type: 'text',
        text: '59'
      }]
    }],
    nodesTWO: [{
      name: 'div',
      attrs: {
        class: 'div_classTWO',
        style: ';'
      },
      children: [{
        type: 'text',
        text: '60'
      }]
    }],




    navState:1,
    OptionsDataList: [
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },
      {
        num: 'AUD/CAD',
        font: '澳元/加元',
        number1: '0.90592',
        number2: '0.90602',
        textLast: '1.5',
      },],
    OptionsDataListTwo:[
      {
        Twonum: 'AUD/CAD',
        Twofont: '澳元/加元',
        Twonumber1: '0.90592',
        Twonumber2: '0.90602',
        TwotextLast: '1.5',
      },
      {
        Twonum: 'AUD/CAD',
        Twofont: '澳元/加元',
        Twonumber1: '0.90592',
        Twonumber2: '0.90602',
        TwotextLast: '1.5',
      },
      {
        Twonum: 'AUD/CAD',
        Twofont: '澳元/加元',
        Twonumber1: '0.90592',
        Twonumber2: '0.90602',
        TwotextLast: '1.5',
      },
    ]
  },
  backone:function(){
    wx.navigateBack({
      delta:1,
    })
  },
  GoToAddHotVariety: function () {
    wx.navigateTo({
      url: '../AddHotVariety/AddHotVariety',
    })
  },
  navSwitch:function(e){
    let index=e.currentTarget.dataset.index;
    if(index==0){
      this.setData({
        navState:0,
      })
    }else{
      this.setData({
        navState:1,
      })
    }
  },
  GoToVarietydetails:function(){
    wx.navigateTo({
      url: '../Varietydetails/varietydetails',
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