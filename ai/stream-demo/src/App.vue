<script setup>
// vue3 composition 组合 api 
// 把相关逻辑放一起 
import { ref } from 'vue';

// composition api 相关逻辑组织在一起 vue 2 选项式API
const question = ref('讲一个中国龙的故事');
const content = ref('');
const stream = ref(true);

const update = async () => {
  if (!question.value) return;
  content.value = '思考中...'; // 页面状态 开始llm 接口调用

  const endpoint = 'https://api.deepseek.com/chat/completions'; 
  const headers = { 
    'Content-Type': 'application/json', 
    Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}` 
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: 'deepseek-v4-flash',
      messages: [
        { role: 'user', content: question.value }
      ],
      stream: stream.value 
    })
  });

  if (stream.value) {
    content.value = '';
    // 大文件上传 慢慢流向 权限+形式 js 原生提供了ReadableStream
    // llm 服务器 ReadableStream 对象  数据流？
    // stream 对象 水流 服务器端流向浏览器
    // response.body 服务器端响应体 二进制流
    console.log(response.body);
    // 水管子， 嘬一口 返回 读取器对象
    // await 等token 流来为止
    const reader = response.body?.getReader();
    console.log(reader);
    // 二进制编解码
    const decoder = new TextDecoder(); // 二进制流服务的
    let done = false; // 开关变量  data: [DONE]
    let buffer = ''; // 缓存

    while(!done) {
      // 嘬一口， 嘬到了resolve,  没嘬到 ，继续等
      const {value, done: doneReading} = await reader?.read(); // reader对象 兼容性， 老浏览不一定支持
      done = doneReading;
      // 除了把本轮的value 要处理之外， 之前会有东西要一起处理
      // chunk 一小块 json 格式
      // delta 偏移量  一小块一小块 的增量
      // 解析 json 字符串 choices[0].delta.content
      const chunkValue = buffer + decoder.decode(value);
      // console.log(chunkValue);
      buffer = '';
      // json 字符串 多行数据 
      // 一次发送一行， 也可能发送多行 llm 计算速度和任务
      // data: {开始 又有数据来了}
      // data: {开始 又有数据来了}

      const lines = chunkValue.split('\n')
        .filter((line) => line.startWith('data: '))

      
    }

  } else {
    const data = await response.json();
    // 只需要修改数据状态， 响应式
    content.value = data.choices[0].message.content;
  }
}

// const count = ref(0);// 变量 -》 数据（数据绑定）
//  -》 数据状态（响应式）-》页面状态（反应在）
// RefImpl响应式对象， 值是count.value 
// count.value 改变的时候，页面上绑定了count的地方会局部热更新
// console.log(count, count.value);
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