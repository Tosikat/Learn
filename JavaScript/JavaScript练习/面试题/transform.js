console.log(0 == null);
console.log(0 == []);
console.log(null == undefined);//只有他们两个相等其他的与他们隐式转化的都不相等
console.log({} == 0);
console.log(Boolean(null));
console.log(+0 === -0);

console.log("*************");
function foo(num = 10) {
  console.log(this.num);
}
foo(20);
setTimeout(function () {
  const num1 = 20;
  console.log(this.num1);
}, 10)