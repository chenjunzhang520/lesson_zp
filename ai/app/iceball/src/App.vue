<template>
  <div class="container">
    <div class="input">
      <div class="file-input">
        <input type="file" 
               ref="uploadImage" 
               accept="image/*"
               @change="updateImageData"
               required
        />
      </div>
      <img :src="imgPreview" alt="" v-if="imgPreview"/>
      <div class="settings">
        <div class="selection">
          <label >队服编号:</label>
          <input type="number" v-model="uniform_number"/>
        </div>
        <div class="selection">
          <label >队服颜色:</label>
          <select v-model="uniform_color">
            <option value="红">红色</option>
            <option value="蓝">蓝色</option>
            <option value="绿">绿色</option>
            <option value="白">白色</option>
            <option value="黑">黑色</option>
          </select>
        </div>
      </div>
      <div class="settings">
        <div class="seletion">
          <label >位置:</label>
          <select v-model="position">
            <option value="0">守门员</option>
            <option value="1">前锋</option>
            <option value="2">后卫</option>
          </select>
        <div class="selection">
            <label>持杆：</label>
            <select v-model="shooting_hand">
              <option value="0">左手</option>
              <option value="1">右手</option>
            </select>
          </div>
          <div class="selection">
            <label>风格：</label>
            <select v-model="style">
              <option value="写实">写实</option>
              <option value="乐高">乐高</option>
              <option value="国漫">国漫</option>
              <option value="日漫">日漫</option>
              <option value="油画">油画</option>
              <option value="涂鸦">涂鸦</option>
              <option value="素描">素描</option>
            </select>
          </div>  
        </div>
      </div>
      <div class="generate">
        <button @click="generate">生成</button>
      </div>
    </div>
    <div class="output">
      <div class="generated">
        <img :src="imgUrl" alt="" v-if="imgUrl"/>
        <div v-if="status">{{ status }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// script + setup 是vue3 最好的代码组织方式
// composition api 组合 
// 直接在script setup 中定义函数
// 用于标记一个DOM 对象，如果要做就用ref
// 未挂载前null，uploadImage template 中的ref 绑定的对象
const patToken = import.meta.env.VITE_PAT_TOKEN;
const uploadUrl = 'https://api.coze.cn/v1/files/upload';
const workflowUrl = 'https://api.coze.cn/v1/workflow/run';
const workflowId = '7584046113587691571';
console.log(patToken);
const uniform_number = ref(10);
const uniform_color = ref('红');  
const position = ref(0);
const shooting_hand = ref(0);
const style = ref('写实');
// 数据状态
const status = ref(''); // 空 -> 上传中 -> 生成中 -> 生成成功
const imgUrl = ref(''); // 生成的图片url
// 生成图片模块
const generate = async () => {
  status.value = "图片上传中..."
  const file_id = await uploadFile();
  if(!file_id) {
    return;
  }
  status.value = '图片上传成功，正在生成...'

  // worlflow 调用
  const parameters = {
    picture: JSON.stringify({
      file_id// 安全问题
    }),
    style: style.value,
    uniform_number: uniform_number.value,
    uniform_color: uniform_color.value,
    position: position.value,
    shooting_hand: shooting_hand.value,
  }

  const res = await fetch(workflowUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${patToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      workflow_id: workflowId,
      parameters
    })
  });
  const ret = await res.json();
  if(ret.code !== 0) { // 如果出错了
    status.value = ret.msg; // msg 错误消息
    return;
  }

  const data = JSON.parse(ret.data);
  console.log(data);
  status.value = '';
  imgUrl.value = data.data;

}

// 先上传到coze 服务器 
const uploadFile = async () => {
  // POST 请求体 http 协议
  const formData = new FormData(); // 表单提交数据
  const input = uploadImage.value;
  if(!input.files || input.files.length <= 0) {
    return;
  }
  formData.append('file', input.files[0]); // 请求体里加上文件
  // coze 发送http 请求 上传
  const res = await fetch(uploadUrl,{
    method: 'POST',
    headers: {
      // 请求头 令牌
      'Authorization': `Bearer ${patToken}`,
    },
    body: formData
  })

  const ret = await res.json();
  console.log(ret);
  if(ret.code !== 0) { // 如果出错了
    status.value = ret.msg; // msg 错误消息
    return
  }
  return ret.data.id;
}
// 图片预览模块
const uploadImage = ref(null);
const imgPreview = ref(''); // 声明了响应式对象
// null -> dom 对象 变化 
// 挂载了
onMounted(() => {
  console.log(uploadImage.value);
})
const updateImageData = (e) => {
  // html5 文件对象
  // console.log(uploadImage.value.files[0]);
  const input = uploadImage.value;
  if(!input.files || input.files.length === 0) {
    return;
  }
  const file = input.files[0]; // 文件对象 html5 新特性
  console.log(file);
  // FileReader 文件阅读对象
  const reader = new FileReader();
  reader.readAsDataURL(file);  // url  异步的
  reader.onload = (e) => { // 读完了
    // console.log(e.target.result);
    imgPreview.value = e.target.result;
    console.log(imgPreview.value);
  }
}
</script>

<style  scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    height: 100vh;
    font-size: .85rem;
  }
  
  .preview {
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  .settings {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    margin-top: 1rem;
  }
  
  .selection {
    width: 100%;
    text-align: left;
  }
  
  .selection input {
    width: 50px;
  }
  
  .input {
    display: flex;
    flex-direction: column;
    min-width: 330px;
  }
  
  .file-input {
    display: flex;
    margin-bottom: 16px;
  }
  
  .output {
    margin-top: 10px;
    min-height: 300px;
    width: 100%;
    text-align: left;
  }
  
  button {
    padding: 10px;
    min-width: 200px;
    margin-left: 6px;
    border: solid 1px black;
  }
  
  .generate {
    width: 100%;
    margin-top: 16px;
  }
  
  .generated {
    width: 400px;
    height: 400px;
    border: solid 1px black;
    position: relative;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
  }
  
  .output img {
    width: 100%;
  }
</style>