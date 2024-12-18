function openTab(evt, tabName) {
  //json 格式定义页面跳转路径
  const tabContents = {
    'Home': 'home.html',
    'Chef': 'chef.html',
    'Message': 'message.html',
    'Profile': 'wode.html'
  };
  // 取消所有tab的选中状态（这里先移除之前可能存在的active类名）
  var tablinks = document.getElementsByClassName("jin_tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 显示对应的tab内容（这里通过设置iframe的src来切换不同的页面内容，你可以根据实际情况修改）
  document.getElementById('jin_iframeContent').src = tabContents[tabName];

  // 将当前点击的tab设置为选中状态
  evt.currentTarget.className += " active";
  console.log(evt.currentTarget.className);

}

//返回按钮事件
function back() {
  // 执行浏览器历史回退操作
  window.history.back();
}
