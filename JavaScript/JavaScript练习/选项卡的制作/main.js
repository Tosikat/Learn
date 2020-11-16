
window.onload = function () {
  var containerTabs = document.getElementsByClassName("tab");
  var contexts = document.getElementsByClassName('context')[0].getElementsByTagName('div');
  //从数组集中获取函数要在气候加[0]在进行获取其子元素
  console.log(contexts);
  console.log(containerTabs);

  for (var i = 0; i < containerTabs.length; i++) {
    containerTabs[i].index = i;//下标随鼠标变化
    containerTabs[i].onclick = function () {
      //排他思想
      for (var i = 0; i < containerTabs.length; i++) {
        containerTabs[i].id = "";
        contexts[i].className = ""
      }
      this.id = "bgc";
      contexts[this.index].className = "show";      
      // console.log(this); 不明白打印下
    }
  }
}
/*1.排他思想： 先将一个样式设置为想要的模样（设置固定class或者id）
，事件发生时将所有设置为空，点击的内容，利用class或者id属性进行设置
  2.双重循环
  3.保存下标
*/