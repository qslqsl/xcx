// pages/MyWallet/MyWallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ahide: 0,
    bhide: 0,
    // tab切换默认显示第一个  
    navState: 0,
    //导航栏中的tab
    item: [
      {
        Aone: '订阅支出',
        Atwo: '提取支出',
      }
    ],

    searchArray: [{
      name: "淡墨无殇 @1",
      id: "1",
      time: '2019/09/14--2019/11/14',
      money: '￥-25.25',
      child: [{
        id: "01-1",
        'dsada': '流水号',
        'dsadb': '13191004023030735385',
        'dsadc': '订阅编号',
        'dsadd': '62847',
        'dsade': '我的账户',
        'dsadf': '2143443735 @1',
        'dsadg': '支付方式',
        'dsadh': '微信',
        'dsadj': '备注',
        'dsadk': '无1',
        'dsadl': '支付时间',
        'dsadp': '2019/09/14',
      }]
    },
    {
      name: "淡墨无殇 @2",
      id: "2",
      time: '2019/09/14--2019/11/14',
      money: '￥-25.25',
      child: [{
        id: "02-1",
        'dsada': '流水号',
        'dsadb': '13191004023030735385',
        'dsadc': '订阅编号',
        'dsadd': '62847',
        'dsade': '我的账户',
        'dsadf': '2143443735 @1',
        'dsadg': '支付方式',
        'dsadh': '微信',
        'dsadj': '备注',
        'dsadk': '无2',
        'dsadl': '支付时间',
        'dsadp': '2019/09/14',
      }]
    },
    {
      name: "淡墨无殇 @3",
      id: "3",
      time: '2019/09/14--2019/11/14',
      money: '￥-25.25',
      child: [{
        id: "03-1",
        'dsada': '流水号',
        'dsadb': '13191004023030735385',
        'dsadc': '订阅编号',
        'dsadd': '62847',
        'dsade': '我的账户',
        'dsadf': '2143443735 @1',
        'dsadg': '支付方式',
        'dsadh': '微信',
        'dsadj': '备注',
        'dsadk': '无3',
        'dsadl': '支付时间',
        'dsadp': '2019/09/14',
      }]
    }],
   
    
    searchArraytwo: [{
      id:"01",
      yinghang: '中国建设银行',
      kahao: '卡尾号：4075',
      money: '￥25.25',
      childtwo: [{
      id: "01-1",
      'abasd': '申请日期',
      'abase': '2019-10-14',
      'abasf': '审核日期',
      'abasg': '2019-10-15',
      'abash': '汇率',
      'abasj': '1:6.75',
      'abask': '审核金额',
      'abasl': '￥25.25',
      'abasp': '审批状态',
      'abaso': '待审核',
      }]
    },
    {
      id: "02",
      yinghang: '中国建设银行',
      kahao: '卡尾号：4075',
      money: '￥25.25',
      childtwo: [{
      id: "02-1",
      'abasd': '申请日期',
      'abase': '2019-10-14',
      'abasf': '审核日期',
      'abasg': '2019-10-15',
      'abash': '汇率',
      'abasj': '1:6.75',
      'abask': '审核金额',
      'abasl': '￥25.25',
      'abasp': '审批状态',
      'abaso': '待审核',
      }]
    },
    {
      id: "03",
      yinghang: '中国建设银行',
      kahao: '卡尾号：4075',
      money: '￥25.25',
      childtwo: [{
      id: "03-1",
      'abasd': '申请日期',
      'abase': '2019-10-14',
      'abasf': '审核日期',
      'abasg': '2019-10-15',
      'abash': '汇率',
      'abasj': '1:6.75',
      'abask': '审核金额',
      'abasl': '￥25.25',
      'abasp': '审批状态',
      'abaso': '待审核',
        }]
    }]
  },
  //钱包导航栏的切换
  navSwitch: function (e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        navState: 0
      })
    } else{
      this.setData({
        navState: 1
      })
    }
  },
  showList(e) {
    var that = this;
    var toggleBtnVal = that.data.ahide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        ahide: 0
      })
    } else {
      that.setData({
        ahide: index
      })
    }
  },
  showListtwo(e) {
    var that = this;
    var toggleBtnVal = that.data.bhide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        bhide: 0
      })
    } else {
      that.setData({
        bhide: index
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '钱包',
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