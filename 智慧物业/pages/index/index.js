Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/banner1.png',
      '../../image/banner1.png',
      '../../image/banner1.png',
      '../../image/banner1.png',
    ],
    navList: [
      {
        url: '../repair/repair',
        name: '小区报修',
        icon: '../../image/xqbx.png'
      }, {
        url: '../pay/pay',
        name: '物业缴费',
        icon: '../../image/wyjf.png'
      }, {
        url: '../payNotice/payNotice',
        name: '缴费通知',
        icon: '../../image/jftz.png'
      }, {
        url: 'title=用品',
        name: '个人中心',
        icon: '../../image/grzx.png'
      }
    ],
    aticleList: [{
      img: '../../image/banner1.png',
      title: '全心全意，为了您的安居乐业',
      tag: '小区动态'
    }, {
      img: '../../image/banner1.png',
      title: '全心全意，为了您的安居乐业',
      tag: '小区动态'
    }, {
      img: '../../image/banner1.png',
      title: '全心全意，为了您的安居乐业',
      tag: '小区动态'
    }],
    notice: [{
      content: '明日预计大雨，路面湿滑，各位业主出门注意安全'
    }, {
      content: '周末3栋电梯定时保养，3栋业主请悉知'
    }, {
      content: '未缴清物业费的业主请及时缴费，以免给您带来不必要的麻烦'
    }],
    mallTitle: [{
      name: '新闻资讯',
      query: 'title=主粮'
    }],
    mallList: [[
      {
        url: '../../image/gl1.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl2.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl3.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl4.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }
    ], [
      {
        url: '../../image/petMall1.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/petMall2.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/petMall3.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/petMall4.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }
    ], [
      {
        url: '../../image/petMall5.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/petMall2.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl3.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl4.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }
    ], [
      {
        url: '../../image/gl1.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl2.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl3.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }, {
        url: '../../image/gl4.png',
        link: '../mallDetail/mallDetail',
        name: '皇家 4-12月幼狗粮2kg',
        tips: '满足小狗发育需要',
        newPrice: '¥100',
        oldPrice: '¥128'
      }
    ]]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
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