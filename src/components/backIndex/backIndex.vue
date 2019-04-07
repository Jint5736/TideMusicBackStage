<template>
  <div class="backlogin">
    <div class="header">
            <div class="search_box" :class="{search_box_fouce:search_box_fouce}">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input @focus="focusFn" @blur="blurFn" type="text" name="" id="" value="" placeholder="搜索 " />
            </div>
            <div class="handler">
                <div class="more" @click="toggleSlide">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    <ul :class="{showul:showExit}">
                        <li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>退出</a></li>
                        <li><a href="javascript:;" @click="">修改密码</a></li>
                        <li><a href="javascript:;">意见反馈</a></li>
                    </ul>
                </div>
                <img src="../../assets/images/teacherimg01.png" alt="" />
            </div>
        </div>
        
        <!--侧面导航-->
        <div class="sidenav_box">
            <img class="logo" src="../../assets/logo2.png" alt="" />
            <ul class="sidenav">
                <li class="now">
                    <router-link to="/backIndex/indexContent">
                        <i class="fa fa-home" aria-hidden="true"><span>网站首页</span></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/backIndex/adminList">
                        <i class="fa fa-user-o" aria-hidden="true"><span>后台人员</span></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/backIndex/ordinarytUserList">
                        <i class="fa fa-user-circle-o" aria-hidden="true"><span>用户管理</span></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/backIndex/musicList">
                        <i class="fa fa-book" aria-hidden="true"><span>歌曲管理</span></i>
                        <span></span>
                    </router-link>
                </li>
            </ul>
        </div>
        
        <div class="content">
            <ul class="breadcrumb">
                <li><a href="#/backIndex/">首页</a></li>
                <li>{{pageTitle}}</li>
            </ul>
            <router-view></router-view>
        </div>
        
  </div>
</template>

<script>
    var pageTitleObj = {
        indexContent:"网站首页",
        adminList:"后台人员",
        ordinarytUserList:"用户管理",
        musicList:"歌曲管理",
        musicEdit:"歌曲编辑"
    };
    
    export default {
      name: 'backlogin',
      data () {
        return {
                    search_box_fouce:false,
                    showExit:false,
                    pageTitle: pageTitleObj[ this.$route.path.substr( this.$route.path.lastIndexOf("/")+1 ) ] || "网站首页"
        }
      },
      methods:{
            focusFn(){  //搜索框获取焦点，添加class
                this.search_box_fouce = true;
            },
            blurFn(){   //搜索框失去焦点，去掉class
                this.search_box_fouce = false;
            },
            toggleSlide(){ //这个是用来显示和隐藏头像旁的退出下拉框
                this.showExit = !this.showExit
            },
            logout(){ //退出系统
                var _this = this;
                this.$reqs.post("/users/logout",{
                    
                }).then(function(result){
                    //成功
                    _this.$router.push({path:'/Login'});
                }).catch(function (error) {
                    //失败
                console.log(error)
              });
            }
        },
        watch:{ //监控路径变化  当路径发送变化的时候，改变面包屑导航的显示
            $route: {
                handler: function (val, oldVal) {
                    var path = val.path;
                    this.pageTitle = pageTitleObj[ path.substr( path.lastIndexOf("/")+1 ) ] || "网站首页";
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul, li{
        list-style: none;
    }
    .header{
        height: 70px;
        box-shadow: 0 1px 5px rgba(13,62,73,0.2) ;
        background:#000;
        margin-left: 130px;
        min-width: 740px;
        border-bottom:#c20c0c 4px solid;
    }
    
    .sidenav_box{
        width: 130px;
        height: 100vh;
        box-shadow: 1px 2px 7px rgba(255,255,255,0.5) ;
        position: fixed;
        left: 0;
        top: 0;
        background:#000;
        z-index: 99;
    }
    .sidenav_box .logo{
        width:80px;
        margin: 20px 0 0 0;
        border-bottom: #2f2f2f 1px dashed;
    }
    .sidenav{
        margin-top: 30px;
    }
    .sidenav li{
        margin-bottom: 20px;
    }
    .sidenav a{
        display: block;
        width: 130px;
        height: 56px;
        margin: 0 auto;
        position: relative;
        cursor: pointer;
        opacity: 0.6;
        transition:all 0.5s ease;
        text-decoration: none;
    }
    .sidenav a i{
        font-size: 19px;
        letter-spacing: 2px;
        line-height: 56px;
        text-align: center;
        display: block;
        color: #fff;
    }
    .sidenav a i>span{
        font-size: 13px;
        vertical-align: top;
        margin-left:10px; 
    }
    .sidenav a:hover{
        background: #c20c0c;
        opacity: 1;
    }
    .sidenav .router-link-active{
        opacity: 1;
        background: #c20c0c;
    }
    
    /*顶部栏*/
    .search_box{
        color: #979fa8;
        padding-top: 20px;
        float: left;
    }
    .search_box i{
        margin: 0 12px 0 70px;
        transition: all 0.5s ease;
    }
    .search_box input{
        display: inline-block;
        height: 30px;
        border:none;
        outline: none;
        background: #fff;
        border-radius:3px; 
        font-size: 14px;
        text-indent: 10px;
    }
    .search_box_fouce i{
        margin-left: 55px;
        color: #2C3D50;
    }
    
    .handler > *{
        float: right;
        margin-right: 20px;
        cursor: pointer;
    }
    .handler .more{
        font-size: 20px;
        color: #fff;
        margin: 15px 30px 0 0;
        position: relative;
    }
    .handler .more ul{
        font-size: 14px;
        position: absolute;
        right: -30px;
        top: 55px;
        width: 120px;
        box-shadow: 0 1px 5px rgba(13,62,73,0.2);
        transition: all 0.3s ease-out;
        height: 0;
        opacity: 0;
        overflow: hidden;
        text-align: center;
    }
    .handler .more .showul{
        height: auto;
        top:55px;
        opacity: 1;
        border-top: 1px solid #979FA8;
    }
    .handler .more a{
        display: block;
        padding: 8px 10px;
        background: rgba(0,0,0,0.8);
        color: #fff;
        text-decoration: none;
    }
    .handler .more a:hover{
        background: #c20c0c;
    }
    .handler > img{
        width: 50px;
        border-radius: 50%;
        margin-top: 5px;
        margin-right: 30px;
    }
    
    .content{
        margin: 0px 0px 0px 130px;
        min-width: 700px;
        min-height: calc(100vh - 70px);
        width: calc(100% - 130px);
        background:rgba(255,255,255,0.5);
    }
    
    .breadcrumb{
        border-radius: 4px;
        background:rgba(255,255,255,0.4);
        width:100%;
        margin-bottom: 0px;
    }
    .breadcrumb > li{
        display: inline-block;
        color: #777777;
    }
    .breadcrumb > li+li:before{
        padding: 0 5px;
        color: #ccc;
        content: "/\00a0";
    }
    .breadcrumb > li > a{
        color: #32475f;
        text-decoration: none;
    }
    .main{
        border-radius: 4px;
        background: #2f2f2f;
    }
</style>