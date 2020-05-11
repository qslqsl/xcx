// pages/LoginPage/LoginPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,

    userphone:'',
    userImgCode:'',
    userCode:'',
    sendmsg: "sendmsg",
    getmsg: "获取短信验证码",

    CountryNumberValue: '86',
    zimu: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    scrollIntoId: 'A',
    groups: [{
      groupName: 'A',
      users:
        [
          { id: 1, name: '安道尔共和国', en: 'Andorra', tel: '376' },
          { id: 2, name: '阿富汗', en: 'Afghanistan', tel: '93' },
          { id: 3, name: '安提瓜和巴布达', en: 'Antigua and Barbuda', tel: '1268' },
          { id: 4, name: '安圭拉岛', en: 'Anguilla', tel: '1264' },
          { id: 5, name: '阿尔巴尼亚', en: 'Albania', tel: '355' },
          { id: 6, name: '亚美尼亚', en: 'Armenia', tel: '374' },
          { id: 7, name: '阿森松', en: 'Ascension', tel: '247' },
          { id: 8, name: '安哥拉', en: 'Angola', tel: '244' },
          { id: 9, name: '阿根廷', en: 'Argentina', tel: '54' },
          { id: 10, name: '奥地利', en: 'Austria', tel: '43' },
          { id: 11, name: '澳大利亚', en: 'Australia', tel: '61' },
          { id: 12, name: '阿尔及利亚', en: 'Algeria', tel: '213' },
          { id: 13, name: '阿塞拜疆', en: 'Azerbaijan', tel: '994' }
        ]
    },
    {
      groupName: 'B',
      users:
        [
          { id: 14, name: '巴巴多斯', en: 'Barbados', tel: '1246' },
          { id: 15, name: '孟加拉国', en: 'Bangladesh', tel: '880' },
          { id: 16, name: '比利时', en: 'Belgium', tel: '32' },
          { id: 17, name: '布基纳法索', en: 'Burkina-faso', tel: '226' },
          { id: 18, name: '保加利亚', en: 'Bulgaria', tel: '359' },
          { id: 19, name: '缅甸', en: 'Burma', tel: '95' },
          { id: 20, name: '巴林', en: 'Bahrain', tel: '973' },
          { id: 21, name: '布隆迪', en: 'Burundi', tel: '257' },
          { id: 22, name: '贝宁', en: 'Benin', tel: '229' },
          { id: 23, name: '百慕大群岛', en: 'BermudaIs.', tel: '1441' },
          { id: 24, name: '文莱', en: 'Brunei', tel: '673' },
          { id: 25, name: '玻利维亚', en: 'Bolivia', tel: '591' },
          { id: 26, name: '巴西', en: 'Brazil', tel: '55' },
          { id: 27, name: '巴哈马', en: 'Bahamas', tel: '1242' },
          { id: 28, name: '博茨瓦纳', en: 'Botswana', tel: '267' },
          { id: 29, name: '白俄罗斯', en: 'Belarus', tel: '375' },
          { id: 30, name: '伯利兹', en: 'Belize', tel: '501' }
        ]
    },
    {
      groupName: 'C',
      users:
        [
          { id: 31, name: '加拿大', en: 'Canada', tel: '1' },
          { id: 32, name: '开曼群岛', en: 'CaymanIs.', tel: '1345' },
          { id: 33, name: '乍得', en: 'Chad', tel: '235' },
          { id: 34, name: '中非共和国', en: 'CentralAfricanRepublic', tel: '236' },
          { id: 35, name: '刚果', en: 'Congo', tel: '242' },
          { id: 36, name: '库克群岛', en: 'CookIs.', tel: '682' },
          { id: 37, name: '智利', en: 'Chile', tel: '56' },
          { id: 38, name: '喀麦隆', en: 'Cameroon', tel: '237' },
          { id: 39, name: '中国', en: 'China', tel: '86' },
          { id: 40, name: '哥伦比亚', en: 'Colombia', tel: '57' },
          { id: 41, name: '哥斯达黎加', en: 'CostaRica', tel: '506' },
          { id: 42, name: '捷克', en: 'Czech', tel: '420' },
          { id: 43, name: '古巴', en: 'Cuba', tel: '53' },
          { id: 44, name: '塞浦路斯', en: 'Cyprus', tel: '357' },
          { id: 45, name: '捷克', en: 'CzechRepublic', tel: '420' }
        ]
    },
    {
      groupName: 'D',
      users:
        [
          { id: 46, name: '吉布提', en: 'Djibouti', tel: '253' },
          { id: 47, name: '丹麦', en: 'Denmark', tel: '45' },
          { id: 48, name: '多米尼加共和国', en: 'DominicaRep.', tel: '1890' }
        ]
    },
    {
      groupName: 'E',
      users:
        [
          { id: 49, name: '厄瓜多尔', en: 'Ecuador', tel: '593' },
          { id: 50, name: '爱沙尼亚', en: 'Estonia', tel: '372' },
          { id: 51, name: '埃及', en: 'Egypt', tel: '20' },
          { id: 52, name: '埃塞俄比亚', en: 'Ethiopia', tel: '251' }
        ]
    },
    {
      groupName: 'F',
      users:
        [
          { id: 53, name: '芬兰', en: 'Finland', tel: '358' },
          { id: 54, name: '斐济', en: 'Fiji', tel: '679' },
          { id: 55, name: '法属圭亚那', en: 'FrenchGuiana', tel: '594' },
          { id: 56, name: '法属玻利尼西亚', en: 'FrenchPolynesia', tel: '689' },
          { id: 57, name: '法国', en: 'France', tel: '33' }
        ]
    },
    {
      groupName: 'G',
      users:
        [
          { id: 58, name: '加蓬', en: 'Gabon', tel: '241' },
          { id: 59, name: '格林纳达', en: 'Grenada', tel: '1809' },
          { id: 60, name: '格鲁吉亚', en: 'Georgia', tel: '995' },
          { id: 61, name: '加纳', en: 'Ghana', tel: '233' },
          { id: 62, name: '直布罗陀', en: 'Gibraltar', tel: '350' },
          { id: 63, name: '冈比亚', en: 'Gambia', tel: '220' },
          { id: 64, name: '几内亚', en: 'Guinea', tel: '224' },
          { id: 65, name: '希腊', en: 'Greece', tel: '30' },
          { id: 66, name: '危地马拉', en: 'Guatemala', tel: '502' },
          { id: 67, name: '关岛', en: 'Guam', tel: '1671' },
          { id: 68, name: '德国', en: 'Germany', tel: '49' },
          { id: 69, name: '圭亚那', en: 'Guyana', tel: '592' }
        ]
    },
    {
      groupName: 'H',
      users:
        [
          { id: 70, name: '香港特别行政区', en: 'Hongkong', tel: '852' },
          { id: 71, name: '洪都拉斯', en: 'Honduras', tel: '504' },
          { id: 72, name: '海地', en: 'Haiti', tel: '509' },
          { id: 73, name: '匈牙利', en: 'Hungary', tel: '36' }
        ]
    },
    {
      groupName: 'I',
      users:
        [
          { id: 74, name: '印度尼西亚', en: 'Indonesia', tel: '62' },
          { id: 75, name: '爱尔兰', en: 'Ireland', tel: '353' },
          { id: 76, name: '以色列', en: 'Israel', tel: '972' },
          { id: 77, name: '印度', en: 'India', tel: '91' },
          { id: 78, name: '伊拉克', en: 'Iraq', tel: '964' },
          { id: 79, name: '伊朗', en: 'Iran', tel: '98' },
          { id: 80, name: '冰岛', en: 'Iceland', tel: '354' },
          { id: 81, name: '意大利', en: 'Italy', tel: '39' },
          { id: 82, name: '科特迪瓦', en: 'IvoryCoast', tel: '225' }
        ]
    },
    {
      groupName: 'J',
      users:
        [
          { id: 83, name: '牙买加', en: 'Jamaica', tel: '1876' },
          { id: 84, name: '约旦', en: 'Jordan', tel: '962' },
          { id: 85, name: '日本', en: 'Japan', tel: '81' }
        ]
    },
    {
      groupName: 'K',
      users:
        [
          { id: 86, name: '肯尼亚', en: 'Kenya', tel: '254' },
          { id: 87, name: '吉尔吉斯坦', en: 'Kyrgyzstan', tel: '331' },
          { id: 88, name: '柬埔寨', en: 'Kampuchea(Cambodia)', tel: '855' },
          { id: 89, name: '韩国', en: 'Korea', tel: '82' },
          { id: 90, name: '科威特', en: 'Kuwait', tel: '965' },
          { id: 91, name: '哈萨克斯坦', en: 'Kazakstan', tel: '327' }
        ]
    },
    {
      groupName: 'L',
      users:
        [
          { id: 92, name: '老挝', en: 'Laos', tel: '856' },
          { id: 93, name: '黎巴嫩', en: 'Lebanon', tel: '961' },
          { id: 94, name: '列支敦士登', en: 'Liechtenstein', tel: '423' },
          { id: 95, name: '利比里亚', en: 'Liberia', tel: '231' },
          { id: 96, name: '莱索托', en: 'Lesotho', tel: '266' },
          { id: 97, name: '立陶宛', en: 'Lithuania', tel: '370' },
          { id: 98, name: '卢森堡', en: 'Luxembourg', tel: '352' },
          { id: 99, name: '拉脱维亚', en: 'Latvia', tel: '371' },
          { id: 100, name: '利比亚', en: 'Libya', tel: '218' }
        ]
    },
    {
      groupName: 'M',
      users:
        [
          { id: 101, name: '摩洛哥', en: 'Morocco', tel: '212' },
          { id: 102, name: '摩纳哥', en: 'Monaco', tel: '377' },
          { id: 103, name: '摩尔多瓦', en: 'Moldova,Republicof', tel: '373' },
          { id: 104, name: '马达加斯加', en: 'Madagascar', tel: '261' },
          { id: 105, name: '马里', en: 'Mali', tel: '223' },
          { id: 106, name: '蒙古', en: 'Mongolia', tel: '976' },
          { id: 107, name: '澳门', en: 'Macao', tel: '853' },
          { id: 108, name: '蒙特塞拉特岛', en: 'MontserratIs', tel: '1664' },
          { id: 109, name: '马耳他', en: 'Malta', tel: '356' },
          { id: 110, name: '马里亚那群岛', en: 'MarianaIs', tel: '1670' },
          { id: 111, name: '马提尼克', en: 'Martinique', tel: '596' },
          { id: 112, name: '毛里求斯', en: 'Mauritius', tel: '230' },
          { id: 113, name: '马尔代夫', en: 'Maldives', tel: '960' },
          { id: 114, name: '马拉维', en: 'Malawi', tel: '265' },
          { id: 115, name: '墨西哥', en: 'Mexico', tel: '52' },
          { id: 116, name: '马来西亚', en: 'Malaysia', tel: '60' },
          { id: 117, name: '莫桑比克', en: 'Mozambique', tel: '258' }
        ]
    },
    {
      groupName: 'N',
      users:
        [
          { id: 118, name: '纳米比亚', en: 'Namibia', tel: '264' },
          { id: 119, short: 'NE', name: '尼日尔', en: 'Niger', tel: '977' },
          { id: 120, short: 'NG', name: '尼日利亚', en: 'Nigeria', tel: '234' },
          { id: 121, name: '朝鲜', en: 'NorthKorea', tel: '850' },
          { id: 122, name: '尼加拉瓜', en: 'Nicaragua', tel: '505' },
          { id: 123, name: '荷兰', en: 'Netherlands', tel: '31' },
          { id: 124, name: '挪威', en: 'Norway', tel: '47' },
          { id: 125, name: '尼泊尔', en: 'Nepal', tel: '977' },
          { id: 126, name: '荷属安的列斯', en: 'NetheriandsAntilles', tel: '599' },
          { id: 127, name: '瑙鲁', en: 'Nauru', tel: '674' },
          { id: 128, name: '新西兰', en: 'NewZealand', tel: '64' }
        ]
    },
    {
      groupName: 'O',
      users:
        [
          { id: 129, name: '阿曼', en: 'Oman', tel: '968' }
        ]
    },
    {
      groupName: 'P',
      users:
        [
          { id: 130, name: '巴拿马', en: 'Panama', tel: '507' },
          { id: 131, name: '秘鲁', en: 'Peru', tel: '51' },
          { id: 132, name: '巴勒斯坦', en: 'Palestine', tel: '970' },
          { id: 133, name: '巴布亚新几内亚', en: 'PapuaNewCuinea', tel: '675' },
          { id: 134, name: '菲律宾', en: 'Philippines', tel: '63' },
          { id: 135, name: '巴基斯坦', en: 'Pakistan', tel: '92' },
          { id: 136, name: '波兰', en: 'Poland', tel: '48' },
          { id: 137, name: '波多黎各', en: 'PuertoRico', tel: '1787' },
          { id: 138, name: '葡萄牙', en: 'Portugal', tel: '351' },
          { id: 139, name: '巴拉圭', en: 'Paraguay', tel: '595' }
        ]
    },
    {
      groupName: 'Q',
      users:
        [
          { id: 140, name: '卡塔尔', en: 'Qatar', tel: '974' }
        ]
    },
    {
      groupName: 'R',
      users:
        [
          { id: 141, name: '留尼旺', en: 'Reunion', tel: '262' },
          { id: 142, name: '罗马尼亚', en: 'Romania', tel: '40' },
          { id: 143, name: '科特迪瓦共和国', en: 'RepublicofIvoryCoast', tel: '225' },
          { id: 144, name: '俄罗斯', en: 'Russia', tel: '7' }
        ]
    },
    {
      groupName: 'S',
      users:
        [
          { id: 145, name: '沙特阿拉伯', en: 'SaudiArabia', tel: '966' },
          { id: 146, name: '圣卢西亚', en: 'St.Lucia', tel: '1758' },
          { id: 147, name: '西班牙', en: 'Spain', tel: '34' },
          { id: 148, name: '瑞士', en: 'Switzerland', tel: '41' },
          { id: 149, name: '斯里兰卡', en: 'SriLanka', tel: '94' },
          { id: 150, name: '所罗门群岛', en: 'SolomonIs', tel: '677' },
          { id: 151, name: '塞舌尔', en: 'Seychelles', tel: '248' },
          { id: 152, name: '苏丹', en: 'Sudan', tel: '249' },
          { id: 153, name: '瑞典', en: 'Sweden', tel: '46' },
          { id: 154, name: '新加坡', en: 'Singapore', tel: '65' },
          { id: 155, name: '斯洛文尼亚', en: 'Slovenia', tel: '386' },
          { id: 156, name: '斯洛伐克', en: 'Slovakia', tel: '421' },
          { id: 157, name: '塞拉利昂', en: 'SierraLeone', tel: '232' },
          { id: 158, name: '萨尔瓦多', en: 'EISalvador', tel: '503' },
          { id: 159, name: '圣马力诺', en: 'SanMarino', tel: '378' },
          { id: 160, name: '东萨摩亚(美)', en: 'SamoaEastern', tel: '684' },
          { id: 161, name: '西萨摩亚', en: 'SanMarino ', tel: '685' },
          { id: 162, name: '塞内加尔', en: 'Senegal', tel: '221' },
          { id: 163, name: '索马里', en: 'Somali', tel: '252' },
          { id: 164, name: '苏里南', en: 'Suriname', tel: '597' },
          { id: 165, name: '圣多美和普林西比', en: 'SaoTomeandPrincipe', tel: '239' },
          { id: 166, name: '叙利亚', en: 'Syria', tel: '963' },
          { id: 167, name: '斯威士兰', en: 'Swaziland', tel: '268' },
          { id: 168, name: '圣文森特岛', en: 'SaintVincent', tel: '1784' },
          { id: 169, name: '南非', en: 'SouthAfrica', tel: '27' }
        ]
    },
    {
      groupName: 'T',
      users:
        [
          { id: 170, name: '多哥', en: 'Togo', tel: '228' },
          { id: 171, name: '泰国', en: 'Thailand', tel: '66' },
          { id: 172, name: '塔吉克斯坦', en: 'Tajikstan', tel: '992' },
          { id: 173, name: '土库曼斯坦', en: 'Turkmenistan', tel: '993' },
          { id: 174, name: '突尼斯', en: 'Tunisia', tel: '216' },
          { id: 175, name: '汤加', en: 'Tonga', tel: '676' },
          { id: 176, name: '土耳其', en: 'Turkey', tel: '90' },
          { id: 177, name: '特立尼达和多巴哥', en: 'TrinteladandTobago', tel: '1809' },
          { id: 178, name: '台湾省', en: 'Taiwan', tel: '886' },
          { id: 179, name: '坦桑尼亚', en: 'Tanzania', tel: '255' }
        ]
    },
    {
      groupName: 'U',
      users:
        [
          { id: 180, name: '乌克兰', en: 'Ukraine', tel: '380' },
          { id: 181, name: '乌干达', en: 'Uganda', tel: '256' },
          { id: 182, name: '美国', en: 'UnitedStatesofAmerica', tel: '1' },
          { id: 183, name: '英国', en: 'UnitedKiongdom', tel: '44' },
          { id: 184, name: '乌拉圭', en: 'Uruguay', tel: '598' },
          { id: 185, name: '乌兹别克斯坦', en: 'Uzbekistan', tel: '233' },
          { id: 186, name: '阿拉伯联合酋长国', en: 'United Arab Emirates', tel: '971' }
        ]
    },
    {
      groupName: 'V',
      users:
        [
          { id: 186, name: '委内瑞拉', en: 'Venezuela', tel: '58' },
          { id: 187, name: '越南', en: 'Vietnam', tel: '84' }
        ]
    },
    {
      groupName: 'Y',
      users:
        [
          { id: 188, name: '也门', en: 'Yemen', tel: '967' },
          { id: 189, name: '南斯拉夫', en: 'Yugoslavia', tel: '381' }
        ]
    },
    {
      groupName: 'Z',
      users:
        [
          { id: 190, name: '赞比亚', en: 'Zambia', tel: '260' },
          { id: 191, name: '扎伊尔', en: 'Zaire', tel: '243' },
          { id: 192, name: '津巴布韦', en: 'Zimbabwe', tel: '263' }
        ]
    }
    ]
  },
  backTabBar: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  GoToindex:function(){
    let userphone=this.data.userphone
    let userImgCode=this.data.userImgCode
    let userCode=this.data.userCode
    if (userphone==''){
      wx.showToast({
        title: '请输入手机号',
      })
    } else if (userImgCode==''){
      wx.showToast({
        title: '请输入图片验证码',
      })
    } else if (userCode==''){
      wx.showToast({
        title: '请输入短息验证码',
      })
    }else{
      wx.showToast({
        title: '登录成功',
      });
      setTimeout(function () {
        wx.switchTab({
          url: '../index/index',
        })
      }, 1000)
    }
  },
  GoToRegistrationPage:function(){
    wx.navigateTo({
      url: '../RegistrationPage/RegistrationPage',
    })
  },
  phone:function(e){
    let that=this
    that.setData({
      userphone:e.detail.value
    })
  },
  ImgCode:function(e){
    let that=this
    that.setData({
      userImgCode:e.detail.value
    })
  },
  Code:function(e){
    let that=this
    that.setData({
      userCode:e.detail.value
    })
  },
  sendmessg: function (e) {
    var timer = 1;
    if (timer == 1) {
      timer = 0
      var that = this
      var time = 60
      that.setData({
        sendmsg: "sendmsgafter",
      })
      var inter = setInterval(function () {
        that.setData({
          getmsg: time + "s后重新获取",
        })
        time--
        if (time < 0) {
          timer = 1
          clearInterval(inter)
          that.setData({
            sendmsg: "sendmsg",
            getmsg: "获取短信验证码",
          })
        }
      }, 1000)
    }
  },
  bbbb:function(e){
    console.log(e)
    let id=e.currentTarget.id
    console.log(id)
    
    let that = this
    let tel = that.data.groups[id].users[that.data.sd].tel
    console.log(tel)
    this.setData({
      CountryNumberValue:tel
    })
  },
  aaaa: function (e) {
    console.log(e)
    let idtwo = e.currentTarget.id
    console.log(idtwo)
    this.setData({
      sd:idtwo
    })
    this.hideModal();
  },
  touchmovefn: function (e) { // 右侧字母检索
    //console.log(e.changedTouches)
    var letterIndex = e.changedTouches['0'].pageY / 20
    // console.log(e)
    // console.log(letterIndex)
    var index = parseInt(letterIndex)
    //console.log(index)
    var letter = this.data.zimu[index]
    //console.log(letter)
    this.setData({
      scrollIntoId: letter
    })
    wx.showToast({
      title: letter
    })
  },
  touchstartfn: function (e) {
    //console.log(e.target.id)
    console.log(e);
    var letter = e.target.dataset.id
    this.setData({
      scrollIntoId: letter
    })
    wx.showToast({
      title: letter
    })
  },
  //点击我显示底部弹出框
  clickme: function () {
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