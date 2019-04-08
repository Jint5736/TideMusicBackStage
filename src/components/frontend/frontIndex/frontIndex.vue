<template>
  <div id="frontIndex">
    <div class="topBarBackground">
      <div class="topBar">
        <div class="topBar-logo"></div>
        <div class="topBar-tab">
          <div class="tab-item">
            <router-link  class="tab-initem" to="/frontend/frontIndex/discoverMusic"  active-class="active">发现音乐<sub class="tab-triangle" >&nbsp;</sub></router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/frontend/frontIndex/myMusic" active-class="active">我的音乐<sub class="tab-triangle">&nbsp;</sub></router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/frontend/frontIndex/musician" active-class="active">音乐人<sub class="tab-triangle">&nbsp;</sub></router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/frontend/frontIndex/vip" active-class="active">vip<sub class="tab-triangle">&nbsp;</sub></router-link>
          </div>
        </div>
        <div class="topBar-input-user">
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'frontIndex',
  components: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  * 
  -webkit-box-sizing: content-box
  -moz-box-sizing: content-box
  box-sizing: content-box

  *:before
  *:after 
    -webkit-box-sizing: content-box
    -moz-box-sizing:content-box
    box-sizing: content-box

  .topBarBackground
    width 100%
    height 70px
    background #242424
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box
    border-bottom 5px solid #c20c0c
    .topBar
      max-width 1100px
      min-width 750px
      height 69px
      margin 0 auto
      border-bottom 1px solid #242424
      background #242424
      font-size 0
      display flex
      .topBar-logo
        width 176px
        height 69px
        background url('./logo.png') no-repeat
        background-size cover
      .topBar-tab
        display flex
        flex 1
        .tab-item
          font-size 0px
          flex 1
          text-align center
          position relative
          .tab-initem
            display block
            width 100%
            height 100%
            font-size 14px
            background #242424
            color #cccccc
            text-align center
            line-height 69px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            &.active
              background #000000
              color #ffffff
              .tab-triangle
                display:block
            .tab-triangle
              display: none
              position: absolute
              left: 50%
              top: 64px
              width: 12px
              height: 7px
              margin-left: -6px
              overflow: hidden
              background url('./topbar.png')  no-repeat
              background-position: -226px 0
              z-index 200
              vertical-align: sub;
              font-size: smaller
          .tab-initem:hover
            background #000000
            color #ffffff
      .topBar-input-user
        width 470px
        height 100%
</style>
