import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import backIndex from '@/components/backIndex/backIndex'
import musicList from '@/components/musicList/musicList'
import musicEdit from '@/components/musicEdit/musicEdit'
import indexContent from '@/components/indexContent/indexContent'
import adminList from '@/components/adminList/adminList'
import ordinarytUserList from '@/components/ordinarytUserList/ordinarytUserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/backIndex',
      name: 'backIndex',
      component: backIndex,
      children:[
        {
          path: 'musicList', //音乐列表
            component: musicList
        },{
          path: 'musicEdit/:sysId', //编辑音乐
            component: musicEdit
        },{
          path: 'indexContent', //首页统计
            component: indexContent
        },{
          path: 'adminList', //后台用户
            component: adminList
        },{
          path: 'ordinarytUserList', //学员用户
            component: ordinarytUserList
        },{
           path: '*',           //其他路径都跳转到首页
            redirect: 'indexContent'
        }
    ]
    }
  ]
})
