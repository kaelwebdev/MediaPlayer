function AutoPlay() {}

AutoPlay.prototype.run = function (mP) {
    mP.mute();
    mP.play();
}

export default AutoPlay;