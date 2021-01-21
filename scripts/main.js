let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//获取新按钮和标题的引用，保存至变量中
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//setUserName函数设置个性化欢迎信息
function setUserName() {
    //promp函数弹出对话框
    let myName = prompt('请输入你的名字');
    //检查用户是否输入了 null 或者空名字：
    if (!myName || myName === null) {
        setUserName();
    } else {
        /*调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。*/
        localStorage.setItem('name', myName);
        //将h1的textContent设置成字符串+myName
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;       
    }
}

/* 按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数。*/
myButton.onclick = function() {
    setUserName();
}