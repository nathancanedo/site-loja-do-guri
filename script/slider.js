const navigation1 = document.querySelector('#nav1');
const navigation2 = document.querySelector('#nav2');
const navigation3 = document.querySelector('#nav3');
const navigation4 = document.querySelector('#nav4');
const navigation5 = document.querySelector('#nav5');

function nav1() {
    navigation1.style.backgroundColor = "white";
    removeNavBackground();
    count = 1
}

function nav2() {
    navigation2.style.backgroundColor = "white";
    removeNavBackground();
    count = 2
}

function nav3() {
    navigation3.style.backgroundColor = "white";
    removeNavBackground();
    count = 3
}

function nav4() {
    navigation4.style.backgroundColor = "white";
    removeNavBackground();
    count = 4
}

function nav5() {
    navigation5.style.backgroundColor = "white";
    removeNavBackground();
    count = 5
}

function removeNavBackground() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
}

let count = 1;

document.querySelector('#slide1').checked = true;
navigation1.style.backgroundColor = 'white';

setInterval( function(){
    nextImage();
}, 3000)

function nextImage() {
    count++;
    if(count > 5) {
        count = 1;
    }

    document.querySelector('#slide' + count).checked = true;

    document.querySelector('#nav' + count).style.backgroundColor = 'white';

    if (count === 1) {
        navigation5.style.backgroundColor = '';
    } else {
        document.querySelector('#nav' + (count - 1)).style.backgroundColor = '';
    }
}