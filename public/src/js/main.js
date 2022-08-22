const bars = document.querySelector('.js-bars');
const menu = document.querySelector('.js-menu');
const xmarks = document.querySelectorAll('.js-close');
const model = document.querySelector('.js-model');

function show() {
    menu.classList.add('active');
    bars.classList.add('active');
    model.classList.add('active');
}

function hide() {
    menu.classList.remove('active');
    bars.classList.remove('active');
    model.classList.remove('active');
}

bars.addEventListener('click', show);
model.addEventListener('click', hide);

for (const xmark of xmarks) {
    xmark.addEventListener('click', hide);
}

// click vào menu chuyển sang mục khác
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const image = document.querySelector('.img');

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onClick = function () {
        if (index != 0) {
            image.classList.remove('active');
        } else {
            image.classList.add('active');
        }

        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    };
});

// click vào button
const button = document.querySelectorAll('.button__link');
const panes1 = document.querySelectorAll('.tab-pane1');

button.forEach((e, index) => {
    const pane1 = panes1[index];

    e.onClick = function () {
        $('.tab-pane.active').classList.remove('active');
        $('.tab-item').classList.remove('active');

        if (index === 0) {
            $('.tab-item2').classList.add('active');
            $('.tab-item3').classList.remove('active');
            bars.classList.remove('active');
            menu.classList.remove('active');
        }

        if (index === 1) {
            $('.tab-item2').classList.remove('active');
            $('.tab-item3').classList.add('active');
            bars.classList.remove('active');
            menu.classList.remove('active');
        }

        this.classList.add('active');
        pane1.classList.add('active');
    };
});

// chữ nhấp nháy
// const fontElement = document.querySelectorAll('.blue');
// var index = 0;

// setInterval(function() {
//     fontElement.forEach(function(e) {
//       e.classList.remove('addblue');
//     })

//     fontElement[index].classList.add('addblue');
//     index++;

//     if(index == fontElement.length){
//       index = 0;
//     }
// }, 500);

//phông chữ ở trang HOME chạy liên tục
const title1 = document.querySelector('.visible1');
const title2 = document.querySelector('.visible2');
const title3 = document.querySelector('.visible3');
const title4 = document.querySelector('.visible4');

const letter1 = 'quang duc ';
const letter2 = 'a web designer';
const letter3 = 'a blogger';
const letter4 = 'a freelancer';

var index1 = 0,
    index2 = 0,
    index3 = 0,
    index4 = 0;

setInterval(function () {
    if (index1 != letter1.length) {
        title4.textContent = ' ';
        title1.textContent += letter1[index1];
        index1++;
    }

    if (index1 == letter1.length) {
        title1.textContent = ' ';
        title2.textContent += letter2[index2];
        index2++;
    }

    if (index2 > letter2.length) {
        title2.textContent = ' ';
        title3.textContent += letter3[index3];
        index3++;
    }

    if (index3 > letter3.length) {
        title3.textContent = ' ';
        title4.textContent += letter4[index4];
        index4++;
    }

    if (index1 == letter1.length && index2 > letter2.length && index3 > letter3.length && index4 == letter4.length) {
        index1 = 0;
        index2 = 0;
        index3 = 0;
        index4 = 0;
    }
}, 400);
