// components/Helang-Checkbox/AccountRating.js
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

    // 账户评级的数据
    AccountRatingList:[
      { ratingone: '不限', id: 0,checked: true},
      { ratingone: '青铜', id: 1,checked: false},
      { ratingone: '白银', id: 2,checked: false},
      { ratingone: '黄金', id: 3,checked: false},
      { ratingone: '铂金', id: 4,checked: false},
      { ratingone: '钻石', id: 5,checked: false},
      { ratingone: '星耀', id: 6,checked: false},
      { ratingone: '王者', id: 7,checked: false}
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    zhpj: function (e) {
      var that = this;
      let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值

      // console.log(this.data.AccountRatingList)
      let checkBox = that.data.AccountRatingList;
      // if (index != 0) {
      //   console.log(222)
      //   this.data.AccountRatingList[0].checked = false;
      // }else{
      //   for (var i = 1; i < that.data.AccountRatingList.length; i++) {
      //     //console.log(111)
      //     that.data.AccountRatingList[i].checked = false;
      //   }
      // }

      if (checkBox[index].checked) {
        this.data.AccountRatingList[index].checked = false;
      } else {
        this.data.AccountRatingList[index].checked = true;
      }
      //返回用户选中的值
      var value = checkBox.filter((item, index) => {
        return item.checked == true;

      })



      console.log(value)
      if (value.length == 0) {
        console.log(1)
        this.data.AccountRatingList[0].checked = true;
      }
      if (value.length > 1) {
        this.data.AccountRatingList[0].checked = false;
      }
      if (index == 0) {
        this.data.AccountRatingList[0].checked = true;
        for (var i = 1; i < that.data.AccountRatingList.length; i++) {
          //console.log(111)
          that.data.AccountRatingList[i].checked = false;
        }
      }
      this.setData({
        AccountRatingList: this.data.AccountRatingList,
        value: value
      })
    },
      
  }
})
