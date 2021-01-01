import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const mP = new MediaPlayer({
    item: video,
    plugins: [new AutoPlay(),
        new AutoPause()
    ]});

const btn1: HTMLElement = document.querySelector('#playPause');
const btn2: HTMLElement = document.querySelector('#muteUnmute');
btn1.onclick = () => mP.togglePlay();
btn2.onclick = () => mP.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}