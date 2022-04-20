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
var time = 2;

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

const $timer = document.querySelector('.timer')
const $easyMode = document.querySelector('.easy');
    $easyMode.classList.add('check');
const $mediumMode = document.querySelector('.medium');
const $hardMode = document.querySelector('.hard');

function timer(t) {
    var interval = setInterval(() => {
        $timer.innerText = t + ' sec';
        if (t > 0) {
            t--;
        } else {
            clearInterval(interval)
        }
    }, 1000);
    if(t === 0){
        alert('Ты проиграл!');
        window.location.reload()
    }
}


// function mediumLevelRules() {
// }

$easyMode.addEventListener('click', () => {
    if($easyMode.classList.contains('check')){
        alert('Этот режим игры уже выбран');
    } else{
        $easyMode.classList.add('check');
        $mediumMode.classList.remove('check');
        $hardMode.classList.remove('check');
    }
})

$mediumMode.addEventListener('click', () => {
    if($mediumMode.classList.contains('check')){
        alert('Этот режим игры уже выбран');
    } else{
        $mediumMode.classList.add('check');
        $easyMode.classList.remove('check');
        $hardMode.classList.remove('check');
    }
    
    timer(time)
})

$hardMode.addEventListener('click', () => {
    if($hardMode.classList.contains('check')){
        alert('Этот режим игры уже выбран');
    } else{
        $hardMode.classList.add('check');
        $easyMode.classList.remove('check');
        $mediumMode.classList.remove('check');
    }
})
