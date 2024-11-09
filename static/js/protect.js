//1.0
document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('请尊重劳动成果！www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('请尊重劳动成果！www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('请尊重劳动成果！www.17sucai.com');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('请尊重劳动成果！www.17sucai.com');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('请尊重劳动成果！www.17sucai.com');
    return false;
}

// 2.0
// let lastKeyPressTime = 0;
// const debounceTime = 10;  // 防抖间隔，2秒内禁止重复触发

// // 键盘事件拦截
// document.onkeydown = function (e) {
//     const currentTime = new Date().getTime();
//     if (currentTime - lastKeyPressTime < debounceTime) {
//         return false;  // 防止连续触发
//     }
//     lastKeyPressTime = currentTime;

//     e = e || window.event;

//     // 禁用特定快捷键
//     if (e.keyCode === 123 ||  // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//         (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//         (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//         alert('请尊重劳动成果！www.17sucai.com');
//         return false;
//     }
// };

// // 禁用右键菜单
// document.oncontextmenu = function () {
//     alert('请尊重劳动成果！www.17sucai.com');
//     return false;
// };

// // 监听窗口尺寸变化
// window.onresize = function () {
//     // 通常开发者工具打开时会导致窗口高度显著减小
//     if (window.outerHeight - window.innerHeight > 100) {
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     }
// };

// // 检测开发者工具打开状态
// (function () {
//     const devtools = /./;
//     devtools.toString = function () {
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     };
//     console.log(devtools);
// })();


//3.0
// let lastKeyPressTime = 0;
// const debounceTime = 2000;  // 防抖间隔，2秒内禁止重复触发

// // 键盘事件拦截
// document.onkeydown = function (e) {
//     const currentTime = new Date().getTime();
//     if (currentTime - lastKeyPressTime < debounceTime) {
//         return false;  // 防止连续触发
//     }
//     lastKeyPressTime = currentTime;

//     e = e || window.event;

//     // 禁用特定快捷键
//     if (e.keyCode === 123 ||  // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//         (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//         (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//         alert('请尊重劳动成果！www.17sucai.com');
//         return false;
//     }
// };

// // 禁用右键菜单
// document.oncontextmenu = function () {
//     alert('请尊重劳动成果！www.17sucai.com');
//     return false;
// };

// // 监听窗口尺寸变化
// window.onresize = function () {
//     // 检测开发者工具打开引起的窗口高度变化
//     if (window.outerHeight - window.innerHeight > 100) {
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     }
// };

// // 定时检测 console 和性能变化
// setInterval(function () {
//     // 检测 console 特性变化
//     const devtools = /./;
//     devtools.toString = function () {
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     };
//     console.log(devtools);

//     // 检测性能下降
//     if (performance.now() - lastKeyPressTime > 100) {
//         alert('检测到开发者工具的打开！请尊重劳动成果。');
//         window.close();
//     }
// }, 1000);  // 每秒检查一次


//4.0
// let lastKeyPressTime = 0;
// const debounceTime = 2000;  // 防抖间隔，2秒内禁止重复触发

// // 键盘事件拦截
// document.onkeydown = function (e) {
//     const currentTime = new Date().getTime();
//     if (currentTime - lastKeyPressTime < debounceTime) {
//         return false;  // 防止连续触发
//     }
//     lastKeyPressTime = currentTime;

//     e = e || window.event;

//     // 禁用特定快捷键
//     if (e.keyCode === 123 ||  // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//         (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//         (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//         alert('请尊重劳动成果！www.17sucai.com');
//         return false;
//     }
// };

// // 禁用右键菜单
// document.oncontextmenu = function () {
//     alert('请尊重劳动成果！www.17sucai.com');
//     return false;
// };

// // 监听窗口尺寸变化
// window.onresize = function () {
//     // 检测开发者工具打开引起的窗口高度变化
//     if (window.outerHeight - window.innerHeight > 150) {  // 调整阈值为150
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     }
// };

// // 定时检测 console
// setInterval(function () {
//     // 仅检测 console 的特殊属性，移除性能检测以减少误报
//     const devtools = /./;
//     devtools.toString = function () {
//         alert('检测到开发者工具被打开！请尊重劳动成果。');
//         window.close();  // 尝试关闭窗口
//     };
//     console.log(devtools);
// }, 3000);  // 每3秒检查一次


// 5.0
// let lastKeyPressTime = 0;
// const debounceTime = 2000;  // 防抖间隔，2秒内禁止重复触发

// // 显示警告并尝试关闭页面
// function showAlertAndClose() {
//     alert('检测到开发者工具被打开！请尊重劳动成果。');
//     window.open('', '_self');  // 必须使用 _self 来使关闭操作有效
//     window.close();  // 尝试关闭页面
// }

// // 键盘事件拦截
// document.onkeydown = function (e) {
//     const currentTime = new Date().getTime();
//     if (currentTime - lastKeyPressTime < debounceTime) {
//         return false;  // 防止连续触发
//     }
//     lastKeyPressTime = currentTime;

