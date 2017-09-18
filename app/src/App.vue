<template>
  <div id="app">
    <router-view></router-view>
  

      <mu-paper id="footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/home/xi" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/recent" title="西瓜视频" icon="pin_drop"/>
        <mu-bottom-nav-item value="/guang" icon="language"/>
        <mu-bottom-nav-item value="/order" title="小视频" icon="assignment"/>
        <mu-bottom-nav-item value="/me" title="我的" icon="account_circle"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>




export default {
  data () {
    return {
     
      bottomNav: '/home/xl'
    }
  },
  methods: {
    handleChange (val) {
    
       this.bottomNav = val
       this.$router.push(val);
    }
    
  }
}
</script>

<style>



#footer {
  position:fixed;
  left:0;
  right:0;
  bottom:0;
}
</style>
