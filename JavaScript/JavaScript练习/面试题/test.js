
console.log(a);

var a = 100;
var a = function () { };
a = 200;


console.log([] == false, [] === false);
console.log(Boolean([]));

new Promise(function (resolve, reject) {
  resolve(123);//resolve的作用是将promise中回调函数从未成功变成成功也就是执行then中的console.log 并将值传进
}).then((res) => {
  res++;
  console.log(res);
});

console.log(2);

console.log("******************");
let e = 10.02; 
console.log(parseInt(e)== e);
