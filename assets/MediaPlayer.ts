interface ConfigObj {
    item: HTMLMediaElement;
    plugins?: Array<any>;
}

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config: ConfigObj) {
        this.media = config.item;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlugins() {
        /**
         * Description: is a function that initializes
         * the media player plugins.
         */
        // The player is for example a video player
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    play() {
        let playPromise = this.media.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // success
            })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleMute() {
        this.media.muted ? this.unmute() : this.mute();
    }
}

export default MediaPlayer;
