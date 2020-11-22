import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const mP = new MediaPlayer({ item: video,  plugins: [new AutoPlay]});

const btn = document.querySelector('button');
btn.onclick = () => mP.togglePlay();