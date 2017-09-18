<template>
  <div>
    <search></search>
    <fan></fan>
   
  <router-view></router-view>
  </div>
</template>

<script>
import Search from './Search'
import Fany from './Fany'
import Fan from './Fan'
import Xl from './Xl'
import Xls from './Xls'
export default {
  name: 'home',
  components:{
    Search,
    Fany,
    Fan,
  
    Xl,
    Xls

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
