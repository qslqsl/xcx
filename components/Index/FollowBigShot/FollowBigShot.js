// components/FollowBigShot/FollowBigShot.js
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
    //跟随大咖  数据集
    FollowBigShotDataList: [{
      imgurl: '../../../images/headimg/pic_followheadimg1.png',
      username: '迟暮晚归',
      accountnumner: '1',
      maxhuichelv: '28.23%',
      followaccount: '31，806.15',
      tradecycle: '33周',
      userID: 119,
    },
    {
      imgurl: '../../../images/headimg/pic_followheadimg2.png',
      username: '陈静安',
      accountnumner: '2',
      maxhuichelv: '28.23%',
      followaccount: '31，806.15',
      tradecycle: '33周',
      userID: 120,
    },
    {
      imgurl: '../../../images/headimg/pic_followheadimg3.png',
      username: '蝶无需花恋',
      accountnumner: '3',
      maxhuichelv: '28.23%',
      followaccount: '31，806.15',
      tradecycle: '33周',
      userID: 130,
    },
    {
      imgurl: '../../../images/headimg/pic_followheadimg4.png',
      username: '梦在深巷',
      accountnumner: '4',
      maxhuichelv: '28.23%',
      followaccount: '31，806.15',
      tradecycle: '33周',
      userID: 131,
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //跳转到跟随大咖页面
    GoToFollowBigShot:function(){
      wx.navigateTo({
        url: '../FollowBigShot/FollowBigShot',
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
