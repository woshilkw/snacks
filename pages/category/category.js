// pages/category/category.js
let fruits = require("../../data/cate-detail.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitsObj: fruits,
    currentData: 0
  },

  /**
   *  获取当前滑块的index(下标) 
   */
  bindchange: function(e){
    let that = this;
    console.log(e.detail.current);
    that.setData({
      currentData: e.detail.current,
    });
  },

  /**
   *  点击切换滑块 index(下标)赋值 
   */
  checkCurrent: function(e){
    let that = this;
    console.log(that.data.currentData);
    console.log(e.target.dataset.current);
    if(that.data.currentData === e.target.dataset.current){
      return false;
    }else{
      that.setData({
        currentData: e.target.dataset.current
      });
    }
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