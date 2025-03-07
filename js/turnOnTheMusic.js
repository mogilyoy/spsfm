let player; // Глобальная переменная для YouTube плеера
let isMuted = true; // Начинаем с выключенного звука

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-iframe', {
        videoId: '1aENT6m0Jsw', // ID видео
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 1,
            start: 0,
            mute: 1 // Сначала звук выключен
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('sound-toggle').addEventListener('click', function() {
        if (isMuted) {
            player.unMute(); // Включить звук
        } else {
            player.mute(); // Выключить звук
        }
        isMuted = !isMuted; // Меняем состояние
    });
}