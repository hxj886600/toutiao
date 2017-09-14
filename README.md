# 前言  
 vue是MVVM框架他把MVC里的Controller和MVP里的Presenter改成了ViewModel。Model+View+ViewModel。
View的变化会自动更新到ViewModel,ViewModel的变化也会自动同步到View上显示。
这种自动同步是因为ViewModel中的属性实现了Observer，当属性变更时都能触发对应的操作。
MVVM模式的框架有：AngularJS+Vue.js和Knockout+Ember.js后两种知名度较低以及是早起的框架模式。  
Vue2.0在服务端创建了虚拟DOM，因此可以在服务端可以提前渲染出来，解决了单页面一直存在的问题：SEO和初次加载耗时较多的问题。同时在真正意义上做到了前后端共用一套代码。实现了代码的简洁可复用性。
这是一个复合的项目结构复杂，费时周期长。因为利用业余时间来做，年前就开始写，又跨个年，周期有点长，项目从零布局到完成共用了4个多月的时间，目前项目已经完成，正在进行一些性能的优化，增加详细的注释。

今日头条是国内新闻网站的领导者，在行内的具有十分庞大的流量，亦具有十分的前瞻性，头条页面简单，可操作性强。他拥有十分的多的资源。但在页面的外观上十分简洁。是编程的理想对象。
### 技术栈 ###
 1. vue.js 2.0全家桶（vue、vuex、vue-router）
 2. axios
 3. element-ui、iview
 4. vue-lazyload、animate.css、moment、flexible.js
 5.jsonp
## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，建议使用 node 6 稳定版

>
>  开发环境 macOS 10.12.3  Chrome 60  nodejs 6.10.0
>  推荐一个 react + redux 开源项目，对react感兴趣的朋友赶紧去看看。[地址在这里](https://github.com/bailicangdu/react-pxq)  
# 效果演示  




### 移动端扫描下方二维码  

<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/a1.png" width="250" height="250"/>


### 安装 ###
npm install
### 运行 (8090端口) ###
npm run dev
# 最终目标
1、用node.js构建一个模拟今日头条的后台系统。
2、利用 react-native 写出跨 Android 和 IOS 的原生APP版本  
#部分截图 
  
<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF.gif" width="365" height="619"/> 


<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF2.gif" width="365" height="619"/> 

<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF1.gif" width="365" height="619"/> 


<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF4.gif" width="365" height="619"/> 

<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF5.gif" width="365" height="619"/> 

<img src="https://raw.githubusercontent.com/hxj886600/vue-anli/master/tu/GIF6.gif" width="365" height="619"/> 






  # 流程  

# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── elm                                         // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── alertTip.vue                    // 西瓜视频组件
│   │   │   ├── buyCart.vue                     // 小视频组件
│   │   │   ├── computeTime.vue                 // 我的组件
│   │   │   ├── loading.vue                     // 页面初始化加载数据的动画组件
│   │   │   ├── mixin.js                        // 组件混合(包括：指令-下拉加载更多，处理图片地址)
│   │   │   ├── ratingStar.vue                  // 评论的五颗星组件
列表公共组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── fetch.js                            // 获取数据
│   │   ├── mUtils.js                           // 常用的js方法
│   │   └── rem.js                              // px转换rem
│   ├── images                                  // 公共图片
│   ├── page
│   │   ├── balance
│   │   │   ├── balance.vue                     // 关注。。。。等
│   │   │   └── children
│   │   │       └── detail.vue                  // 内容。。。。
│   │   ├── benefit
│   │   │   ├── benefit.vue                     // 西瓜视频
│   │   │   └── children
│   │   │       ├── commend.vue                 // 音乐
│   │   │       ├── coupon.vue                  // 推荐
│   │   │       ├── exchange.vue                // 搞笑
│   │   │       ├── hbDescription.vue           // 社会等
│   │   │       └── hbHistory.vue               // 历史。。。。。

│   │   ├── download
│   │   │   └── download.vue                    // 下载App
│   │   ├── find
│   │   │   └── find.vue                        // 发现页
│   │   ├── food
│   │   │   └── food.vue                        // 导航列表
│   │   ├── forget
│   │   │   └── forget.vue                      // 忘记密码，修改密码页
│   │   ├── home
│   │   │   └── home.vue                        // 首页
│   │   ├── login
│   │   │   └── login.vue                       // 登录注册页
│   │   ├── msite
│   │   │   └── msite.vue                       // 内容页

│   │   ├── profile
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   ├── address.vue             // 添加地址
│   │   │   │   │   └── children
│   │   │   │   │       ├── add.vue             // 新增地址
│   │   │   │   │       └── children
│   │   │   │   │           └── addDetail.vue   // 搜索地址
│   │   │   │   ├── info.vue                    // 帐户信息
│   │   │   │   └── setusername.vue             // 重置用户名
│   │   │   └── profile.vue                     // 个人中心
│   │   ├── search
│   │   │   └── search.vue                      // 搜索页
│   │   ├── service
│   │   │   ├── children
│   │   │   │   └── questionDetail.vue          // 问题详情
│   │   │   └── service.vue                     // 服务中心
│   │   ├── shop
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   └── shopSafe.vue            // 我的
│   │   │   │   ├── foodDetail.vue              // 内容页
│   │   │   │   └── shopDetail.vue              // 导航页
│   │   │   └── shop.vue                       //动态页
│   │   └── vipcard
│   │       ├── children
│   │       │   ├── invoiceRecord.vue           // 购买记录
│   │       │   ├── useCart.vue                 // 使用卡号购买
│   │       │   └── vipDescription.vue          // 会员说明
│   │       └── vipcard.vue                     // 会员卡办理页
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style
│       ├── common.scss                         // 公共样式文件
│       ├── mixin.scss                          // 样式配置文件
│       └── swiper.min.css
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件


# License