// pages/Quotation/Quotation.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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



    choosestatefive:0,
    choosestatefour: 0,
    choosestateThree: 1,
    choosestateT: 0,
    choosestate: 1,

    // 正在持仓 跟随-弹窗数据
    actionSheetItems: [
      { txt: '全部', id: 0 },
      { txt: '跟随', id: 1 },
      { txt: '自主', id: 2 },
    ],
    menu: '跟随',

    // 正在持仓 全部-弹窗数据
    actionSheetItemstwo: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    menutwo: '全部',

    // 历史交易 跟随-弹窗数据
    actionSheetItemsthree: [
      { txt: '全部', id: 0 },
      { txt: '跟随', id: 1 },
      { txt: '自主', id: 2 },
    ],
    menuthree: '跟随',

    // 历史交易 全部-弹窗数据
    actionSheetItemsfour: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    menufour: '全部',

    // 历史交易 按最近平仓-弹窗数据
    actionSheetItemsfive: [
      { txt: '按最近平仓', id: 0 },
      { txt: '按最早平仓', id: 1 },
      { txt: '收益高到低', id: 2 },
      { txt: '收益低到高', id: 3 },
    ],
    menufive: '按最近平仓',


    isShow: false,
    isShowtwo: false,
    statusBarHeight: app.globalData.statusBarHeight,
    TopnavState: 0,
    OrderNavState:0,
    navState:0,
    
    TopItem: [
      {
        TopOne: '行情',
        TopTwo: '订单',
      }
    ],
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
    ],
    //正在持仓订单数据
		OrderingDataList: [
      {
        id: "01",
        img:'../../images/TradeAccount/arrowTipDown@2x.png',
        options: 'AUD/CAD',
        salestatus: 0,    // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child:[{
        id: "01-1",
        'ordernumber': '12245454',
        'rates': '￥-0.05',
        'opentime': '2019/9/18 17：33：21',
        'commission': '￥6.66',
        'jingjishangshoushu': '0.01'
        }]
      },
      {
        id: "02",
        img:'../../images/TradeAccount/arrowTipUp@2x.png',
        options: 'AUD/CAD',
        salestatus: 1,
        standhands: '0.01',
        money: '+25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10983',
        pointNumber: '-31.90点',
        child:[{
        id: "02-1",
        'ordernumber': '54544',
        'rates': '￥-0.55',
        'opentime': '2019/9/25 17：33：21',
        'commission': '￥8.88',
        'jingjishangshoushu': '0.05'
        }]
      },
      {
        id: "03",
        img: '../../images/TradeAccount/arrowTipUp@2x.png',
        options: 'AUD/CAD',
        salestatus: 1,
        standhands: '0.01',
        money: '+25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10983',
        pointNumber: '-31.90点',
        child:[{
        id: "03-1",
        'ordernumber': '54544',
        'rates': '￥-0.55',
        'opentime': '2019/9/25 17：33：21',
        'commission': '￥8.88',
        'jingjishangshoushu': '0.05'
        }]
      },
      {
        id: "04",
        img: '../../images/TradeAccount/arrowTipDown@2x.png',
        options: 'AUD/CAD',
        salestatus: 0,    // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child:[{
        id: "04-1",
        'ordernumber': '12245454',
        'rates': '￥-0.05',
        'opentime': '2019/9/18 17：33：21',
        'commission': '￥6.66',
        'jingjishangshoushu': '0.01'
        }]
      },
      {
        id: "05",
        img: '../../images/TradeAccount/arrowTipUp@2x.png',
        options: 'AUD/CAD',
        salestatus: 1,
        standhands: '0.01',
        money: '+25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10983',
        pointNumber: '-31.90点',
        child:[{
        id: "05-1",
        'ordernumber': '54544',
        'rates': '￥-0.55',
        'opentime': '2019/9/25 17：33：21',
        'commission': '￥8.88',
        'jingjishangshoushu': '0.05'
        }]
      },
      {
        id: "06",
        img: '../../images/TradeAccount/arrowTipDown@2x.png',
        options: 'AUD/CAD',
        salestatus: 0,    // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child:[{
        id: "06-1",
        'ordernumber': '12245454',
        'rates': '￥-0.05',
        'opentime': '2019/9/18 17：33：21',
        'commission': '￥6.66',
        'jingjishangshoushu': '0.01'
        }]
      }],
    TranstioinItem:[
      {
        Cone:'0.00标准手',
        Ctwo: '22',
        Cthree: '22.33',
      }
    ],
    //历史交易订单数据
    OrderedDataList: [{
      id: "01",
      options: 'AUD/CAD',
      salestatus: 0,    // 0是卖   1是买
      standhands: '0.01',
      money: -11111.25,
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10983',
      pointNumber: '-31.90点',
      childtwo:[{
      id: "01-1",
      'ordernumber': '66666666',
      'opentime': '2019/9/18 17：33：21',
      'closetime': '2019/9/19 17：33：21',
      'commission': '￥18.88',
      'rates': '￥-0.95',
      'jingjishangshoushu': '0.05'
      }]
    },
    {
      id: "02",
      options: 'AUD/CAD',
      salestatus: 1,
      standhands: '0.01',
      money: +50000.25,
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10983',
      pointNumber: '-31.90点',
      childtwo:[{
      id: "02-1",
      'ordernumber': '66666666',
      'opentime': '2019/9/18 17：33：21',
      'closetime': '2019/9/19 17：33：21',
      'commission': '￥48.88',
      'rates': '￥-0.44',
      'jingjishangshoushu': '9.99'
      }]
    },
    {
      id: "03",
      options: 'AUD/CAD',
      salestatus: 1,
      standhands: '0.01',
      money: +12015.25,
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10983',
      pointNumber: '-31.90点',
      childtwo:[{
      id: "03-1",
      'ordernumber': '66666666',
      'opentime': '2019/9/18 17：33：21',
      'closetime': '2019/9/19 17：33：21',
      'commission': '￥5.88',
      'rates': '￥-0.15',
      'jingjishangshoushu': '0.05'
      }]
    }],
  },
  qbevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrqb = that.data.actionSheetItems[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestate: 0,
        menu: arrqb
      })
    } else if (index == 1) {
      this.setData({
        choosestate: 1,
        menu: arrqb
      })
    } else {
      this.setData({
        choosestate: 2,
        menu: arrqb
      })
    }
    this.hideModalqbqb();
  },
  AZJKCevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrazjpc = that.data.actionSheetItemstwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestateT: 0,
        menutwo: arrazjpc
      })
    } else if (index == 1) {
      this.setData({
        choosestateT: 1,
        menutwo: arrazjpc
      })
    } else {
      this.setData({
        choosestateT: 2,
        menutwo: arrazjpc
      })
    }
    this.hideModalAZJKC();
  },
  lsqbevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrlsqb = that.data.actionSheetItemsthree[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestateThree: 0,
        menuthree: arrlsqb
      })
    } else if (index == 1) {
      this.setData({
        choosestateThree: 1,
        menuthree: arrlsqb
      })
    } else {
      this.setData({
        choosestateThree: 2,
        menuthree: arrlsqb
      })
    }
    this.hideModallsqb();
  },
  lsazjpcevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrlsazjpc = that.data.actionSheetItemsfour[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestatefour: 0,
        menufour: arrlsazjpc
      })
    } else if (index == 1) {
      this.setData({
        choosestatefour: 1,
        menufour: arrlsazjpc
      })
    } else{
      this.setData({
        choosestatefour: 2,
        menufour: arrlsazjpc
      })
    }
    this.hideModalLSAZJPC();
  }, 
  lsazjpctevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrlsazjpct = that.data.actionSheetItemsfive[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestatefive: 0,
        menufive: arrlsazjpct
      })
    } else if (index == 1) {
      this.setData({
        choosestatefive: 1,
        menufive: arrlsazjpct
      })
    } else if (index == 2) {
      this.setData({
        choosestatefive: 2,
        menufive: arrlsazjpct
      })
    } else {
      this.setData({
        choosestatefour: 3,
        menufive: arrlsazjpct
      })
    }
    this.hideModalLSAZJPCT();
  },




  // 自定义底部导航栏事件
  index: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  Transaction: function () {
    wx.navigateTo({
      url: '/pages/Transaction/Transaction',
    })
  },
  Quotation: function () {
    wx.navigateTo({
      url: '/pages/Quotation/Quotation',
    })
  },
  My: function () {
    wx.navigateTo({
      url: '/pages/My/My',
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

  // 正在持仓 跟随 - 弹窗
  actionSheetTap: function () {
    this.showModalqbqb();
  },
  //显示对话框
  showModalqbqb: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataqbqb: animation.export(),
      showModalStatusqbqb: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataqbqb: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalqbqb: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataqbqb: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataqbqb: animation.export(),
        showModalStatusqbqb: false
      })
    }.bind(this), 200)
  },


  // 正在持仓 全部 - 弹窗
  actionSheetTaptwo: function () {
    this.showModalAZJKC();
  },
  //显示对话框
  showModalAZJKC: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataAZJKC: animation.export(),
      showModalStatusAZJKC: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataAZJKC: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalAZJKC: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataAZJKC: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataAZJKC: animation.export(),
        showModalStatusAZJKC: false
      })
    }.bind(this), 200)
  },


  // 历史交易 跟随 - 弹窗
  actionSheetTapthree: function () {
    this.showModallsqb();
  },
  //显示对话框
  showModallsqb: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatalsqb: animation.export(),
      showModalStatuslsqb: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDatalsqb: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModallsqb: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatalsqb: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDatalsqb: animation.export(),
        showModalStatuslsqb: false
      })
    }.bind(this), 200)
  },


  // 历史交易 全部 - 弹窗
  actionSheetTapfour: function () {
    this.showModalLSAZJPC();
  },
  //显示对话框
  showModalLSAZJPC: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataLSAZJPC: animation.export(),
      showModalStatusLSAZJPC: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataLSAZJPC: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalLSAZJPC: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataLSAZJPC: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataLSAZJPC: animation.export(),
        showModalStatusLSAZJPC: false
      })
    }.bind(this), 200)
  },

  // 历史交易 全部 - 弹窗
  actionSheetTapfive: function () {
    this.showModalLSAZJPCT();
  },
  //显示对话框
  showModalLSAZJPCT: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataLSAZJPCT: animation.export(),
      showModalStatusLSAZJPCT: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataLSAZJPCT: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalLSAZJPCT: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataLSAZJPCT: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataLSAZJPCT: animation.export(),
        showModalStatusLSAZJPCT: false
      })
    }.bind(this), 200)
  },




  TopnavSwitch: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        TopnavState: 0
      })
    } else {
      this.setData({
        TopnavState: 1
      })
    }
  },
  OrderNavSwitch:function(e){
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        OrderNavState: 0
      })
    } else {
      this.setData({
        OrderNavState: 1
      })
    }
  },
  GoToAddHotVariety:function(){
    wx.navigateTo({
      url: '../AddHotVariety/AddHotVariety',
    })
  },
  GoToVarietydetails:function(){
    wx.navigateTo({
      url: '../Varietydetails/varietydetails',
    })
  },





  // 按最近平仓-弹窗
  //点击我显示底部弹出框
  clickmefive: function () {
    this.showModalfive();
  },
  //显示对话框
  showModalfive: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatafive: animation.export(),
      showModalStatusfive: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDatafive: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalfive: function (e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatafive: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDatafive: animation.export(),
        showModalStatusfive: false
      })
    }.bind(this), 200)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        zjTC: 0
      })
    } else if (index == 1) {
      this.setData({
        zjTC: 1
      })
    } else if (index == 2) {
      this.setData({
        zjTC: 2
      })
    } else {
      this.setData({

      })
    }
  },

  // 正在持仓的展开
  showList(e) {
    let index = 0;
    let arrayItem = this.data.OrderingDataList;//获取循环数组对象
    for (let item of arrayItem) {

      //如果当前点击的对象id和循环对象里的id一致
      if (item.id == e.currentTarget.dataset.id) {
        //判断当前对象中的isShow是否为true（true为显示，其他为隐藏） 
        if (arrayItem[index].isShow == "" || arrayItem[index].isShow == undefined) {
          arrayItem[index].isShow = "true"
        } else {
          arrayItem[index].isShow = ""
        }
      }
      index++;
    }
    //将数据动态绑定 
    this.setData({
      OrderingDataList: arrayItem
    })
  },

  // 历史交易的展开
  showListtwo(e) {
    let index = 0;
    let arrayItem = this.data.OrderedDataList;//获取循环数组对象
    for (let item of arrayItem) {

      //如果当前点击的对象id和循环对象里的id一致
      if (item.id == e.currentTarget.dataset.id) {
        //判断当前对象中的isShow是否为true（true为显示，其他为隐藏） 
        if (arrayItem[index].isShowtwo == "" || arrayItem[index].isShowtwo == undefined) {
          arrayItem[index].isShowtwo = "true"
        } else {
          arrayItem[index].isShowtwo = ""
        }
      }
      index++;
    }
    //将数据动态绑定 
    this.setData({
      OrderedDataList: arrayItem
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