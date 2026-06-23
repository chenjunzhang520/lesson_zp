import { getEncoding } from 'js-tiktoken';
// decode 解码
// gpt 官方的token 编码器 cl100k_base
// utf-8 编码
const enc = getEncoding('cl100k_base'); // utf-8 gbk 
const text = "Hello, tiktoken ! 你好，世界";
// llm encode 编码器 
const tokens = enc.encode(text);
// console.log("Token IDs:",tokens, tokens.length);
const decodedText = enc.decode(tokens);
console.log("Decoded Text:", decodedText);