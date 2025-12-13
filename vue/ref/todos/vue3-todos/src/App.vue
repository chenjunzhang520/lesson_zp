<template>
  <div>
    <h1></h1>
    <!-- 数据绑定 -->
    <h2>{{ title }}</h2>
    <!-- 双向数据绑定 -->
     <!-- @ v-bind: 缩写  不用addEventListener -->
     <!-- @event-name:enter 监听键盘输入，当按下回车的时候 -->
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <!-- 条件渲染指令 -->
    <ul v-if="todos.length">
      <!--  key 唯一属性 -->
      <li v-for="todo in todos" :key="todo.id">
        <!-- 复选框 -->
        <input type="checkbox" v-model="todo.done">
        <!-- : v-bind: 缩写   .js 表达式 
             vue 有一定的学习 api 对用户非常友好，好上手 
        -->
        <span :class="{'done': todo.done}">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>
      暂无计划
    </div>
    <div>
      全选<input type="checkbox" v-model="allDone">
      <!-- {{ 数据绑定 表达式结果绑定 }} -->
      <!-- {{ todos.filter(todo => !todo.done).length }} -->
      {{active}}
      /
      {{ todos.length }}
    </div>
  </div>
</template>
<script setup>
  // 业务是页面上要动态展示标题，且编辑标题
  // vue focus 标题数据业务，修改数据，余下的dom更新vue 替我们做了
  // setup vue3 composition 组合式API 
  // vue2 options API
import { ref, computed } from 'vue'
// 响应式数据
const title = ref("");
const todos = ref([
  {
    id: 1,
    title: '打王者',
    done: false
  },
  {
    id: 2,
    title: '吃饭',
    done: true
  },
])
// 依赖于todos 响应式数据的 计算属性
// 形式上是函数(计算过程)，结果(计算属性)返回
// 也是响应式的 依赖于todos
// computed 缓存 性能优化 只有 todos 变化时才会重新计算
const active = computed(() => {
  return todos.value.filter(todo => !todo.done).length
},)

const addTodo = () => {
  // focus 数据业务
  if(!title.value) return;
  todos.value.push({
    id:Math.random(),
    title:title.value,
    done:false
  })
  title.value = ''
}
// computed 高级技巧   
// get set 属性的概念
const allDone = computed({
  get() {
    return todos.value.every(todo => todo.done)
  },
  set(val) {
    todos.value.forEach(todo => todo.done = val)
  }
})
</script>
<style>
  .done {
    color:gray;
    text-decoration: line-through;
  }
</style>

