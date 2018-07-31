var juckebox = document.querySelector('ul.player');
var audioPlayer = document.createElement('audio');
var getBody = document.body;

juckebox.addEventListener('click', function (e) {
    'use strict';
    var songName = e.target.getAttribute('data-src'),
        songPlaying = document.querySelector('#player');
    
    if (songPlaying) {
        
        if (songName === songPlaying.getAttribute('src')) {
            if (songPlaying.paused) {
                songPlaying.play();
                e.target.id = 'playing';
            } else {
                songPlaying.pause();
                e.target.id = 'paused';
            }
        } else {
            songPlaying.src = songName;
            songPlaying.play();
            if (document.querySelector('#playing')) {
                document.querySelector('#playing').id = '';
                e.target.id = 'playing';
            } else {
                document.querySelector('#paused').id = '';
            }
            e.target.id = 'playing';
        }
        
    } else {
        audioPlayer.id = 'player';
        e.target.id = 'playing';
        audioPlayer.src = songName;
        getBody.appendChild(audioPlayer);
        audioPlayer.play();
        
        audioPlayer.addEventListener('ended', function () {
            audioPlayer.parentNode.removeChild(audioPlayer);
            e.target.id = '';
        }, false);
    }
    
}, false);