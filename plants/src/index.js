import './sass/main.scss' // подключаем SASS
import './sass/normalize.scss' // подключаем normalize
import './sass/width1000.scss'  // подключаем при ширине экрана 1000
import './sass/width768.scss'  // подключаем при ширине экрана 768
import './sass/width675.scss'  // подключаем при ширине экрана 675
import './sass/width380.scss'  // подключаем при ширине экрана 380


// import './index.html';
// const html = require('./index.html')

import leaf from './assets/leafs.png'
const leafs = document.querySelector('.leafs');
leafs.src = leaf;

import plan from './assets/plant.jpg'
const plant = document.querySelector('.plant')
plant.src = plan;

import cardP1 from './assets/card_1.png'
const cardPic1 = document.querySelector('.card__pic-1');
cardPic1.src = cardP1;


import cardP2 from './assets/card_2.png'
const cardPic2 = document.querySelector('.card__pic-2');
cardPic2.src = cardP2;

import cardP3 from './assets/card_3.png'
const cardPic3 = document.querySelector('.card__pic-3');
cardPic3.src = cardP3;

import cardP4 from './assets/card_4.png'
const cardPic4 = document.querySelector('.card__pic-4');
cardPic4.src = cardP4;

import cardP5 from './assets/card_5.png'
const cardPic5 = document.querySelector('.card__pic-5');
cardPic5.src = cardP5;

import cardP6 from './assets/card_6.png'
const cardPic6 = document.querySelector('.card__pic-6');
cardPic6.src = cardP6;

import cardP1_768 from './assets/card_1_768.png'
import cardP2_768 from './assets/card_2_768.png'
import cardP3_768 from './assets/card_3_768.png'
import cardP4_768 from './assets/card_4_768.png'
import cardP5_768 from './assets/card_5_768.png'
import cardP6_768 from './assets/card_6_768.png'

if (document.documentElement.clientWidth <= 767) {
    cardPic1.src = cardP1_768;
    cardPic2.src = cardP2_768;
    cardPic3.src = cardP3_768;
    cardPic4.src = cardP4_768;
    cardPic5.src = cardP5_768;
    cardPic6.src = cardP6_768; 
}

  

import leafsSm from './assets/leafs-small.png'
const leafsSmall = document.querySelector('.leafs-small')
leafsSmall.src = leafsSm;


import woma from './assets/woman.png'
const woman = document.querySelector('.woman')
woman.src = woma;

// import myim from './assets/bg.jpg' // подключаем
// const myimg = document.getElementById('myimg')
// myimg.src = myim

const hello = require('./js/hello')