// pages/melon/melon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    fruitsObj: {},
    quantity: "1",
    num: 0
  },

  /**
   * 点击增加商品数量
   */
  addNum: function(e){
    // 1. 获取每次添加的数量
    let quantity = this.data.quantity;
    // 2. 数量加1
    ++quantity
    // 3. 将值设置 回 data 中
    this.setData({
      quantity
    })
  },

   /**
   * 点击加入购物车
   */
  handleAddProduct: function(e){
    // 从 localStorage 里面获取原有的该商品的数据
    let carts = wx.getStorageSync("carts")||[];
    // 获取现在商品的id
    let id = e.currentTarget.dataset.id;
    console.log(e)
    //获取 该 id 在 carts 中的位置
    let index = carts.findIndex(function(e){ return e.id === id})
    if(index === -1){
      // 如果该商品在本地缓存中还没有存在
      let cartsItem = {
        id:id,
        num: this.data.quantity,
        checked: true,
        data:this.data.fruitsObj
      };
      carts.push(cartsItem);
      this.setData({
        num: cartsItem.num
      })
    }else{
      //  缓存中现有的小车的数量+每次加到小车中的数量 
      carts[index].num = Number(carts[index].num) + Number(this.data.quantity);
      this.setData({
        num: carts[index].num
      })
    }
    wx.setStorageSync('carts', carts)
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
    let num = 0;
    let carts = wx.getStorageSync('carts')||[];
    let index = carts.findIndex(function(e,i){
      return e.id === options.id
    })
    if(index != -1){
      num = carts[index].num;
    }
    let fruits = require("../../data/details-data.js")
    let fruitsObj = fruits[options.id]
    this.setData({
      fruitsObj,
      num
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