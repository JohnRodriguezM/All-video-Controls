'use strict';
import { operacionVideos } from "../dist/clases.js";
const sectionMain = document.getElementById("sectionMain");
const video = document.getElementById('video');
console.log(video);
/*
asi un evento se ejecuta una sola vez

let atributo = video.getAttribute('preload')
console.log(atributo.length);
function evento(e){
    e.target.removeEventListener(e.type,evento)
    // codigo a ejecutar
    console.log(e.target)
}
video.addEventListener('mouseover', evento)
*/
const arrayButton = [];
for (let i = 0; i < 13; i++) {
    let x = document.createElement('button');
    arrayButton.push(x);
}
arrayButton.forEach(item => {
    item.setAttribute('class', 'button');
});
// btn Play
arrayButton[0].textContent = 'Play';
// btn pause
arrayButton[1].textContent = 'pause';
//btn reload
arrayButton[2].textContent = 'reload';
//btn mute
arrayButton[3].textContent = 'mute';
// btn != mute
arrayButton[4].textContent = 'quitar mute';
// btn less volume
arrayButton[5].textContent = 'bajar Volumen';
// btm plus volume
arrayButton[6].textContent = 'subir Volumen';
// btn adelantar 10 seg
arrayButton[7].textContent = 'adelantar 10 seg';
// btn atrasar 10 segundos
arrayButton[8].textContent = 'atrasar 10 seg';
// btn adelantar 22 segundos
arrayButton[9].textContent = 'adelantar 22 seg';
// btn atrasar 22 segundos
arrayButton[10].textContent = 'atrasar 22 seg';
arrayButton[11].textContent = 'mayor velocidad';
arrayButton[12].textContent = 'menor velocidad';
sectionMain.append(...arrayButton);
const miVideoPlay = arrayButton[0].addEventListener('click', () => {
    return new operacionVideos().play(video);
});
const miVideoPause = arrayButton[1].addEventListener('click', () => {
    return new operacionVideos().pause(video);
});
const load = arrayButton[2].addEventListener('click', () => {
    return new operacionVideos().reload(video);
});
const miVideoMute = arrayButton[3].addEventListener('click', () => {
    return new operacionVideos().mute(video);
});
const miVideoNoMute = arrayButton[4].addEventListener('click', () => {
    return new operacionVideos().noMute(video);
});
const bajar = arrayButton[5].addEventListener('click', () => {
    return new operacionVideos().bajarVol(video);
});
const subir = arrayButton[6].addEventListener('click', () => {
    return new operacionVideos().subirVol(video);
});
const adelantarVideo = arrayButton[7].addEventListener('click', () => {
    return new operacionVideos().adelantarVideo(video);
});
const atrasarVideo = arrayButton[8].addEventListener('click', () => {
    return new operacionVideos().atrasarVideo(video);
});
const adelantarDoble = arrayButton[9].addEventListener('click', () => {
    return new operacionVideos().adelantarx2(video);
});
const atrasarDoble = arrayButton[10].addEventListener('click', () => {
    return new operacionVideos().atrasarx2(video);
});
const mayorVelocidad = arrayButton[11].addEventListener('click', () => {
    return new operacionVideos().mayorVelocidad(video);
});
const menorVelocidad = arrayButton[12].addEventListener('click', () => {
    return new operacionVideos().menorVelocidad(video);
});
//# sourceMappingURL=index.js.map