// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'



import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.config.productionTip = false

//导入 muse-ui 的库
/*
import 'muse-components/styles/base.less' // 加载基础的样式
import Paper from 'muse-components/paper/paper'
import BottomNav from 'muse-components/bottomNav/bottomNav'
import BottomNavItem from 'muse-components/bottomNav/BottomNavItem'
import appBar from 'muse-components/appBar/appBar'
import textField from 'muse-components/textField/textField'
import flatButton from 'muse-components/flatButton/flatButton'
import iconButton from 'muse-components/iconButton/iconButton'
import flexboxItem from 'muse-components/flexbox/flexboxItem'
import flexbox from 'muse-components/flexbox/flexbox'

import listItem from 'muse-components/list/listItem'
import list from 'muse-components/list/list'
import divider from 'muse-components/divider/divider'
import infiniteScroll from 'muse-components/infiniteScroll/infiniteScroll'


import subHeader from 'muse-components/subHeader/subHeader'

import avatar from 'muse-components/avatar/avatar'
import iconMenu from 'muse-components/iconMenu/iconMenu'
import breadcrumb from 'muse-components/breadCrumb/breadcrumb'
import breadcrumbItem from 'muse-components/breadCrumb/breadcrumbItem'



content-block
Vue.component(Paper.name, Paper)
Vue.component(BottomNav.name, BottomNav)
Vue.component(BottomNavItem.name, BottomNavItem)
Vue.component(appBar.name, appBar)
Vue.component(textField.name, textField)
Vue.component(flatButton.name, flatButton)
Vue.component(iconButton.name, iconButton)

Vue.component(flexboxItem.name, flexboxItem)
Vue.component(flexbox.name, flexbox)
Vue.component(listItem.name, listItem)
Vue.component(list.name, list)
Vue.component(divider.name, divider)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(subHeader.name, subHeader)
Vue.component(avatar.name, avatar)

Vue.component(iconMenu.name, iconMenu)
Vue.component(breadcrumbItem.name, breadcrumbItem)
Vue.component(breadcrumb.name, breadcrumb)*/


//导入 mint-ui 的库
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { TabContainer, TabContainerItem,cell} from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(cell.name, cell);






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
