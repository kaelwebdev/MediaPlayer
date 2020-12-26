function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
    /**
     * Description: Start plugin
     * @player: for example a video player
     */
    player.muted = true;
    player.play();
}

export default AutoPlay;