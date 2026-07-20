  // 现代前端开发框架
  // .vue -> .tsx 组件化 typescript + jsx 
  // 响应式 数据绑定 组件化
  // 函数封装特性 组件的html，css，js 封成一个组件
  import { 
    useState, // react 函数式思想 hooks ，以 use 开头
    useEffect  // 生命周期钩子函数 组件挂载时执行
  } from 'react';
  function App() {
    // use 用， status状态 hooks函数 
    // 数据状态驱动界面状态，设计
    // 变/常量 -> 数据 (数据绑定 data binding & data driving,不需要dom编程) -> 数据状态 (响应式，修改状态，界面会跟着变)
    // 数据有不同的状态，界面不同的状态 川剧变脸 
    // null 初始值，loading 加载中 ready llm准备好了
    const [status, setStatus] = useState<string | null>(null); // 响应式数据状态
    // 错误对象数据状态
    // const [error, setError] = useState(null);
    const [error, setError] = useState('出错了'); 
    // 加载信息
    const [loadingMessage, setLoadingMessage] = useState("");
    const [progressItems, setProgressItems] = useState([{
      file: 'model.onnx',
      progress: 0,
      total: 10000000
    }]);
    // 浏览器 导航栏 是否支持 WebGPU
    // 现代浏览器的重要特性
    // ! 取反 navigator.gpu 不支持的时候 undefined
    // !! 再取反，一定可以转成true | false
    // 双重否定等于肯定
    const IS_WEBGPU_AVALABLE = !!navigator.gpu;

    // 组件生命周期，副作用
    // 组件挂载后，附带做什么
    useEffect(() => {
      console.log('组件已经挂载完成');

      setTimeout(() => {
        setStatus('ready');
      }, 2000);
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
      IS_WEBGPU_AVALABLE?(<div className="flex flex-col h-screen mx-auto items-center justify-end text-gray-800 bg-white ">
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
          </div>
        </div>
      </div>):(
        <div>您的浏览器还不支持WebGPU</div>
      )
    )
  }

  export default App