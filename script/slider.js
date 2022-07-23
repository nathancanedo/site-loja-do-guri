function nav1() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
    count = 1
}

function nav2() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
    count = 2
}

function nav3() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
    count = 3
}

function nav4() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
    count = 4
}

function nav5() {
    document.querySelector('#nav' + count).style.backgroundColor = '';
    count = 5
}

let count = 1;

document.querySelector('#slide1').checked = true;
document.querySelector('#nav1').style.backgroundColor = 'white';

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
        document.querySelector('#nav5').style.backgroundColor = '';
    } else {
        document.querySelector('#nav' + (count - 1)).style.backgroundColor = '';
    }
}