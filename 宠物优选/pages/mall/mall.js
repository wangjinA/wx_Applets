Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/mallbanner1.png',
      '../../image/mallbanner2.png',
      '../../image/mallbanner3.png',
      '../../image/mallbanner4.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 400,
    navList: [
      {
        query: 'title=主粮',
        name: '主粮',
        icon: 'icon-ziyuan'
      }, {
        query: 'title=零食',
        name: '零食',
        icon: 'icon-gutou'
      }, {
        query: 'title=保健品',
        name: '保健品',
        icon: 'icon-yao'
      }, {
        query: 'title=用品',
        name: '用品',
        icon: 'icon-caigouriyongpin'
      }
    ],
    mallTitle: [{
      name: '主粮',
      query: 'title=主粮'
    }, {
      name: '零食',
      query: 'title=零食',
    }, {
      name: '保健品',
      query: 'title=保健品',
    }, {
      name: '用品',
      query: 'title=用品',
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