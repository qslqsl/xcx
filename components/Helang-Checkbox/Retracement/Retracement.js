// components/Helang-Checkbox/RateOfReturn/RateOfReturn.js
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
    ysState: 0,
    // 收益率的数据
    RateOfReturnList: [
      { Rateone: '不限', id: 0 },
      { Rateone: '≤10%', id: 1 },
      { Rateone: '10%-20%', id: 2 },
      { Rateone: '20%-30%', id: 3 },
      { Rateone: '≥30%', id: 4 }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    zdhc: function (e) {
      let index = e.currentTarget.dataset.index
      //console.log(index)
      let arr = this.data.RateOfReturnList[index].id
      //console.log(arr)
      if (index == arr) {
        this.setData({
          ysState: arr
        })
      }
    },
  }
})