//     e = e || window.event;

//     // 禁用特定快捷键
//     if (e.keyCode === 123 ||  // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//         (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//         (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//         showAlertAndClose();
//         return false;
//     }
// };

// // 禁用右键菜单
// document.oncontextmenu = function () {
//     showAlertAndClose();
//     return false;
// };

// // 监听窗口尺寸变化
// window.onresize = function () {
//     // 检测开发者工具打开引起的窗口高度变化
//     if (window.outerHeight - window.innerHeight > 150) {  // 调整阈值为150
//         showAlertAndClose();
//     }
// };

// // 定时检测 console
// setInterval(function () {
//     // 仅检测 console 的特殊属性，移除性能检测以减少误报
//     const devtools = /./;
//     devtools.toString = function () {
//         showAlertAndClose();
//     };
//     console.log(devtools);
// }, 3000);  // 每3秒检查一次


//6.0(edge不行，谷歌可以)
let lastKeyPressTime = 0;
const debounceTime = 2000;  // 防抖间隔，2秒内禁止重复触发

// 清除页面内容的函数
function clearPageContent() {
    document.body.innerHTML = '';  // 清空页面内容
    document.head.innerHTML = '';  // 清空头部内容
    document.body.style.backgroundColor = "black";  // 设置背景为黑色，避免空白页面
}
function showAlertAndClose() {
        alert('检测到开发者工具被打开！请尊重劳动成果。');
        window.open('', '_self');  // 必须使用 _self 来使关闭操作有效
        window.close();  // 尝试关闭页面
        showAlertAndClose();
    }
// 显示警告并清除页面内容
function showAlertAndClear() {
    alert('检测到开发者工具被打开！请尊重劳动成果。');
    showAlertAndClose();
    clearPageContent();
}

// // 键盘事件拦截
// document.onkeydown = function (e) {
//     const currentTime = new Date().getTime();
//     if (currentTime - lastKeyPressTime < debounceTime) {
//         return false;  // 防止连续触发
//     }
//     lastKeyPressTime = currentTime;

//     e = e || window.event;

//     // 禁用特定快捷键
//     if (e.keyCode === 123 ||  // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//         (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//         (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//         showAlertAndClear();
//         return false;
//     }
// };

// // 禁用右键菜单
// document.oncontextmenu = function () {
//     showAlertAndClear();
//     return false;
// };

document.onkeydown=function(){
        var e = window.event||arguments[0];
        if(e.keyCode==123){
                alert('请尊重劳动成果！www.17sucai.com');
            showAlertAndClear();
                return false;
        }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
                alert('请尊重劳动成果！www.17sucai.com');
            showAlertAndClear();
                return false;
        }else if((e.ctrlKey)&&(e.keyCode==85)){
                alert('请尊重劳动成果！www.17sucai.com');
                showAlertAndClear();
                return false;
        }else if((e.ctrlKey)&&(e.keyCode==83)){
               alert('请尊重劳动成果！www.17sucai.com');
               showAlertAndClear();
               return false;
        }
    }
    document.oncontextmenu=function(){
            alert('请尊重劳动成果！www.17sucai.com');
        showAlertAndClear();
        return false;
    }

// 监听窗口尺寸变化
window.onresize = function () {
    // 检测开发者工具打开引起的窗口高度变化
    if (window.outerHeight - window.innerHeight > 150) {  // 调整阈值为150
        showAlertAndClear();
    }
};


// 定时检测 使用不可见的 console 特性来检测开发者工具
setInterval(function () {
        const devtools = new Image();
        Object.defineProperty(devtools, 'id', {
            get: function () {
                showAlertAndClear();  // 触发警告并清除页面内容
            }
        });
        console.log(devtools);
    }, 1000);  // 每 3 秒检查一次

// 7.0
// document.onkeydown = function (e) {
//         const debounceTime = 2000;  // 防抖时间
//         const currentTime = new Date().getTime();
    
//         if (currentTime - lastKeyPressTime < debounceTime) {
//             return false;
//         }
//         lastKeyPressTime = currentTime;
    
//         e = e || window.event;
    
//         if (e.keyCode === 123 ||  // F12
//             (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
//             (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
//             (e.ctrlKey && e.keyCode === 83)) {  // Ctrl+S
//             if (confirm('检测到不允许的操作。是否关闭页面？')) {
//                 window.location.href = 'about:blank';  // 重定向到空白页
//             }
//             return false;
//         }
//     };

//     function clearPageContent() {
//         document.body.innerHTML = "<h1>页面已被禁用</h1>";
//         document.body.style.backgroundColor = "black";  // 背景变成黑色
//     }
    
//     document.onkeydown = function (e) {
//         const debounceTime = 2000;
//         const currentTime = new Date().getTime();
    
//         if (currentTime - lastKeyPressTime < debounceTime) {
//             return false;
//         }
//         lastKeyPressTime = currentTime;
    
//         e = e || window.event;
    
