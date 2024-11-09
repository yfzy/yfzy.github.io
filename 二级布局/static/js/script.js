// 获取置顶按钮
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 监听页面滚动事件
window.onscroll = function () {
    // 当页面滚动超过200px时，显示按钮，否则隐藏
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// 点击按钮时，滚动到页面顶部
scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
