// components/TradeStars/TradeStars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    //交易明星  数据集
    TradeStarsDataList: [{
      imgurl: '../../../images/headimg/pic_heading1.png',
      username: '淡墨无殇',
      accountnumner: '1',
      level: '黄金',
      maxhuichelv: '28.23%',
      shouyilv: '0.00%',
      pricemonth: '29.99',
      'userID': 115,
    },
    {
      imgurl: '../../../images/headimg/pic_Headportrait2.png',
      username: '梨花雨凉',
      accountnumner: '2',
      level: '白银',
      maxhuichelv: '28.23%',
      shouyilv: '0.00%',
      pricemonth: '29.99',
      userID: 116,
    },
    {
      imgurl: '../../../images/headimg/pic_Headportrait3.png',
      username: '醉酒思红颜',
      accountnumner: '3',
      level: '王者',
      maxhuichelv: '28.23%',
      shouyilv: '0.00%',
      pricemonth: '29.99',
      userID: 117,
    },
    {
      imgurl: '../../../images/headimg/pic_Headportrait4.png',
      username: '指上菁芜',
      accountnumner: '4',
      level: '青铜',
      maxhuichelv: '28.23%',
      shouyilv: '0.00%',
      pricemonth: '29.99',
      userID: 118,
    }],
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    //跳转到交易明星页面
    GoToTradeStars: function () {
      wx.navigateTo({
        url: '../TradeStars/TradeStars'
      })
    },
    //跳转到他人账户
    GoToHisTradeStars: function () {
      wx.navigateTo({
        url: '../HisTradeStars/HisTradeStars'
      })
    }
  }
})
