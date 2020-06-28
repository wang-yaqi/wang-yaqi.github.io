let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/dog-icon.jpg') {
        myImage.setAttribute('src','image/littledog.png');
    }else {
        myImage.setAttribute('src','image/dog-icon.jpg');
    }
}


let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');

    console.log(myName);
    if (!myName || myName === null) {
        setUserName();
    }else {
        localStorage.setItem('name',myName);
        myHeading.textContent = '欢迎您,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name')
    console.log(storedName);
    myHeading.textContent = '欢迎您，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
