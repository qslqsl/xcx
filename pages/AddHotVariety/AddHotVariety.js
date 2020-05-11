// pages/AddHotVariety/AddHotVariety.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    flag: false,
    x: 0,
    y: 0,
    disabled: true,
    elements: [],
    value: [],
    scoreList: [], //分数数组
    num: '',
    addstate: false,



    CWnavState:1,
    data: [{
      letter: 'XAU/USD',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD',
      font: '黄金/美元',
    }],

    datatwo: [{
      letter: 'XAU/USD1',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD2',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD3',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD4',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD5',
      font: '黄金/美元',
    },
    {
      letter: 'XAU/USD6',
      font: '黄金/美元',
    }],

    floors_list2: [{
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    },
    {
      letterThree: 'XAU/USD',
      fontThree: '黄金/美元',
    }]
  },
  CWnavSwitch:function(e){
    let index=e.currentTarget.dataset.index;
    if(index==0){
      this.setData({
        CWnavState:0
      })
    }else{
      this.setData({
        CWnavState:1
      })
    }
  },
  GoToAddVarietySearch:function(){
    wx.navigateTo({
      url: '../AddVarietySearch/AddVarietySearch',
    })
  },



  // //增加一个列表
  // objectAdd(e) {
  //   var that = this
  //   var addlist = this.data.scoreList;
  //   var obj = {
  //     score: null,
  //     num: this.data.num + 1
  //   }
  //   addlist.push(obj)
  //   this.setData({
  //     scoreList: addlist,
  //     num: this.data.num + 1
  //   })
  // },

  //减少一个列表 从最后一个开始减少
  objectMove(e) {
    let index = e.currentTarget.dataset.index
    if (this.data.scoreList.length > 0) {
      this.data.scoreList.splice(this.data.scoreList.length - 1, 1);
      this.setData({
        scoreList: this.data.scoreList,
      })
    }
  },
  objectMovetwo(e) {
    var that = this;
    //console.log(e)
    var id = e.currentTarget.dataset.index;
    //console.log(id)
    if (that.data.data.length > 0) {
      that.data.data.splice(id, 1);
      that.setData({
        data: that.data.data
      })
    }
    wx.showToast({
      title: '删除成功',
    })
  },

  // shanchu:function(e){
  //   this.data.data.splice(e.currentTarget.dataset.index, 1)
  //   this.setData({
  //     data: this.data.data
  //   })
  //   wx.showToast({
  //     title: '删除成功',
  //   })
  // },

  qwer: function (e) {
    // let index = e.currentTarget.dataset.index;
    // console.log(index)
    // let arrtwo = this.data.datatwo[index].indextwo
    // console.log(arrtwo)
    // let arrone = this.data.data[index].index
    // console.log(arrone)
    // let datatwolist = this.data.scoreList
    // console.log(datatwolist)
    // var that=this
    // var obj = {
    //    num: arrtwo,
    //  }
    // datatwolist.push(obj)
    // that.setData({
    //   addstate:true,
    //   num:arrtwo,
    //   scoreList: datatwolist,
    // })
    var that = this;
    let index = e.currentTarget.dataset.index; //获取用户当前选中的索引值
    //console.log(index)

    var value = that.data.value.concat(that.data.datatwo[index])
    console.log(value)
    for (var i = 0; i < value.length; i++) {
      for (var j = i + 1; j < value.length; j++) {
        if (value[i] === value[j]) {
          value.splice(j, 1);
        }
      }
    }
    var data = that.data.data.concat(value)
    for (var i = 0; i < data.length; i++) {
      for (var j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
          data.splice(j, 1);
        }
      }
    }
    if (this.data.scoreList.length == 0) {
      this.setData({
        datatwo: this.data.datatwo,
        value: this.data.value,
        data: data
      })
    }
    //console.log(that.data.value)
    //console.log(that.data.data)
  },

  //长按
  _longtap: function (e) {
    const detail = e.detail;
    this.setData({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop
    })
    this.setData({
      hidden: false,
      flag: true
    })

  },
  //触摸开始
  touchs: function (e) {
    this.setData({
      beginIndex: e.currentTarget.dataset.index
    })
  },
  //触摸结束
  touchend: function (e) {
    if (!this.data.flag) {
      return;
    }
    const x = e.changedTouches[0].pageX
    const y = e.changedTouches[0].pageY
    const list = this.data.elements;
    let data = this.data.data

    for (var j = 0; j < list.length; j++) {
      const item = list[j];
      if (x > item.left && x < item.right && y > item.top && y < item.bottom) {
        const endIndex = item.dataset.index;
        const beginIndex = this.data.beginIndex;

        //向后移动
        if (beginIndex < endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i < endIndex; i++) {
            data[i] = data[i + 1]
          }
          data[endIndex] = tem;
        }
        //向前移动
        if (beginIndex > endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i > endIndex; i--) {
            data[i] = data[i - 1]
          }
          data[endIndex] = tem;
        }

        this.setData({
          data: data
        })
      }
    }
    this.setData({
      hidden: true,
      flag: false
    })
  },
  //滑动
  touchm: function (e) {
    if (this.data.flag) {
      const x = e.touches[0].pageX
      const y = e.touches[0].pageY
      this.setData({
        x: x - 75,
        y: y - 45
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加自选品种',
    })

    var query = wx.createSelectorQuery();
    var nodesRef = query.selectAll(".item");
    nodesRef.fields({
      dataset: true,
      rect: true

    }, (result) => {
      this.setData({
        elements: result
      })
    }).exec()
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