import Greeting from './components/Greeting'
import Modal from './components/Modal'
import Card from './components/Card'

const MyHeader = () => {
    return(
        <h2 style={{margin:0, color:'blue'}}>自定义标题</h2>
    )
}
const MyFooter = () => {
    return(
        <div style={{textAlign: 'right'}}>
            <button 
            onClick={() => alert('关闭')}
            style={{padding: '0.5rem 1rem'}}
            >关闭</button>
        </div>
    )
}

function App() {
  return(
    <div>
      1111
       {/* 自定义组件 props 属性
       <Greeting name="陳" message="欢迎加入字节！！！" /> 
       <Greeting name="chen" message="欢迎加入阿里" showIcon />
      <Greeting name="陈" />  */}
      {/* <Modal 
      HeaderComponent={MyHeader}
      FooterComponent={MyFooter}
      >
        <p>这是一个弹窗</p>
        <p>你可以在这里显示任何JSX。</p>
      </Modal> */}
      {/* jsx js class 是js 关键字 */}
      <Card className="user-card">
        <h2>张三</h2>
        <p>高级前端工程师</p>
        <button>查看详情</button>
      </Card>
    </div>
  )
}

export default App
