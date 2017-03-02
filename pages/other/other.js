// pages/other/other.js
Page({
  data:{
    navActive : 0,
    cLass : ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  back (){
    console.log(1)
    wx.switchTab({
      url : "../index/index"
    })
  },
  show (){
   console.log(1)
      this.setData({
          cLass : "animate"
      })
  },
  hide (){
      this.setData({
          cLass : ''
      })
  }
})