'use strict';


export class operacionVideos {
    play(video) {
        video.play()
        console.log(
            `propiedad:elemento.play()`
        );
    }
    pause(video) {
        video.pause()
        console.log(
            `propiedad:elemento.pause()`
        );
    }
    reload(video) {
        video.load()
        console.log(
            `propiedad:elemento.load()`
        );
    }
    mute(video) {
        video.muted = true;
        console.log(
            `propiedad:elemento.muted = "true"`
        );
    }
    noMute(video){
        video.muted = false;
        console.log(
            `propiedad:elemento.muted = "false"`
        );
    }
    bajarVol(video) {
        video.volume -= .1;
        console.log(`menos: ${video.volume}`)
    if (video.volume <= 0.1) {
        alert('no puedes bajar mas el volumen')
        }
        console.log(
            `propiedad:elemento.volume -= .1`
        );
    }
    subirVol(video){
        video.volume += .1;
        console.log(`mas: ${video.volume}`)
        if (video.volume >= 1) {
        alert('no puedes subir mas el volumen')
        }
        console.log(
            `propiedad:elemento.volume += .1`
        );
    }
    adelantarVideo(video) {
        video.currentTime += 10
        console.log(
            `propiedad:elemento.currentTime += 10`
        );
    }
    atrasarVideo(video) {
        video.currentTime -= 10
        console.log(
            `propiedad:elemento.currentTime -= 10`
        );
    }
    adelantarx2(video){
        video.currentTime += 22;
        console.log(
            `propiedad:elemento.currentTime += 22`
        );
    }
    atrasarx2(video){
        video.currentTime -= 22;
        console.log(
            `propiedad:elemento.currentTime -= 22`
        );
    }
    mayorVelocidad(){
        video.playbackRate += .1;
        console.log(
            `propiedad:elemento.playbackRate += .1`
        );
    }
    menorVelocidad(){
        video.playbackRate -= .1;
        console.log(
            `propiedad:elemento.playbackRate -= .1`
        );
    }
}