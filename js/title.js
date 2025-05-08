var OriginTitle = document.title;

var titleTime;

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '(｀・ω・´)看不到我~';
    clearTimeout(titleTime);
  }
  else {
    document.title = '( つ•̀ω•́)つ被发现了！';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});