var app = getApp()
Page({
  data: {
      movie : 0,
      user  : false, 
      open  :  "open",
      open1 : "open",
      cLass : "",
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
  onLoad: function () {
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
  mov (e){
      var index = e.currentTarget.dataset.index;

      this.setData({
          movie : index
      })
  },
  op (){
      open = this.data.open.indexOf("active") !=-1?'open':'open active';
      this.setData({
          open : open
      })
  },
  op1 (){
      open = this.data.open1.indexOf("active") !=-1?'open':'open active';
      this.setData({
          open1 : open
      })
  },
  shows (){
      this.setData({
          cLass : "animate"
      })
  },
  hide (){
      this.setData({
          cLass : ''
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
  exit (){
      wx.setStorage({
        key:"user",
        data:""
      })
      this.setData({
          user : ''
      }) 
  }
})
