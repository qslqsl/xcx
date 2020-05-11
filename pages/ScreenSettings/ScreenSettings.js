// pages/ScreenSettings/ScreenSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ztState:false,
    aa: true,
    bb: true,
    cc: true,
    dd: true,
    ee: true,
    ff: true,
    imga:'../../images/ic_foldscreen_up@2x.png',
    imgb:'../../images/ic_foldscreen_dowm@2x.png',
    zhpjState:true,
    sylState:true,
    zdhcState:true,
    jyzsState:true,
    zhjzState:true,
    jjsState:true,
    AccountRatingList:[
      { 'tcone': 'MT4-1', id: 0 ,checked: false},
      { 'tcone': 'MT4-2', id: 1 ,checked: false},
      { 'tcone': 'MT4-3', id: 2 ,checked: false},
      { 'tcone': 'MT4-4', id: 3 ,checked: false},
      { 'tcone': 'MT4-5', id: 4 ,checked: false},
      { 'tcone': 'MT4-6', id: 5 ,checked: false},
      { 'tcone': 'MT4-7', id: 6 ,checked: false},
      { 'tcone': 'MT4-8', id: 7 ,checked: false},
      { 'tcone': 'MT4-9', id: 8 ,checked: false},
      { 'tcone': 'MT4-10', id: 9 ,checked: false},
    ]
  },
  ztTap: function (e) {

    var that = this;
    let index = e.currentTarget.dataset.index;//获取用户当前选中的索引值
    //console.log(index)

    let checkBox = that.data.AccountRatingList;
    //console.log(checkBox)

    if (checkBox[index].checked) {
      this.data.AccountRatingList[index].checked = false;
    } else {
      this.data.AccountRatingList[index].checked = true;
    }
    //返回用户选中的值
    var value = checkBox.filter((item, index) => {
      return item.checked == true;

    })
    this.setData({
      AccountRatingList: this.data.AccountRatingList,
      value: value
    })
    //console.log(that.data.value)
  },
  //删除
  delet: function (e) {
    var that = this;
    console.log(e)
    var id = e.currentTarget.id;
    console.log(id)
    if (that.data.value.length > 0) {
      wx.showModal({
        content: '是否确认删除？',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
            that.data.value.splice(id, 1);
            that.setData({
              value: that.data.value

            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  zhpjxl:function(){
      this.setData({
        aa:!this.data.aa,
        zhpjState: !this.data.zhpjState
      })
  },  
  sylxl:function(){
    this.setData({
      bb: !this.data.bb,
      sylState: !this.data.sylState
    })
  },
  zdhcxl: function () {
    this.setData({
      cc: !this.data.cc,
      zdhcState: !this.data.zdhcState
    })
  },
  jyzsxl:function(){
    this.setData({
      dd: !this.data.dd,
      jyzsState: !this.data.jyzsState
    })
  },
  zhjzxl:function(){
    this.setData({
      ee: !this.data.ee,
      zhjzState: !this.data.zhjzState
    })
  },
  jjsxl: function () {
    this.setData({
      ff: !this.data.ff,
      jjsState: !this.data.jjsState
    })
  },

  //点击我显示底部弹出框
  add: function () {
    this.showModal();
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '筛选设置',
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