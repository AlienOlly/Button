// /*
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
// */
const WIDTH = 1500;
const HEIGHT = 500;
var countMiss = 0;
var time = 3;
var checkForRandomPhrase = Infinity;
var checkForRandomColor = Infinity;

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
    
    $score.innerText = 'Раз промазал: ' + countMiss;
}

var settingARandomPhrase = function(param) {
    param = Math.floor(Math.random() * 10);
    if(checkForRandomPhrase !== param){
        checkForRandomPhrase = param;
        return checkForRandomPhrase;
    } else{
        settingARandomPhrase()
    }
}

function setRandomPhrases(){
    const phrases = ['Мимо!', 'Промах!', 'Промахнулся!', 'Старайся лучше!', 'xD', 'Что, не нажимается?', 'Упс', 'Хоба!', 'Вжух!', ':('];
    return phrases[settingARandomPhrase()];
}

$btnBox.addEventListener('click', () => {
    countMiss++
    $limit.classList.remove('limit');
    $btnBox.classList.remove('limit');
    $phrase.innerText = setRandomPhrases();

    getRandomPos()
    if(HardLevelKey){
        timer(time)
        // console.log('time reloaded');
    } else if(MediumLevelKey){
        timer(time)
    }
})

const $timer = document.querySelector('.timer')
    $timer.classList.add('checkEasy');
const $easyMode = document.querySelector('.easy');
const $mediumMode = document.querySelector('.medium');
const $hardMode = document.querySelector('.hard');

function timer(t) {
    var timeInterval = setInterval(() => {
        $timer.innerText = t + ' sec';
        if (t > 0) {
            t--
        } else {
            alert('Ты проиграл!');
            window.location.reload()
            clearInterval(timeInterval)
        }
    }, 1000);
}

var settingARandomColor = function(param) {
    param = Math.ceil(Math.random() * 10);
    if(checkForRandomColor !== param){
        checkForRandomColor = param;
        return checkForRandomColor;
    } else{
        settingARandomColor()
    }
}

function randomBackground() {
    const colors = ['#FF0000', '#00CC00', '#3914AF', '#FFD300', '#33CEC3', '#FF6F00', '#AD009F', '#C6F500', '#000000', '#FFFFFF'];
    var colorInterval = setInterval(() => {
        $body.style.backgroundColor = colors[settingARandomColor()];
    }, 50)
}

var EasyLevelKey = false;
var MediumLevelKey = false;
var HardLevelKey = false;

function levelEasyInclusion(key) {
    if(key){
        if($timer.classList.contains('checkEasy')){
            alert('Этот режим игры уже выбран');
        } else{
            $timer.classList.add('checkEasy');
            $timer.classList.remove('checkMedium');
            $timer.classList.remove('checkHard');
        }
    } else{
        console.log('Error!');
    }
}

$easyMode.addEventListener('click', () => {
    EasyLevelKey = true;
    MediumLevelKey = false;
    HardLevelKey = false;
    levelEasyInclusion(EasyLevelKey)
})

function levelMediumInclusion(key) {
    if(key){
        if($timer.classList.contains('checkMedium')){
            alert('Этот режим игры уже выбран');
        } else{
            $timer.classList.add('checkMedium');
            $timer.classList.remove('checkEasy');
            $timer.classList.remove('checkHard');
            timer(time)
        }
    } else{
        console.log('Error!');
    }
}

$mediumMode.addEventListener('click', () => {
    EasyLevelKey = false;
    MediumLevelKey = true;
    HardLevelKey = false;

    levelMediumInclusion(MediumLevelKey)
})

function levelHardInclusion(key) {
    if(key){
        if($timer.classList.contains('checkHard')){
            alert('Этот режим игры уже выбран');
        } else{
            $timer.classList.add('checkHard');
            $btnBox.classList.add('hardBtn')
            $timer.classList.remove('checkEasy');
            $timer.classList.remove('checkMedium');
            randomBackground()
        }
    } else{
        console.log('Error!');
    }
}

$hardMode.addEventListener('click', () => {
    EasyLevelKey = false;
    MediumLevelKey = false;
    HardLevelKey = true;

    levelHardInclusion(HardLevelKey)
    timer(time)  
})
