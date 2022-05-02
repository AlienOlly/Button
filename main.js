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
const $confet = document.querySelector('#my-canvas');
const $popup = document.querySelector(".popup");
const $closePopup = document.querySelector(".popup .popup-container .popup-close")
// */
const WIDTH = 1500;
const HEIGHT = 500;
let countMiss = 0; // if you need to look at the ending, replace 0 with 299 and click on the button
let time = 3;
let checkForRandomPhrase = Infinity;
let checkForRandomColor = Infinity;
let EasyLevelKey = false;
let MediumLevelKey = false;
let HardLevelKey = false;

$btnBox.insertAdjacentElement('beforeend', $btn);
$limit.insertAdjacentElement('beforeend', $btnBox);

$limit.style.width = WIDTH + 'px';
$limit.style.height = HEIGHT + 'px';

$container.insertAdjacentElement('beforeend', $limit);
$header.insertAdjacentElement('afterend', $phraseBg);
$phraseBg.insertAdjacentElement('afterend', $phrase);

let posLeft;
let posTop;
    
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function getRandomPos() {
    posLeft = Math.floor(Math.random() * 1000);
    posTop = Math.floor(Math.random() * 100);
    
    $btnBox.style.marginLeft = posLeft + 'px';
    $btnBox.style.marginTop = posTop + 'px';
    
    $score.innerText = 'Раз промазал: ' + countMiss;
}

let settingARandomPhrase = function() {
    let param = Math.floor(Math.random() * 10);
    if(checkForRandomPhrase !== param){
        checkForRandomPhrase = param;
        return checkForRandomPhrase;
    } else{
        return settingARandomPhrase()
    }
}

function setRandomPhrases(){
    const phrases = ['Мимо!', 'Промах!', 'Промахнулся!', 'Старайся лучше!', 'xD', 'Что, не нажимается?', 'Упс', 'Хоба!', 'Вжух!', ':('];
    const a = settingARandomPhrase();
    return phrases[a];
}

$closePopup.addEventListener("click", () => {
    $popup.classList.remove("active");
  });

$btnBox.addEventListener('click', () => {
    countMiss++
    $limit.classList.remove('limit');
    $btnBox.classList.remove('limit');
    $phrase.innerText = setRandomPhrases();

    getRandomPos()
    if(countMiss === 300){
        $confet.classList.add('activeConfetti');
        $popup.classList.add("active");
        $popup.addEventListener("click", function (e) {
            party.confetti(this);
        });
    }

    if(HardLevelKey){
        timer(time)
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
    let timeInterval = setInterval(() => {
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

let settingARandomColor = function(param) {
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
    let colorInterval = setInterval(() => {
        $body.style.backgroundColor = colors[settingARandomColor()];
    }, 50)
}

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