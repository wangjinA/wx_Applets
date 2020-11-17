// pages/mallList/mallList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
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