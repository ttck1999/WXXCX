// pages/mystudy/mystudy.js
Page({
  data:{
    cLass : "",
    user : false,
    login : [
      {
        "name" : "网易",
        "img"  : "../../images/wy.gif"
      },
      {
        "name" : "QQ",
        "img"  : "../../images/qq.gif"
      },
      {
        "name" : "微信",
        "img"  : "../../images/wx.gif"
      },
      {
        "name" : "微博",
        "img"  : "../../images/wb.gif"
      },
      {
        "name" : "人人",
        "img"  : "../../images/rr.gif"
      }
    ]
  },
  onLoad: function (options) {
    console.log( options )
    console.log('jinla21')
    var that = this;
    wx.getStorage({
      key: 'user',
      success: function(res) {
          that.setData({
            user : res.data
          })
          console.log(res.data)
      } 
    })
  },
  onShow (){
    console.log('jinlai1')
    var that = this;
    wx.getStorage({
      key: 'user',
      success: function(res) {
          that.setData({
            user : res.data
          })
          console.log(res.data)
      } 
    })
  },
  setting (){
    wx.navigateTo({
      url : "../setting/setting"
    })
  },
  login (){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  register (){
    wx.navigateTo({
      url: '../register/register'
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
    },
    learning (){
      wx.switchTab({
        url : "../index/index"
      })
    }
})