

//  showModal
let asyncShowModal = function asyncShowModal(content){
  return new Promise(function(resolve,reject){
      wx.showModal({
        content: content,
        success:function(res){
          if(res.confirm){
            resolve(res)
            console.log("成功了")
          }else{
            reject(res)
            console.log("失败了")
          }
        }
      })
  })
}
// chooseAddress
// https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
let asyncChooseAddress = function asyncChooseAddress(){
  return new Promise(function(resolve,reject){
    wx.chooseAddress({
        success:function(res){
            resolve(res)
        },
        fail:function(err){
          reject(err)
        }
      })
  })
}

// 导出
export {
asyncShowModal, asyncChooseAddress
}