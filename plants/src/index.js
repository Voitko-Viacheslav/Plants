import './sass/main.scss' // подключаем SASS
import './sass/normalize.scss' // подключаем normalize
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