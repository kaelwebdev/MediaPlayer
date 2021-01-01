import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player:MediaPlayer) {
        /**
         * Description: Start plugin
         * @player: for example a video player
         */
        player.media.muted = true;
        player.play();
    }
}


export default AutoPlay;