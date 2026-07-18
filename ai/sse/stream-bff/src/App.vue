<script setup> 
// 一次性的-> 流式  前端 -> bff -> 后端 -> llm 请求
fetch('/api/stream?prompt=hello')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); 
</script>
<template>
<div class="container">
  <div>
    <label>输入：</label><input class="input" v-model="question" />
    <button @click="update">提交</button>
  </div>
  <div class="output">
    <div><label>Streaming</label><input type="checkbox" v-model="stream"/></div>
    <div>{{ content }}</div>
  </div>
</div>
</template>
<style>
.container {
  /* 文档流 是页面布局的基础 
  从上到下，从左到右， 流式布局
  每个盒子在文档流有自己的位置和大小
  盒模型
  开启新的格式化上下文  */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100vh;
  font-size: 0.85rem;/* 移动端适配，等比例 html标签等比例 */
}
.input {
  width: 200px;
}
.output {
  margin-top: 10px;
  min-height: 300px;
  width: 100%;
  text-align: left;
}
button{
  padding: 0 10px;
  margin-left: 6px;
}
</style>