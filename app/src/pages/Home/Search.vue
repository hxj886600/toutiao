<template>
<div>
<mu-appbar>

    <mu-flat-button label="今日头条" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
    <mu-text-field icon="search" class="appbar-search-field" hintText="今日头条"  />
 
</mu-appbar>

</div>
</template>

<script>




    export default {
        name:'search'
    }
</script>

<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>