<template>

<div class="demo-infinite-container">
  <mu-list>
  <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <template v-for="item in list">
      <mu-list-item   disableRipple>
      
    
       <mu-list-item title="南京长江大桥主桥桥面全部拆除露出'铮铮铁骨'" >
       <span style="color: red" >
      置顶
      </span>
       <span style="color: rgba(0, 0, 0, .87)" >学习进行时</span>
       <img class="b4" src="http://mpic.haiwainet.cn/thumb/d/uploadfile/2017/0918/20170918032443199,w_600.jpg"  slot="after"/>
    </mu-list-item>

 <mu-divider/>
       <mu-list-item title="车钥匙不只是用来开车门的，九成司机都不知道，车钥匙还有这功能" >
       
       <img class="b5" src="https://p3.pstatp.com/large/3b01000388ef8a08dbdf?imageView2/2/w/615/h/617" />
         <img class="b5" src="https://p3.pstatp.com/large/3b0400007b39a34b5400?imageView2/2/w/616/h/624" />
           <img class="b5" src="https://p3.pstatp.com/large/3b07000049e64e713e5b?imageView2/2/w/615/h/511" />
    </mu-list-item>



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
    for (let i = 0; i < 3; i++) {
      list.push('item' + (i + 1))
    }
    return {                                                                  
      list,
      num: 3,
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
        for (let i = this.num; i < this.num + 3; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 3
        this.loading = false
        
        
      }, 2000)
    },

      refresh () {
            this.refreshing = true
            setTimeout(() => {
              const list = []
              for (let i = this.num; i < this.num + 3; i++) {
                list.push('item' + (i + 1))
              }
              this.list = list
              this.num += 3
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
