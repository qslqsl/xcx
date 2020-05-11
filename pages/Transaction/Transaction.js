// pages/Transaction/Transaction.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xsfontstate: 0,
    xs: [
      { txt: '小时', id: 0 },
      { txt: '周', id: 1 },
    ],
    xsfont: '小时',

    xsfontstatetwo: 0,
    xstwo: [
      { txt: '小时', id: 0 },
      { txt: '周', id: 1 },
    ],
    xsfonttwo: '小时',

    pcsjfontstate: 1,
    pcsj: [
      { txt: '开仓时间', id: 0 },
      { txt: '平仓时间', id: 1 },
    ],
    pcsjfont: '平仓时间',

    pcsjfontstatetwo: 1,
    pcsjtwo: [
      { txt: '开仓时间', id: 0 },
      { txt: '平仓时间', id: 1 },
    ],
    pcsjfonttwo: '平仓时间',

    jyntfontstate: 3,
    jynt: [
      { txt: '近一月', id: 0 },
      { txt: '近三月', id: 1 },
      { txt: '近一年', id: 2 },
      { txt: '全部', id: 3 },
    ],
    jyntfont: '全部',

    jyntfontstatetwo: 3,
    jynttwo: [
      { txt: '近一月', id: 0 },
      { txt: '近三月', id: 1 },
      { txt: '近一年', id: 2 },
      { txt: '全部', id: 3 },
    ],
    jyntfonttwo: '全部',

    rfontstate: 0,
    r: [
      { txt: '日', id: 0 },
      { txt: '月', id: 1 },
    ],
    rfont: '日',

    rfontstatetwo: 0,
    rtwo: [
      { txt: '日', id: 0 },
      { txt: '月', id: 1 },
    ],
    rfonttwo: '日',

    jynfontstate:2,
    jyn: [
      { txt: '近一月', id: 0 },
      { txt: '近三月', id: 1 },
      { txt: '近一年', id: 2 },
      { txt: '全部', id: 3 },
    ],
    jynfont: '近一年',
    

    jynfontstatetwo: 2,
    jyntwo: [
      { txt: '近一月', id: 0 },
      { txt: '近三月', id: 1 },
      { txt: '近一年', id: 2 },
      { txt: '全部', id: 3 },
    ],
    jynfonttwo: '近一年',


    choosestatenine: 0,
    choosestateeight: 0,
    choosestateseven:0,
    choosestatesix:0,
    choosestatefour:0,
    choosestateThree: 0,
    choosestateT: 0,
    choosestate: 0,
    ahide: 0,
    bhide: 0,
    chide: 0,
    dhide: 0,
    ehide: 0,
    fhide: 0,
    ghide: 0,
    hhide: 0,
    // 正在持仓 全部-弹窗数据
    actionSheetItems: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    menu: '全部',
    // val: 0,
    
    // 正在持仓 按最近开仓-弹窗数据
    actionSheetItemstwo: [
      { txt: '按最近开仓', id: 0 },
      { txt: '收益高到低', id: 1 },
      { txt: '收益低到高', id: 2 },
    ],
    menutwo: '按最近开仓',
    //valtwo: 0,

    // 历史交易 跟随-弹窗数据
    actionSheetItemsthree: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    menuthree: '全部',
    //valthree: 0,

    // 历史交易 按最近平仓-弹窗数据
    actionSheetItemsfive: [
      { txt: '按最近平仓', id: 0 },
      { txt: '按最早平仓', id: 1 },
      { txt: '收益高到低', id: 2 },
      { txt: '收益低到高', id: 3 },
    ],
    menufive: '按最近平仓',
    //valfive: 0,

    // 正在持仓 跟随-弹窗数据
    actionSheetItemssix: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    GSDYmenu: '全部',
    //GSDYval: 0,

    // 正在持仓 跟随-弹窗数据
    actionSheetItemsseven: [
      { txt: '按最近开仓', id: 0 },
      { txt: '收益高到低', id: 1 },
      { txt: '收益低到高', id: 2 },
    ],
    GSDYmenutwo: '按最近开仓',
    //GSDYvaltwo: 0,
    
    // 历史交易 跟随-弹窗数据
    GSLSactionSheetItems: [
      { txt: '全部', id: 0 },
      { txt: '买入', id: 1 },
      { txt: '卖出', id: 2 },
    ],
    GSLSmenu: '全部',
    //GSLSval: 0,

    // 历史交易 按最近平仓-弹窗数据
    GSLSactionSheetItemstwo: [
      { txt: '按最近平仓', id: 0 },
      { txt: '按最早平仓', id: 1 },
      { txt: '收益高到低', id: 2 },
      { txt: '收益低到高', id: 3 },
    ],
    GSLSmenutwo: '按最近平仓',
    //GSLSvaltwo: 0,



    TCnavstate: 0,
    TCnavstatethree: 0,


    statusBarHeight: app.globalData.statusBarHeight,


    TopnavState: 0,
    //CenternavState:0,
    OrderNavState: 0,
    OrderNavStatetwo: 0,
    GSDYNavState:0,
    GSDYNavStatetwo:0,
    navStatethree: 0,
    navState: 0,
    item: [{
      Aone: '交易分析',
      Atwo: '交易订单',
      Athree: '订阅总览',
    }],
    TopItem: [{
      TopOne: '交易账户',
      TopTwo: '跟随账户',
    }],
    itemthree: [{
      Aonethree: '交易分析',
      Atwothree: '交易订单',
      Athreethree: '订阅总览',
    }],
    //正在持仓订单数据
     OrderingDataList: [{
        id: "01",
        img: '../../images/TradeAccount/arrowTipDown@2x.png',
        options: 'AUD/CAD',
        salestatus: 0, // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child: [{
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
        img: '../../images/TradeAccount/arrowTipUp@2x.png',
        options: 'AUD/CAD',
        salestatus: 1,
        standhands: '0.01',
        money: '+25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10983',
        pointNumber: '-31.90点',
        child: [{
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
        child: [{
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
        salestatus: 0, // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child: [{
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
        child: [{
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
        salestatus: 0, // 0是卖   1是买
        standhands: '0.01',
        money: '-25.25',
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10383',
        pointNumber: '-31.90点',
        child: [{
          id: "06-1",
          'ordernumber': '12245454',
          'rates': '￥-0.05',
          'opentime': '2019/9/18 17：33：21',
          'commission': '￥6.66',
          'jingjishangshoushu': '0.01'
        }]
      }
    ],
    //正在持仓订单数据
    GSDDOrderingDataList: [{
      id: "01",
      img: '../../images/TradeAccount/arrowTipDown@2x.png',
      options: 'AUD/CAD',
      salestatus: 0, // 0是卖   1是买
      standhands: '0.01',
      money: '-25.25',
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10383',
      pointNumber: '-31.90点',
      GSDDchild: [{
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
      img: '../../images/TradeAccount/arrowTipUp@2x.png',
      options: 'AUD/CAD',
      salestatus: 1,
      standhands: '0.01',
      money: '+25.25',
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10983',
      pointNumber: '-31.90点',
      GSDDchild: [{
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
      GSDDchild: [{
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
      salestatus: 0, // 0是卖   1是买
      standhands: '0.01',
      money: '-25.25',
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10383',
      pointNumber: '-31.90点',
      GSDDchild: [{
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
      GSDDchild: [{
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
      salestatus: 0, // 0是卖   1是买
      standhands: '0.01',
      money: '-25.25',
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10383',
      pointNumber: '-31.90点',
      GSDDchild: [{
        id: "06-1",
        'ordernumber': '12245454',
        'rates': '￥-0.05',
        'opentime': '2019/9/18 17：33：21',
        'commission': '￥6.66',
        'jingjishangshoushu': '0.01'
      }]
    }
    ],
    //历史交易订单数据
    OrderedDataList: [{
        id: "01",
        options: 'AUD/CAD',
        salestatus: 0, // 0是卖   1是买
        standhands: '0.01',
        money: -11111.25,
        optionsName: '澳元/加元',
        range1: '1.10717',
        range2: '1.10983',
        pointNumber: '-31.90点',
        childtwo: [{
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
        childtwo: [{
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
        childtwo: [{
          id: "03-1",
          'ordernumber': '66666666',
          'opentime': '2019/9/18 17：33：21',
          'closetime': '2019/9/19 17：33：21',
          'commission': '￥5.88',
          'rates': '￥-0.15',
          'jingjishangshoushu': '0.05'
        }]
      }
    ],
    //跟随账户 历史交易订单数据
    GSLSOrderedDataList: [{
      id: "01",
      options: 'AUD/CAD',
      salestatus: 0, // 0是卖   1是买
      standhands: '0.01',
      money: -11111.25,
      optionsName: '澳元/加元',
      range1: '1.10717',
      range2: '1.10983',
      pointNumber: '-31.90点',
      GSLSchild: [{
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
      GSLSchild: [{
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
      GSLSchild: [{
        id: "03-1",
        'ordernumber': '66666666',
        'opentime': '2019/9/18 17：33：21',
        'closetime': '2019/9/19 17：33：21',
        'commission': '￥5.88',
        'rates': '￥-0.15',
        'jingjishangshoushu': '0.05'
      }]
    }
    ],
    searchArraythree: [{
        name: "淡墨无殇 @1",
        id: "01",
        font: 'GoldwellCapital-Dome',
        money: '￥31，806.15',
        childthree: [{
          id: "01-1",
          'one': '按比例1倍',
          'two': '￥0.00',
          'three': '0.1',
          'four': '66天',
        }]
      },
      {
        name: "淡墨无殇 @2",
        id: "02",
        font: 'GoldwellCapital-Dome',
        money: '￥31，806.15',
        childthree: [{
          id: "02-1",
          'one': '按比例1倍',
          'two': '￥0.15',
          'three': '0.8',
          'four': '16天',
        }]
      },
      {
        name: "淡墨无殇 @3",
        id: "03",
        font: 'GoldwellCapital-Dome',
        money: '￥31，806.15',
        childthree: [{
          id: "03-1",
          'one': '按比例1倍',
          'two': '￥8.10',
          'three': '0.8',
          'four': '55天',
        }]
      },
      {
        name: "淡墨无殇 @4",
        id: "04",
        font: 'GoldwellCapital-Dome',
        money: '￥31，806.15',
        childthree: [{
          id: "04-1",
          'one': '按比例1倍',
          'two': '￥7.10',
          'three': '0.8',
          'four': '44天',
        }]
      },
      {
        name: "淡墨无殇 @5",
        id: "05",
        font: 'GoldwellCapital-Dome',
        money: '￥31，806.15',
        childthree: [{
          id: "05-1",
          'one': '按比例1倍',
          'two': '￥6.10',
          'three': '0.8',
          'four': '33天',
        }]
      }],
    searchArrayfour: [{
      name: "淡墨无殇 @6",
      id: "01",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      childfour: [{
        id: "01-1",
        'one': '按比例1倍',
        'two': '￥0.00',
        'three': '0.1',
        'four': '66天',
      }]
    },
    {
      name: "淡墨无殇 @7",
      id: "02",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      childfour: [{
        id: "02-1",
        'one': '按比例1倍',
        'two': '￥0.15',
        'three': '0.8',
        'four': '16天',
      }]
    },
    {
      name: "淡墨无殇 @8",
      id: "03",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      childfour: [{
        id: "03-1",
        'one': '按比例1倍',
        'two': '￥8.10',
        'three': '0.8',
        'four': '55天',
      }]
    },
    {
      name: "淡墨无殇 @9",
      id: "04",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      childfour: [{
        id: "04-1",
        'one': '按比例1倍',
        'two': '￥7.10',
        'three': '0.8',
        'four': '44天',
      }]
    },
    {
      name: "淡墨无殇 @0",
      id: "05",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      childfour: [{
        id: "05-1",
        'one': '按比例1倍',
        'two': '￥6.10',
        'three': '0.8',
        'four': '33天',
      }]
    }],
    GSDYsearchArray: [{
      name: "淡墨无殇 @6",
      id: "01",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYchild: [{
        id: "01-1",
        'one': '￥0.00',
        'two': '60天',
      }]
    },
    {
      name: "淡墨无殇 @7",
      id: "02",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYchild: [{
        id: "02-1",
        'one': '￥0.99',
        'two': '55天',
      }]
    },
    {
      name: "淡墨无殇 @8",
      id: "03",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYchild: [{
        id: "03-1",
        'one': '￥0.89',
        'two': '40天',
      }]
    },
    {
      name: "淡墨无殇 @9",
      id: "04",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYchild: [{
        id: "04-1",
        'one': '￥0.89',
        'two': '30天',
      }]
    },
    {
      name: "淡墨无殇 @0",
      id: "05",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYchild: [{
        id: "05-1",
        'one': '￥0.10',
        'two': '34天',
      }]
    }],
    GSDYLSsearchArray: [{
      name: "淡墨无殇 @6",
      id: "01",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYLSchild: [{
        id: "01-1",
        'one': '1.18',
        'two': '￥0.00',
        'three':'46天'
      }]
    },
    {
      name: "淡墨无殇 @7",
      id: "02",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYLSchild: [{
        id: "02-1",
        'one': '0.99',
        'two': '￥0.10',
        'three': '36天'
      }]
    },
    {
      name: "淡墨无殇 @8",
      id: "03",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYLSchild: [{
        id: "03-1",
        'one': '2.89',
        'two': '￥1.66',
        'three': '56天'
      }]
    },
    {
      name: "淡墨无殇 @9",
      id: "04",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYLSchild: [{
        id: "04-1",
        'one': '2.89',
        'two': '￥2.33',
        'three': '66天'
      }]
    },
    {
      name: "淡墨无殇 @0",
      id: "05",
      font: 'GoldwellCapital-Dome',
      money: '￥31，806.15',
      GSDYLSchild: [{
        id: "05-1",
        'one': '0.10',
        'two': '￥0.2',
        'three': '16天'
      }]
    }],
  },
  xsevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrxs = that.data.xs[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        xsfontstate: 0,
        xsfont: arrxs
      })
    } else {
      this.setData({
        xsfontstate: 1,
        xsfont: arrxs
      })
    }
    this.hideModalXS();
  },

  xseventtwo: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrxstwo = that.data.xstwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        xsfontstatetwo: 0,
        xsfonttwo: arrxstwo
      })
    } else {
      this.setData({
        xsfontstatetwo: 1,
        xsfonttwo: arrxstwo
      })
    }
    this.hideModalXStwo();
  },

  pcsjevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrpcsj = that.data.pcsj[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        pcsjfontstate: 0,
        pcsjfont: arrpcsj
      })
    } else {
      this.setData({
        pcsjfontstate: 1,
        pcsjfont: arrpcsj
      })
    }
    this.hideModalPCSJ();
  },

  pcsjeventtwo: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrpcsjtwo = that.data.pcsjtwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        pcsjfontstatetwo: 0,
        pcsjfonttwo: arrpcsjtwo
      })
    } else {
      this.setData({
        pcsjfontstatetwo: 1,
        pcsjfonttwo: arrpcsjtwo
      })
    }
    this.hideModalPCSJtwo();
  },

  jyntevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrjynt = that.data.jynt[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        jyntfontstate: 0,
        jyntfont: arrjynt
      })
    } else if (index == 1) {
      this.setData({
        jyntfontstate: 1,
        jyntfont: arrjynt
      })
    } else if (index == 2) {
      this.setData({
        jyntfontstate: 2,
        jyntfont: arrjynt
      })
    } else {
      this.setData({
        jyntfontstate: 3,
        jyntfont: arrjynt
      })
    }
    this.hideModalJT();
  },

  jynteventtwo: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrjynttwo = that.data.jynttwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        jyntfontstatetwo: 0,
        jyntfonttwo: arrjynttwo
      })
    } else if (index == 1) {
      this.setData({
        jyntfontstatetwo: 1,
        jyntfonttwo: arrjynttwo
      })
    } else if (index == 2) {
      this.setData({
        jyntfontstatetwo: 2,
        jyntfonttwo: arrjynttwo
      })
    } else {
      this.setData({
        jyntfontstatetwo: 3,
        jyntfonttwo: arrjynttwo
      })
    }
    this.hideModalJTtwo();
  },


  revent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrR = that.data.r[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        rfontstate: 0,
        rfont: arrR
      })
    } else{
      this.setData({
        rfontstate: 1,
        rfont: arrR
      })
    }
    this.hideModalR();
  },

  reventtwo: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrRtwo = that.data.rtwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        rfontstatetwo: 0,
        rfonttwo: arrRtwo
      })
    } else {
      this.setData({
        rfontstatetwo: 1,
        rfonttwo: arrRtwo
      })
    }
    this.hideModalRtwo();
  },


  jynevent: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrjyn = that.data.jyn[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        jynfontstate: 0,
        jynfont: arrjyn
      })
    } else if (index == 1) {
      this.setData({
        jynfontstate: 1,
        jynfont: arrjyn
      })
    } else if (index == 2) {
      this.setData({
        jynfontstate: 2,
        jynfont: arrjyn
      })
    } else {
      this.setData({
        jynfontstate: 3,
        jynfont: arrjyn
      })
    }
    this.hideModalJ();
  },

  jyneventtwo: function (e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrjyntwo = that.data.jyntwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        jynfontstatetwo: 0,
        jynfonttwo: arrjyntwo
      })
    } else if (index == 1) {
      this.setData({
        jynfontstatetwo: 1,
        jynfonttwo: arrjyntwo
      })
    } else if (index == 2) {
      this.setData({
        jynfontstatetwo: 2,
        jynfonttwo: arrjyntwo
      })
    } else {
      this.setData({
        jynfontstatetwo: 3,
        jynfonttwo: arrjyntwo
      })
    }
    this.hideModalJtwo();
  },



  gslsazjpcevent:function(e){
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrGSLSazjpc = that.data.GSLSactionSheetItemstwo[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestatenine: 0,
        GSLSmenutwo: arrGSLSazjpc
      })
    } else if (index == 1) {
      this.setData({
        choosestatenine: 1,
        GSLSmenutwo: arrGSLSazjpc
      })
    } else if (index == 2) {
      this.setData({
        choosestatenine: 2,
        GSLSmenutwo: arrGSLSazjpc
      })
    } else {
      this.setData({
        choosestatenine: 3,
        GSLSmenutwo: arrGSLSazjpc
      })
    }
    this.hideModalGSLSazjpc();
  },
  gslsqbevent:function(e){
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrGSLSqb = that.data.GSLSactionSheetItems[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestateeight: 0,
        GSLSmenu: arrGSLSqb
      })
    } else if (index == 1) {
      this.setData({
        choosestateeight: 1,
        GSLSmenu: arrGSLSqb
      })
    } else {
      this.setData({
        choosestateeight: 2,
        GSLSmenu: arrGSLSqb
      })
    }
    this.hideModalGSLSqb();
  },
  gsazjkcevent:function(e){
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrGsazjkc = that.data.actionSheetItemsseven[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestateseven: 0,
        GSDYmenutwo: arrGsazjkc
      })
    } else if (index == 1) {
      this.setData({
        choosestateseven: 1,
        GSDYmenutwo: arrGsazjkc
      })
    } else {
      this.setData({
        choosestateseven: 2,
        GSDYmenutwo: arrGsazjkc
      })
    }
    this.hideModalGSazjkc();
  },
  gsqbevent:function(e){
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrgsqb = that.data.actionSheetItemssix[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestatesix: 0,
        GSDYmenu: arrgsqb
      })
    } else if (index == 1) {
      this.setData({
        choosestatesix: 1,
        GSDYmenu: arrgsqb
      })
    } else {
      this.setData({
        choosestatesix: 2,
        GSDYmenu: arrgsqb
      })
    }
    this.hideModalGSqb();
  },
  lsazjpcevent:function(e){
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log(index)
    let that = this
    let arrlsazjpc = that.data.actionSheetItemsfive[index].txt
    //console.log(arrfwq)
    if (index == 0) {
      this.setData({
        choosestatefour: 0,
        menufive: arrlsazjpc
      })
    } else if (index == 1) {
      this.setData({
        choosestatefour: 1,
        menufive: arrlsazjpc
      })
    } else if(index==2){
      this.setData({
        choosestatefour: 2,
        menufive: arrlsazjpc
      })
    }else{
      this.setData({
        choosestatefour: 3,
        menufive: arrlsazjpc
      })
    }
    this.hideModalLSAZJPC();
  },
  lsqbevent:function(e){
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
  AZJKCevent:function(e){
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
  qbevent:function(e){
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
  // 历史交易的展开
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
  // 历史交易的展开
  GSLSshowListtwo(e) {
    var that = this;
    var toggleBtnVal = that.data.fhide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        fhide: 0
      })
    } else {
      that.setData({
        fhide: index
      })
    }
  },
  // 跟随账户 正在订阅的展开
  GSDYshowList(e) {
    var that = this;
    var toggleBtnVal = that.data.ghide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.GSDYhideModal();
      that.setData({
        ghide: 0,
      })
    } else {
      that.GSDYshowModal();
      that.setData({
        ghide: index
      })
    } 
  },
  //跟随账户 历史订阅的展开
  GSDYLSshowList(e) {
    var that = this;
    var toggleBtnVal = that.data.hhide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.LSDYhideModal();
      that.setData({
        hhide: 0
      })
    } else {
      that.LSDYshowModal();
      that.setData({
        hhide: index
      })
    }
  },
  // 历史交易的展开
  showListthree(e) {
    var that = this;
    var toggleBtnVal = that.data.chide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        chide: 0
      })
    } else {
      that.setData({
        chide: index
      })
    }
  },
  // 历史交易的展开
  showListfour(e) {
    var that = this;
    var toggleBtnVal = that.data.dhide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        dhide: 0
      })
    } else {
      that.setData({
        dhide: index
      })
    }
  },
  // 历史交易 按最近平仓 - 弹窗

  // 正在持仓 按最近开仓 - 弹窗
  actionSheetTapfive: function () {
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
  GSLSactionSheetTap: function () {
    this.showModalGSLSqb();
  },
  //显示对话框
  showModalGSLSqb: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSLSqb: animation.export(),
      showModalStatusGSLSqb: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSLSqb: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalGSLSqb: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSLSqb: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSLSqb: animation.export(),
        showModalStatusGSLSqb: false
      })
    }.bind(this), 200)
  },





  // 正在持仓的展开
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
  GSDDshowList(e) {
    var that = this;
    var toggleBtnVal = that.data.ehide;
    let index = e.currentTarget.id;
    let arrayItem = this.data.searchArray;
    if (toggleBtnVal == index) {
      that.setData({
        ehide: 0
      })
    } else {
      that.setData({
        ehide: index
      })
    }
  },

  // 正在持仓 全部 - 弹窗
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


  // 正在持仓 按最近开仓 - 弹窗
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





  //跟随账户 历史交易 按最近平仓 - 弹窗
  GSLSactionSheetTaptwo: function () {
    this.showModalGSLSazjpc();
  },
  //显示对话框
  showModalGSLSazjpc: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSLSazjpc: animation.export(),
      showModalStatusGSLSazjpc: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSLSazjpc: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalGSLSazjpc: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSLSazjpc: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSLSazjpc: animation.export(),
        showModalStatusGSLSazjpc: false
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





  //跟随账户 正在持仓 全部 - 弹窗
  GSDYactionSheetTap: function () {
    this.showModalGSqb();
  },
  //显示对话框
  showModalGSqb: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSqb: animation.export(),
      showModalStatusGSqb: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSqb: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalGSqb: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSqb: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSqb: animation.export(),
        showModalStatusGSqb: false
      })
    }.bind(this), 200)
  },




  
  //跟随账户 正在持仓 全部 - 弹窗
  GSDYactionSheetTaptwo: function () {
    this.showModalGSazjkc();
  },
  //显示对话框
  showModalGSazjkc: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSazjkc: animation.export(),
      showModalStatusGSazjkc: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSazjkc: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalGSazjkc: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataGSazjkc: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataGSazjkc: animation.export(),
        showModalStatusGSazjkc: false
      })
    }.bind(this), 200)
  },





  OrderNavSwitch: function(e) {
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
  OrderNavSwitchtwo: function(e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        OrderNavStatetwo: 0
      })
    } else {
      this.setData({
        OrderNavStatetwo: 1
      })
    }
  },
  GSDYNavSwitch: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        GSDYNavState: 0
      })
    } else {
      this.setData({
        GSDYNavState: 1
      })
    }
  },
  GSDYNavSwitchtwo: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        GSDYNavStatetwo: 0
      })
      this.LSDYhideModal();
    } else {
      this.setData({
        GSDYNavStatetwo: 1
      })
      this.GSDYhideModal();
    }
  },
  //导航栏的切换
  navSwitch: function(e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        navState: 0
      })
    } else if (index == 1) {
      this.setData({
        navState: 1
      })
    } else {
      this.setData({
        navState: 2
      })
    }
  },
  TopnavSwitch: function(e) {
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
  //交易页面下的跟随账户第二个导航栏的切换
  navSwitchthree: function(e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        navStatethree: 0
      })
    } else if (index == 1) {
      this.setData({
        navStatethree: 1
      })
    } else {
      this.setData({
        navStatethree: 2
      })
    }
  },
  GoToTransactionDataSurvey: function() {
    wx.navigateTo({
      url: '../TransactionDataSurvey/TransactionDataSurvey',
    })
  },
  GoToFollowDataSurvey: function() {
    wx.navigateTo({
      url: '../FollowDataSurvey/FollowDataSurvey',
    })
  },

  //点击我显示底部弹出框
  clickmetwo: function() {
    this.showModaltwo();
  },
  //显示对话框
  showModaltwo: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatatwo: animation.export(),
      showModalStatustwo: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatatwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModaltwo: function(e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatatwo: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatatwo: animation.export(),
        showModalStatustwo: false
      })
    }.bind(this), 200)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        TCnavstate: 0
      })
    } else if (index == 1) {
      this.setData({
        TCnavstate: 1
      })
    } else if (index == 2) {
      this.setData({
        TCnavstate: 2
      })
    } else {
      this.setData({

      })
    }
  },



  //点击我显示底部弹出框
  clickme: function() {
    this.showModal();
  },
  //显示对话框
  showModal: function() {
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
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function() {
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
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },




  //点击我显示底部弹出框
  clickmethree: function() {
    this.showModalthree();
  },
  //显示对话框
  showModalthree: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatathree: animation.export(),
      showModalStatusthree: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatathree: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalthree: function(e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDatathree: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationDatathree: animation.export(),
        showModalStatusthree: false
      })
    }.bind(this), 200)
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        TCnavstatethree: 0
      })
    } else if (index == 1) {
      this.setData({
        TCnavstatethree: 1
      })
    } else if (index == 2) {
      this.setData({
        TCnavstatethree: 2
      })
    } else {
      this.setData({

      })
    }
  },


  //显示对话框
  GSDYshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYanimationData: animation.export(),
      GSDYshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  GSDYhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYanimationData: animation.export(),
        GSDYshowModalStatus: false
      })
    }.bind(this), 200)
  },

  

  //显示对话框
  LSDYshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      LSDYanimationData: animation.export(),
      LSDYshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        LSDYanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  LSDYhideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      LSDYanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        LSDYanimationData: animation.export(),
        LSDYshowModalStatus: false
      })
    }.bind(this), 200)
  },







  //点击我显示底部弹出框
  GSDYTCtwo: function () {
    this.GSDYTCshowModal();
  },

  //显示对话框
  GSDYTCshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYTCanimationData: animation.export(),
      GSDYTCshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYTCanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  GSDYTChideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      GSDYTCanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        GSDYTCanimationData: animation.export(),
        GSDYTCshowModalStatus: false
      })
    }.bind(this), 200)
  },


  tcyixia:function(){
    wx.showToast({
      title: '取消订阅成功',
    })
    this.GSDYTChideModal();
    this.GSDYhideModal();
  },

  
  
  //点击我显示底部弹出框
  LSDYtc: function () {
    this.LSDYTCshowModal();
  },

  //显示对话框
  LSDYTCshowModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      LSDYTCanimationData: animation.export(),
      LSDYTCshowModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        LSDYTCanimationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  LSDYTChideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      LSDYTCanimationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        LSDYTCanimationData: animation.export(),
        LSDYTCshowModalStatus: false
      })
    }.bind(this), 200)
  },


  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 200) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },


  //点击我显示底部弹出框
  syjyn: function () {
    this.showModalJ();
  },
  //显示对话框
  showModalJ: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJ: animation.export(),
      showModalStatusJ: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJ: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalJ: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJ: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJ: animation.export(),
        showModalStatusJ: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  syjyntwo: function () {
    this.showModalJtwo();
  },
  //显示对话框
  showModalJtwo: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJtwo: animation.export(),
      showModalStatusJtwo: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJtwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalJtwo: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJtwo: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJtwo: animation.export(),
        showModalStatusJtwo: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  syr: function () {
    this.showModalR();
  },
  //显示对话框
  showModalR: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataR: animation.export(),
      showModalStatusR: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataR: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalR: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataR: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataR: animation.export(),
        showModalStatusR: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  syrtwo: function () {
    this.showModalRtwo();
  },
  //显示对话框
  showModalRtwo: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataRtwo: animation.export(),
      showModalStatusRtwo: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataRtwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalRtwo: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataRtwo: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataRtwo: animation.export(),
        showModalStatusRtwo: false
      })
    }.bind(this), 200)
  },




  //点击我显示底部弹出框
  jzyejyn: function () {
    this.showModalJT();
  },
  //显示对话框
  showModalJT: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJT: animation.export(),
      showModalStatusJT: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJT: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalJT: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJT: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJT: animation.export(),
        showModalStatusJT: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  jzyejyntwo: function () {
    this.showModalJTtwo();
  },
  //显示对话框
  showModalJTtwo: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJTtwo: animation.export(),
      showModalStatusJTtwo: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJTtwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalJTtwo: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataJTtwo: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataJTtwo: animation.export(),
        showModalStatusJTtwo: false
      })
    }.bind(this), 200)
  },



  //点击我显示底部弹出框
  pcsj: function () {
    this.showModalPCSJ();
  },
  //显示对话框
  showModalPCSJ: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataPCSJ: animation.export(),
      showModalStatusPCSJ: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataPCSJ: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalPCSJ: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataPCSJ: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataPCSJ: animation.export(),
        showModalStatusPCSJ: false
      })
    }.bind(this), 200)
  },

  //点击我显示底部弹出框
  pcsjtwo: function () {
    this.showModalPCSJtwo();
  },
  //显示对话框
  showModalPCSJtwo: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataPCSJtwo: animation.export(),
      showModalStatusPCSJtwo: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataPCSJtwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalPCSJtwo: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataPCSJtwo: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataPCSJtwo: animation.export(),
        showModalStatusPCSJtwo: false
      })
    }.bind(this), 200)
  },



  //点击我显示底部弹出框
  xs: function () {
    this.showModalXS();
  },
  //显示对话框
  showModalXS: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataXS: animation.export(),
      showModalStatusXS: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataXS: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalXS: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataXS: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataXS: animation.export(),
        showModalStatusXS: false
      })
    }.bind(this), 200)
  },


  //点击我显示底部弹出框
  xstwo: function () {
    this.showModalXStwo();
  },
  //显示对话框
  showModalXStwo: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataXStwo: animation.export(),
      showModalStatusXStwo: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataXStwo: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModalXStwo: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationDataXStwo: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationDataXStwo: animation.export(),
        showModalStatusXStwo: false
      })
    }.bind(this), 200)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})