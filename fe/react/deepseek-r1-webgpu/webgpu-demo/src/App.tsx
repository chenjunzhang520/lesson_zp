  // 现代前端开发框架
  // .vue -> .tsx 组件化 typescript + jsx 
  // 响应式 数据绑定 组件化
  // 函数封装特性 组件的html，css，js 封成一个组件
  import { 
    useState, // react 函数式思想 hooks ，以 use 开头
    useEffect  // 生命周期钩子函数 组件挂载时执行
  } from 'react';
  import Progress from './components/Progress';
  function App() {
    // use 用， status状态 hooks函数 
    // 数据状态驱动界面状态，设计
    // 变/常量 -> 数据 (数据绑定 data binding & data driving,不需要dom编程) -> 数据状态 (响应式，修改状态，界面会跟着变)
    // 数据有不同的状态，界面不同的状态 川剧变脸 
    // null 初始值，loading 加载中 ready llm准备好了
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<string | null>(null); // 响应式数据状态
    // 错误对象数据状态
    const [error, setError] = useState(null);
    // const [error, setError] = useState('出错了'); 
    // 加载信息
    // const [loadingMessage, setLoadingMessage] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("开始加载");
    const [progressItems, setProgressItems] = useState([

    ]);
  //   const [progressItems, setProgressItems] = useState([{
  //     text: 'model.onnx',
  //     percentage: 0,
  //     total: 10000000
  //   },{
  //     text: 'model2.onnx',
  //     percentage: 10,
  //     total: 10001000
  //   }
  // ]);
    // 浏览器 导航栏 是否支持 WebGPU
    // 现代浏览器的重要特性
    // ! 取反 navigator.gpu 不支持的时候 undefined
    // !! 再取反，一定可以转成true | false
    // 双重否定等于肯定
    const IS_WEBGPU_AVAILABLE = !!navigator.gpu;
    
    // llm 处理
    const onEnter = () => {
      console.log(input);
    }
    
    // 组件生命周期，副作用
    // 组件挂载后，附带做什么
    useEffect(() => {
      console.log('组件已经挂载完成');

      // setTimeout(() => {
      //   setStatus('ready');
      // }, 2000);
    }, [])

    console.log('组件函数执行');
    // js 脚本 数据逻辑交互
    // count 数据状态 
    // 修改count  setCount 
    // const [count, setCount] = useState(0); // 响应式数据 ref
    // 返回 html jsx react的UI表现格式
    return (
      // <div className="flex justify-center ">
      //   Hello World! { status }
      //   {/* {count} */}
      //   <h1 className="text-3xl font-bold underline">你好，世界</h1>
      // </div>
      // flex-direction: column; 主轴 100vh margin x 水平居中对齐
      // 原子类，组合一下 flex-start flex-end 
      IS_WEBGPU_AVAILABLE?(<div className="flex flex-col h-screen mx-auto items-center justify-end text-gray-800 bg-white ">
        <div className="h-full overflow-auto flex justify-center items-center flex-col relative">
          {/* 1 rem = 4  1 单位  4px  
              [] 代表 指定样式大小
          */}
          <div className="flex flex-col items-center mb-1 max-w-[400px] text-center">
            {/* 蒸馏的是Qwen */}
            <h1 className="text-4xl font-bold mb-1">DeepSeek-R1 WebGPU</h1>
            <h2 className="font-semibold">
              A next generation reasoning model that runs locally in your browser with WebGPU acceleration.
            </h2>
          </div>
          <div className="flex flex-col items-center px-4">
            <p className="mx-w-[510px] mb-4">
              <br />
              Your are about to load 
              <a
                href="https://huggingface.co/onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline"
              >
                {/* DeepSeek-R1 的 15 亿参数量蒸馏版，用 Qwen 架构，适合本地轻量推理。
                  蒸馏Qwen  Reasoning 推理模型
                  HuggingFace 抱抱脸 全球最大开源模型社区 
                */}
                DeepSeek-R1-Distill-Qwen-1.5B
              </a>
              , a 1.5B parameter reasoning LLM optimized for in-browser
                inference. Everything runs entirely in your browser with
              {
                // transformers 是 huggingFace 推出的js 库，用于加载和推理模型
              }
              <a
                href="https://huggingface.co/docs/transformers.js"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                🤗&nbsp;Transformers.js
              </a>{" "}
              {/* Open Neural Network Exchange */}
              and ONNX Runtime Web, meaning no data is sent to a server. Once
              loaded, it can even be used offline. The source code for the demo
              is available on{" "}
            </p>
            {
              // 报错界面状态，响应式
              error && (
                <div className="text-red-500 text-center mb-2">
                  <p className="mb-1">
                    Unable to load model due to the following error:
                  </p>
                  <p className="text-sm">{error}</p>
                </div>
              )
            }
            {/* 
            vue 添加事件 @click 
            react 添加事件 onClick 不要去另外发明 
            HuggingFace 社区下载 开源模型 model-id  */}
            <button 
            className="border px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 disabled:cursor-not-allowed select-none"
            disabled={status !== null || error !== null}
            onClick={() => {
              setStatus("loading");
            }}>Load Model</button>
          </div>
        </div>
        {   
          // loading 状态 llm 下载 文件数组 驱动下载进度条
          status === "loading" && (
          // tailwindcss 适配方便的
          <div className="w-full max-w-[500px] text-left mx-auto p-4 bottom-0 mt-auto">
            <p className="text-center mb-1">{loadingMessage}</p>
            {/* 循环输出 v-for vue react 绝对不去发明
                map ? 一个数组返回一个新数组
                原来json数组  =>  渲染的进度条jsx 
            */}
            {
              // 循环输出，react 用了原生js 
              progressItems.map(({ text, percentage, total}, i) => (
                // 组件函数可以以自定义标签的方式，类html插入
                // 开关标签的 xml
                // 自闭合标签
                // App 的子组件
                <Progress key={i} text={text} percentage={percentage} total={total} />
              ))
            }
          </div>
        )}
        {/* 聊天输入框 */}
        <div className="mt-2 border border-gray-300 rounded-lg w-[600px] max-w-[80%] max-h-[200px] mx-auto relative mb-3 flex">
          <textarea
            className="w-[550px] dark-gray-700 px-3 py-4 rounded-lg bg-transparent border-none outline-hidden 
            disabled:text-gray-400 disabled:placeholder-gray-200"
            placeholder="Type your message ..."
            rows={1}
            disabled={status !== "ready"}
            // react 不支持双向绑定，性能不太好
            value={input}
            onInput={(e) => {
              // e.target  事件对象上target 属性一定有
              // 不一定有value 属性
              // e 通用的事件对象
              // e.target 通用的事件目标对象 不一定有value 
              // e.target.value
              // ts 
              // 断言 敢于断定 as ts的关键字
              const target = e.target as HTMLTextAreaElement;
              setInput(target.value);
            }}
            onKeyDown={(e) => {
              if (input.length > 0 && e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onEnter();
              }
            }}
            title={
              status==='ready'
              ?'Model is ready'
              :"Model not loaded yet"
            }
          />
        </div>
      </div>):(
        <div>您的浏览器还不支持WebGPU</div>
      )
    )
  }

  export default App