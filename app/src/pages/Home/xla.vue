<template>

<div class="demo-infinite-container">
  <mu-list>
  <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <template v-for="item in list">
      <mu-list-item   disableRipple>
      
    
       <mu-list-item title="温州土豪1000万买劳斯莱斯加长版，为何三年后想把车扔河里？'" >
       <span style="color: red" >
      置顶
      </span>
       <span style="color: rgba(0, 0, 0, .87)" >汽车之家</span>
       <img class="b4" src="https://p1.pstatp.com/large/19ee00008657bb9bf4b2"  slot="after"/>
    </mu-list-item>

 <mu-divider/>
   

    </mu-list-item>
   
     
      <mu-divider/>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
export default {
    name:'xl',
  data () {
    const list = []
    for (let i = 0; i < 5; i++) {
      list.push('item' + (i + 1))
    }
    return {                                                                  
      list,
      num: 5,
      loading: false,
      scroller: null,
      refreshing: false,
      trigger: null,
    }
  },
  mounted () {
    this.scroller = this.$el,
    this.trigger = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 5; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 5
        this.loading = false
        
        
      }, 2000)
    },

      refresh () {
            this.refreshing = true
            setTimeout(() => {
              const list = []
              for (let i = this.num; i < this.num + 10; i++) {
                list.push('item' + (i + 1))
              }
              this.list = list
              this.num += 6
              this.refreshing = false
            }, 2000)
          }
        }




}
</script>

<style lang="css">
.demo-infinite-container{

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
.b4{
 height:0.8rem;
 width:1.1rem;
}
.b5{
  display:inline-block;
   height:0.8rem;
    width:1rem;
    margin-left:0.1rem;
    margin-top:0.15rem;
}



</style>
