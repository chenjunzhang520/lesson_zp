// 能返回jsx 的函数就是组件
// 函数接收参数，复用组件时，进度、文件、大小（组件的属性）都不一样
// 组件的属性 html 属性的方式传过来的 props
const Progress = ({text,percentage,total}:{text:string,percentage:number,total:number}) => {
    // console.log(text,percentage,total);
    percentage ??= 0;
    return(
        <div>
            <p>{text}</p>
            <p>{percentage}%</p>
            <p>{total}</p>
        </div>
    )
}
export default Progress;