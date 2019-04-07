<template>
  <div id="login">
    <transition name="fade">
    <div class="login-window" v-if="loginShow">
        <img class="login-logo" src="../../assets/logo.png">
        <div class="form-group">
            <span class="input-group-addon login-span">用户</span>
            <input type="text" class="form-control login-input"  placeholder="请输入管理账号" v-model="username">
        </div>
        <div class="form-group">
            <span class="input-group-addon login-span">密码 </span>
            <input type="password" class="form-control login-input" placeholder="请输入密码" v-model="password">
        </div>
        <div class="checkbox">
            <label>
            <input type="checkbox" class="login-checkbox">
            <span>记住我</span>
            </label>
        </div>
        <button :disabled="disablebtn" class="btn btn-primary login-signin" @click="login">{{loginText}}</button>
    </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
      return{
        loginShow: false,
        username:'',
        password:'',
        disablebtn:false,
        loginText:"登录"
      }
  },
  methods:{
      showTime:function(){
        setTimeout(this.loginShowChange(),1000)
      },
      loginShowChange: function(){
          this.loginShow=true;
      },
      login:function(){
           var _this = this;
            this.disablebtn = true;
            this.loginText = "登录中...";
            //this.$reqs就访问到了main.js中绑定的axios
            this.$reqs.post("/users/login",{
                    username:this.username,
                    password:this.password
            }).then(function(result){ 
                //成功
                console.log(result)
                if(result.data.err){
                    alert(result.data.err);
                }else{
                    _this.$router.push({path:'/backIndex/indexContent'});
                }
                _this.disablebtn = false;
                _this.loginText = "登录";
                
            }).catch(function (error) {
                //失败
                _this.disablebtn = false;
                _this.loginText = "登录"
            });
      }
  },
  mounted() {
      this.showTime();
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .fade-enter-active, .fade-leave-active
        transition opacity 4s
    .fade-enter, .fade-leave-to 
        opacity 0
    .login-window
        width 530px
        height 400px
        background rgba(0,5,5,0.3 )
        border-radius 19px
        margin 50vh auto 0
        color #ffffff
        transform translateY(-55%)
        box-shadow 5px 2px 10px rgba(255,255,255,0.3)
        .login-logo
            display block
            margin 0 auto
            width 50%
            border-radius 10px
        .form-group
            width 100%
            margin-top 30px
            .login-span
                display inline-block
                width 10%
                height 40px
                text-align left
            .login-input
                display inline-block
                width 60%
                background rgba(255,255,255,0.8)
        .checkbox
            label
                width 70%
                margin auto
                text-align right
                display inline-block
                .login-checkbox
                    vertical-align middle
                    margin-right 10px
        .login-signin
            width 70%
            margin-top 10px
</style>
