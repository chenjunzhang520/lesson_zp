// 能返回jsx 的函数就是组件
// 函数接收参数，复用组件时，进度、文件、大小（组件的属性）都不一样
// 组件的属性 html 属性的方式传过来的 props
function formatBytes(size:number) {
  // 计算应该用哪个单位（0=B, 1=kB, 2=MB...），size为0时直接用B
  // 几次方 
  const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    // 1024 的 i次方
    // 把字节数除以对应单位量级，保留两位小数后转回数字
    +(size / Math.pow(1024, i)).toFixed(2) * 1 +
    // 拼接上对应的单位字符串
    ["B", "kB", "MB", "GB", "TB"][i]
  );
}

const Progress = ({text,percentage,total}:{text:string,percentage:number,total:number}) => {
    // console.log(text,percentage,total);
    // es6+ (es12)编程风格
    percentage ??= 0;
    console.log(percentage)
    return(
        <div className="w-full bg-gray-100 text-left rounded-lg overflow-hidden mb-0.5">
            <div 
            // { js 运行区域 返回?  style 返回一个行内样式的key:value对象 }
            style={{width:`${percentage}%`}}
            className="bg-blue-400 whitespace-nowrap px-1 text-sm">
                {/* { js 运行 } */}
                {text} 
                {percentage.toFixed(2)}%
                {isNaN(total)?"":`of ${formatBytes(total)}`}
            </div>
        </div>
    )
}
export default Progress;