
var data = require( "../../util/data" );
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    banner:{
      bannerimg:[]
    },
    bannerCurrindex : 0,
    nav:[],
    bg:"",
    cLass : '',
    speaicl:[],
    ad:[],
    course_grp:[],
    best : [],
    main: {},
    moreCourses:{
      title:"已经到底，查看更多课程 >",
      url:"../course/course"
      },
    userInfo: {}
  },
  /*点击banner上的圆选择相应的图片 */
  dots:function(e){
    this.setData({
       bannerCurrindex:e.detail.current
    });
  },
  onLoad: function () {
    var that = this;
    var bannerArr = data.banner,
        navArr = data.nav,
        bg = data.bg,
        courseGrp = data.free_good_lesson,
        bestArr = data.best_seller,
        main = data.main;
    that.setData({
        banner:{
          bannerimg:bannerArr
        },
        nav:navArr,
        bg:bg,
        course_grp:courseGrp,
        best:bestArr,
        speaicl:data.Special_recommendation,
        main:main
      });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    
     wx.setStorage({
      key  : "login",
      data : [
        {
          user : "15011199029",
          password : "loveTT1314"
        }
      ]
    })

  },
  urlAcc (){
    wx.switchTab({
      url : "../course/course",
      data : "ok"
    })
  },
  show (){
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