//         if (e.keyCode === 123 || 
//             (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
//             (e.ctrlKey && e.keyCode === 85) ||  
//             (e.ctrlKey && e.keyCode === 83)) {  
//             if (confirm('检测到不允许的操作。是否禁用页面？')) {
//                 clearPageContent();  // 清空页面内容
//             }
//             return false;
//         }
//     };

//     function clearPageContent() {
//         document.body.innerHTML = "<h1>页面已被禁用</h1>";
//         document.body.style.backgroundColor = "black";
//     }
    
//     setInterval(function () {
//         const devtools = /./;
//         devtools.toString = function () {
//             clearPageContent();  // 触发开发者工具后清空页面内容
//         };
//         console.log(devtools);
//     }, 3000);
    
//8.0(edge不行，谷歌可行)
// document.onkeydown = function() {
//         var e = window.event || arguments[0];
//         if (e.keyCode == 123 || // F12
//             (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
//             (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
//             (e.ctrlKey && e.keyCode == 83)) { // Ctrl+S
//             alert('请尊重劳动成果！www.17sucai.com');
//             return false;
//         }
//     };
    
//     document.oncontextmenu = function() {
//         alert('请尊重劳动成果！www.17sucai.com');
//         return false;
//     };
    
//     // 检测开发者工具打开状态
//     function detectDevTools() {
//         const devToolsOpened = /./;
//         devToolsOpened.toString = function() {
//             alert('检测到开发者工具已打开，页面将关闭！');
//             try {
//                 // 尝试关闭页面
//                 window.open('', '_self').close();
//             } catch (e) {
//                 // 若关闭失败，清空页面并再次尝试关闭
//                 document.body.innerHTML = '';
//                 setTimeout(() => window.open('', '_self').close(), 100);
//             }
//         };
//         console.log(devToolsOpened);
//     }
    
//     // 定时检测
//     setInterval(detectDevTools, 1000);
    
//9.0(edge不行，谷歌可行)
// document.onkeydown = function(e) {
//         var e = e || window.event;
//         // 检测 F12 (开发者工具) 按键
//         if (e.keyCode == 123) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//             return false;
//         }
//         // 检测 Ctrl+Shift+I (打开开发者工具)
//         else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//             return false;
//         }
//         // 检测 Ctrl+U (查看源代码)
//         else if ((e.ctrlKey) && (e.keyCode == 85)) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//             return false;
//         }
//         // 检测 Ctrl+S (保存页面)
//         else if ((e.ctrlKey) && (e.keyCode == 83)) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//             return false;
//         }
//     };
    
//     document.oncontextmenu = function() {
//         alert('请尊重劳动成果！www.17sucai.com');
//         forceClose();
//         return false;
//     };
    
//     // 定义强制关闭页面的函数
//     function forceClose() {
//         try {
//             window.open('', '_self').close();
//         } catch (e) {
//             // 如果无法关闭页面，尝试清除源代码再关闭
//             document.body.innerHTML = '';
//             alert('页面已被清除');
//             setTimeout(() => {
//                 window.open('', '_self').close();
//             }, 100);
//         }
//     }
    
//     // 定时检测控制台是否被打开
//     setInterval(function() {
//         if (window.console && (console.log || console.clear)) {
//             forceClose();
//         }
//     }, 1000);
    
// //10.0
// // 定义强制关闭页面的函数
// function forceClose() {
//         try {
//             window.open('', '_self').close();
//         } catch (e) {
//             // 如果无法关闭页面，尝试清除源代码再关闭
//             document.body.innerHTML = '';
//             alert('页面已被清除');
//             setTimeout(() => {
//                 window.open('', '_self').close();
//             }, 100);
//         }
//     }
    
//     // 键盘事件检测开发者模式
//     document.onkeydown = function(e) {
//         var e = e || window.event;
//         if (e.keyCode == 123 || 
//            (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
//            (e.ctrlKey && e.keyCode == 85) || 
//            (e.ctrlKey && e.keyCode == 83)) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//             return false;
//         }
//     };
    
//     // 禁用右键菜单
//     document.oncontextmenu = function() {
//         alert('请尊重劳动成果！www.17sucai.com');
//         forceClose();
//         return false;
//     };
    
//     // 页面大小检测（部分浏览器会改变窗口大小）
//     var originalWidth = window.outerWidth;
//     var originalHeight = window.outerHeight;
//     setInterval(function() {
//         if (window.outerWidth !== originalWidth || window.outerHeight !== originalHeight) {
//             alert('请尊重劳动成果！www.17sucai.com');
//             forceClose();
//         }
//     }, 500);
    
//     // 控制台检测（较短的间隔）
//     setInterval(function() {
//         if (window.console && (console.log || console.clear)) {
//             try {
//                 // 检测控制台是否处于打开状态
//                 console.clear();
//                 console.log('%c', 'padding:100px 200px;');
//             } catch (e) {
//                 forceClose();
//             }
//         }
//     }, 200);