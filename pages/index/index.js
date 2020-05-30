//index.js

let fruits = require("../../data/newest.js")["newest"];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitsObj: fruits,
    swiper_list: ['/image/b1.jpg', '/image/b2.jpg', '/image/b3.jpg'],
    theme_list: [{
        id: "guowei",
        image_url: "/image/s1.png"
      },
      {
        id: "dianxin",
        image_url: "/image/s2.png"
      },
      {
        id: "chaohuo",
        image_url: "/image/s3.png"
      }
    ],
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