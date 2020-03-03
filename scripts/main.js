let myImages = document.querySelector('img');

myImages.onclick = function() {
    let mySrc = myImages.getAttribute('src');
    if(mySrc === 'images/pups.jpg') {
      myImages.setAttribute ('src','images/img2.png');
    } else {
      myImages.setAttribute ('src','images/pups.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }