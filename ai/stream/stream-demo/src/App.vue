  <template>
    <!-- 会做数据绑定{{}} -->
    <div class="container">
      <div>
        <label>输入：</label>
        <!-- vue 数据双向绑定 -->
        <!-- 属性绑定 :value 绑定到input的value属性上 -->
        <input type="text" class="input" v-model="question">
        <button @click="update">提交</button>
      </div>
      <div class="output">
        <div>
          <label>Streaming</label>
          <input type="checkbox" v-model="stream" />
          <div v-if="stream">
            <label>Streaming</label>
          </div>
          <div>
            {{content}}
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  // vue 前端第二框架  react 第一
  // vue & React 都是具有组件化思想(component)、数据绑定(data bind)、响应式(reactive)等的现代前端开发框架 
  // 组件化思想，构成页面的最小单位不再是html标签，而是组件 
  // html标签是元素，太多了，不好作为一个工作的单元 
  // css 也一样，css rule 
  // js dom 
  // 将一堆html，css，js 组合在一起，形成一个可复用、好维护的特定业务工作单元  .vue
  // 数据绑定思想 template 绑定数据 不需要dom 编程
  // fetch 数据， dom innerHTML 渲染数据
  // 响应式数据 数据改变了，页面会自动更新 reactive
  import { ref } from 'vue'

  // let count = ref(1); // 响应式**数据**状态 (不同的页面状态)
  // 只需要和question打交道
  const question = ref('讲一个关于中国龙的故事');
  const stream = ref(false);
  const content = ref(''); // llm response 内容 | 开始请求

  // setTimeout(() => {
  //   count.value = 2;
  // }, 2000);
  // console.log(import.meta.env.VITE_DEEPSEEL_API_KEY);
  const update = async () => {
    // console.log(question.value);
    if (!question.value) return ; // 不能为空
    content.value = '思考中...';

    const endpoint = 'https://api.deepseek.com/v1/chat/completions';
    const headers = {
      // apikey 令牌的一种标记 Bearer 开始 token
      'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
      'Content-Type': 'application/json',
    };
    const response = await fetch(endpoint,{
      method: 'POST', // 加密 更安全 请求体
      headers,
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages: [
          {
            role: 'user',
            content: question.value,
          },
        ],
        stream: stream.value  // llm 接受参数，是否开启流式输出
      })
    }); 

    if (stream.value) {
      content.value = ''; // 流式输出，清空内容
      // 响应体对象， 一批批的token流式输出
      // 流式读取响应体 读取器 reader 
      console.log(response.body); // readableStream
      // 二进制流 可读流 ?.
      const reader = response.body?.getReader();
      const decoder = new TextDecoder(); 
      // 解码器 二进制流 转换为文本流
      let done = false; // 是否读取完成
      let buffer = ''; // 缓冲区

      while(!done) { // 不停的读，直到[DONE]
        // console.log(await reader.read());
        // 不要覆盖 done 读取完成的状态
        // 读取到的是二进制流 unit8Array 十进制数
        const {value, done: doneReading} = await reader.read()
      }
    } else {
      // 非流式输出
      // 生成完了， 直接返回结果
      // 二进制流 json 数据
      const data = await response.json();
      // 不再需要dom编程，修改数据状态
      content.value = data.choices[0].message.content;
    }
  }
  </script>

  <style scoped>
  .container {
    width: 300px;
    height: 200px;
    background: linear-gradient(red, yellow);
    border: 1px solid black;
  }
  </style>