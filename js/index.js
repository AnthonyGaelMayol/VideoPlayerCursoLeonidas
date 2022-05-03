function playVideo() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function pauseVideo() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

function backwardVideo() {
    $video.currentTime-=10
}

function forwardVideo() {
    $video.currentTime+=10
}

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value= $video.currentTime;
    console.log('Tiempo Actual: ', $video.currentTime);
}

function handleInput() {
    $video.currentTime = $progress.value;
}

const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', playVideo);
$pause.addEventListener('click', pauseVideo);
$backward.addEventListener('click', backwardVideo);
$forward.addEventListener('click', forwardVideo);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);