const $body = document.querySelector('body'); 
const $score = document.querySelector('.score');
const $container = document.querySelector('.container');
const $limit = document.createElement('div');
    $limit.classList.add('limit');
const $btnBox = document.createElement('div');
    $btnBox.classList.add('btnBox');
    $btnBox.classList.add('limit');
const $btn = document.createElement('a');
    $btn.classList.add('btn');
    $btn.innerText = 'Нажми';
const $header = document.querySelector('.header');
    const $phraseBg = document.createElement('div');
    $phraseBg.classList.add('centering');
const $phrase = document.createElement('p');
    $phrase.classList.add('phrase');

const WIDTH = 1500;
const HEIGHT = 500;
var count = 0;

$btnBox.insertAdjacentElement('beforeend', $btn);
$limit.insertAdjacentElement('beforeend', $btnBox);

$limit.style.width = WIDTH + 'px';
$limit.style.height = HEIGHT + 'px';

$container.insertAdjacentElement('beforeend', $limit);
$header.insertAdjacentElement('afterend', $phraseBg);
$phraseBg.insertAdjacentElement('afterend', $phrase);

var posLeft;
var posTop;
    
function getRandomPos() {
    posLeft = Math.floor(Math.random() * 1000);
    posTop = Math.floor(Math.random() * 100);
    
    $btnBox.style.marginLeft = posLeft + 'px';
    $btnBox.style.marginTop = posTop + 'px';
    
    $score.innerText = 'Раз промазал: ' + count;
}

function setRandomPhrases(){
    const phrases = ['Мимо!', 'Промах!', 'Промахнулся!', 'Старайся лучше!', 'xD', 'Что, не нажимается?', 'Упс', 'Хоба!', 'Вжух!', ':('];
    let n = Math.floor(Math.random() * 10);

    return (phrases[n]);
}

$btnBox.addEventListener('click', () => {
    count++
    $limit.classList.remove('limit');
    $btnBox.classList.remove('limit');
    $phrase.innerText = setRandomPhrases();

    getRandomPos()
})

const $easyMod = document.querySelector('.easy');
const $mediumMod = document.querySelector('.medium');
const $hardMod = document.querySelector('.hrad');

$easyMod.addEventListener('click', () => {
    $easyMod.classList.add('check')
})
