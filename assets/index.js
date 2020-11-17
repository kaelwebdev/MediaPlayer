import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const mP = new MediaPlayer({ item: video });

const btn = document.querySelector('button');
btn.onclick = () => mP.togglePlay();