function MediaPlayer(config) {
    this.media = config.item;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    /**
     * Description: is a function that initializes
     * the media player plugins.
     */
    
    // The player is for example a video player
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value
        },
    }
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

MediaPlayer.prototype.play = function () {
    let playPromise = this.media.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // success
        })
        .catch(error => {
          console.error(error);
        });
      }
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
};

MediaPlayer.prototype.toggleMute  = function () { 
    this.media.muted ? this.unmute() : this.mute();
};

export default MediaPlayer;
