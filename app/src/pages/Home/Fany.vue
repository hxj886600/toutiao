<template>
<div @change="aasd">

<mt-tab-container v-model="active">
  <mt-tab-container-item id="tab-container1">
    <p>11</p>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
       <p>112</p>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
      <p>113</p>
  </mt-tab-container-item>
</mt-tab-container>

</div>
</template>

<script>

export default {
    name:'fany',
    data(){

        return {
          active:'tab-container2'
        }
      },
      methods:{

        aasd(){
          console.log( this.value)
        }
      },
   $watch: {
    active(val){
      console.log(val)
    }
    }

}
</script>

<style lang="css">





</style>
