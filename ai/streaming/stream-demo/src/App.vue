<script setup>
// es6 解构
// vue太复杂， 目前只需要ref 
import { ref } from 'vue'
// 模板需要消费的数据
// 响应式数据
// 在数据**改变**的时候，模板(响应了)会自动更新
// count 是value 为111的响应式对象
let count = ref(111);
console.log(count);
setTimeout(() => {
  count.value = 222;
},2000)
</script>

<template>
  <div class="container">
   <div>
      {{count}}
      <label>输入：</label>  
   </div>

  </div>
</template>

<style scoped>

</style>
