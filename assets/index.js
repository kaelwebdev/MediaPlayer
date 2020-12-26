import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const mP = new MediaPlayer({ item: video,  plugins: [new AutoPlay]});

const btn1 = document.querySelector('#playPause');
const btn2 = document.querySelector('#muteUnmute');
btn1.onclick = () => mP.togglePlay();
btn2.onclick = () => mP.toggleMute();