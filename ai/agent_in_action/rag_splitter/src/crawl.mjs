// 网页爬虫，并解析其中的指定部分，css 选择器
import axios from 'axios';// 标准http 请求库 
// esm export default 一个， export 很多 
// * as 都引入
import * as cheerio from 'cheerio';
// 向url 发送 http请求， html 字符串 
// text/html 的html document 文本 
// 去拿其中的一部分， cherrio适合的， 
// cherrio 负责 在内存中，把html 字符串解析为DOM 树
// DOM 关键？ 前端 cherrio
// html 字符串-》 DOM 树结构， -》 css selector 入参=》
// 树的遍历-》 节点返回。
// 目标url 小蜘蛛爬取
const targetUrl = 'https://juejin.cn/post/7660707431753678854';

async function crawlPage() {
  try {
    const { data:html } = await axios.get(targetUrl);
    // console.log(html); // html 字符串
    // 1. html 字符串在命令行环境运行，内存中虚拟化一个DOM 对象出来
    // 都是树状结构 进程，申请分配比较大的内存空间
    // 2. css selector 树里查找
    // cheerio 可以让js 开发者， 以前端思维，简单高效完成
    // 指定url，指定部分的爬取工作，不需要用正则
    const $ = cheerio.load(html); // dom 对象
    const pageContent = $('.main-area p').text();
    console.log(pageContent);
  } catch(e) {

  }
}

crawlPage();