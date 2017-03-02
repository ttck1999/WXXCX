var reg = /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;

Page({
  data:{
    validation : [],
    user : "",
    error : 'error',
    userver : false,
    disabled : true,
    password: "",
    passwordver : false
  },
  onLoad (){
    var that = this;
    wx.getStorage({
      key: 'login',
      success (res) {
          that.setData({
              validation : res.data
          })
      }
    })
    
  },
  login (){
    var login = this.data.validation,
        that = this,
        user  = this.data.user,
        password = this.data.password,
        validation = false;

    for( var i =0;i< login.length;i++ ){
      if( login[i].user == user ){
        if( login[i].password == password ){
          validation = true
        }
      }
    }

    if( validation ){
      wx.setStorage({
        key : "user",
        data : user
      })
      wx.switchTab({
        url: '../mystudy/mystudy'
      })
      
    }else{
      that.setData({
        error : ""
      })
      setTimeout(function(){
        that.setData({
          error : "error"
        })
      },600)
    }
    


  },
  bindKeyInput (e){

    this.setData({
      user: e.detail.value,
      userver : reg.test(e.detail.value)
    })
    
  },
  bindpassword (e){

    var password = e.detail.value;
    this.setData({
      password: password,
      passwordver : password
    })
    
    if( this.data.userver && this.data.passwordver ){
      this.setData({
        disabled : false
      })
    }
  },
  watch (){
    console.log(1)
  }
})