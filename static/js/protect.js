let lastKeyPressTime = 0;
const debounceTime = 2000;

function clearPageContent() {
    document.body.innerHTML = ''; 
    document.head.innerHTML = '';  
    document.body.style.backgroundColor = "black";
}
function showAlertAndClose() {
        alert('检测到开发者工具被打开！请尊重劳动成果。');
        window.open('', '_self'); 
        window.close(); 
        showAlertAndClose();
    }
function showAlertAndClear() {
    alert('检测到开发者工具被打开！请尊重劳动成果。');
    showAlertAndClose();
    clearPageContent();
}

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
window.onresize = function () {
    if (window.outerHeight - window.innerHeight > 150) {  
        showAlertAndClear();
    }
};
setInterval(function () {
        const devtools = new Image();
        Object.defineProperty(devtools, 'id', {
            get: function () {
                showAlertAndClear();
            }
        });
        console.log(devtools);
    }, 1000); 