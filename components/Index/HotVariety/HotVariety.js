// components/HotVariety/HotVariety.js
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
    showModal: false,
    contentgz: '',
    //热门品种的数据集
    HotVarietyDataList: [{
        OptionalName: 'AUD/USD',
        FocusAccount: '123',
        OptionalStatus: 0,
      },
      {
        OptionalName: 'AUD/USD',
        FocusAccount: '154',
        OptionalStatus: 1,
      },
      {
        OptionalName: 'AUD/USD',
        FocusAccount: '200',
        OptionalStatus: 1,
      },
      {
        OptionalName: 'AUD/USD',
        FocusAccount: '456',
        OptionalStatus: 0,
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    GoToHotVariety: function() {
      wx.navigateTo({
        url: '../HotVariety/HotVariety',
      })
    },

    followed: function (e) {
      var index = e.currentTarget.id; //当前数组的索引下标
      var arr = this.data.HotVarietyDataList; //声明的数组
      if (arr[index].OptionalStatus == true) {
        this.setData({
          contentgz: '确认取消自选？'
        })
      } else {
        this.setData({
          contentgz: '确认自选？'
        })
      }
      this.setData({
        showModal: true,
        val: index
      })
    },
    boxqx: function () {
      this.setData({
        showModal: false
      })
    },
    boxqr: function (e) {
      var that = this;
      var arr = that.data.HotVarietyDataList; //声明的数组
      if (arr[that.data.val].OptionalStatus == true) { //如果当前数组下标的状态为true
        arr[that.data.val].OptionalStatus = false; //将false赋给当前数组的下标
        wx.showToast({
          title: '取消成功',
        })
      } else { //反之
        arr[that.data.val].OptionalStatus = true;
        wx.showToast({
          title: '关注成功',
        })
      }
      that.setData({
        HotVarietyDataList: arr,
        showModal: false
      })
    },
  }

})