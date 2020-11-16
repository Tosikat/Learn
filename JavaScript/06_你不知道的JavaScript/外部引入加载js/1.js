console.log(b);
function a() {
  console.log("我是1.js里面的a函数在2.js中执行");
}//存在变量提升 1行报错不影响 2.js中a()的执行
console.log("1.js执行结束");