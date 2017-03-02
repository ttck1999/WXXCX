var course = require( "../../util/course" );
// pages/course/course.js
Page({
  data:{
    courses:[],
    mainList:[],
    cLass : '',
    coursesInd : 0
  },
  onLoad:function(options){
    this.setData({
      courses  : course.list,
      mainList : course.main[4]
    })
    
  },
  changeList (e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      mainList  : course.main[index],
      coursesInd : index
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