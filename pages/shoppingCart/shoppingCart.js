import {asyncShowModal} from "../../asyncUtil/asyncUtil.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,
    allCheck: true
  },

  

  // 全选事件
  handleAllCheck: function(){
    //获取 购物小车的数据
    let carts = this.data.carts;
    // 遍历数组将商品项选为true
    carts.map(function(e,i){
      if(!e.checked){
        e.checked = !e.checked
      }
    })
    this.saveCart(carts)
  },

  // 购物小车项勾选事件
  handleItemCheck: function(e){
    // 点击项的所在位置
    let index = e.currentTarget.dataset.index;
    // 获取购物小车的数据
    let carts = this.data.carts;
    // 修改小车项checked原先只 取反
    carts[index].checked = !carts[index].checked;
    this.saveCart(carts)
  },

  // 购物小车的逻辑
  saveCart(carts){
    // 1 计算总价
    let totalPrice = 0;
    carts.forEach(function(e,i){
      if(e.checked){
        totalPrice += e.num * e.data.price
      }
    });
    totalPrice.toFixed(2);
    console.log("savaCart1"+totalPrice.toFixed(2));
    // 2 保存到data中
    this.setData({
      carts,
      totalPrice
    })
    console.log("savaCart2:"+totalPrice)
    // 3 保存到 localStorage里面
    wx.setStorageSync('carts', carts)
  },

  // 添加数量
  add(e){
    //获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 点击+,该商品数量加1
    carts[index].num = Number(carts[index].num) + 1;
    // 保存小车数据
    this.saveCart(carts);
  },

  // 减少商品数量
  sub: async function(e){
    // 获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 如果减一之后 商品数量为0 那么就要从小车删除该商品
    if(carts[index].num - 1 === 0){
      // 通过回调实现结束 
      // 通过promise实现开始
      let res = await asyncShowModal("你确定要删除该商品吗?")
      console.log(res)
      if(res.confirm){
        carts.splice(index,1);
      }
      // 通过promise实现结束
    }else{
      carts[index].num--;
    }
    // 保存小车数据
    this.saveCart(carts);
  },

  // 移出商品项目
  removeItem(e){
    // 获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 移除该商品项
    carts.splice(index,1);
    this.saveCart(carts);
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
    // 1. 从本地缓存中 加载 购物小车数据
    let carts = wx.getStorageSync("carts") || [];
    // 2. 计算总价
    let totalPrice = 0;
    carts.forEach(function(e,i){
      if(e.checked){
        totalPrice += e.num * e.data.price;
      }
    })
    totalPrice.toFixed(2)
    console.log("onShow:"+totalPrice.toFixed(2))
    //3. 设置 到 data 中
    this.setData({
      // carts: carts
      carts, totalPrice
    })
    console.log("onShow:"+totalPrice)
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