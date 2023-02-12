"use strict";
const play = document.querySelector(".play-btn");
const pause = document.querySelector(".pause-btn");
const birds = document.querySelectorAll(".link");
const section = document.querySelector(".section");
const audio = new Audio();
const img = new Image();

birds.forEach((bird) =>
    bird.addEventListener("click", (e) => {
        let birdSong = e.currentTarget.dataset;
        audio.src = `assets/audio/${birdSong.bird}.mp3`;
        img.src = `assets/img/${birdSong.bird}.jpg`;
        img.onload = () => {
            document.body.style.backgroundImage = `url(assets/img/${birdSong.bird}.jpg)`;
        };
        console.log(img.src);
        audio.currentTime = 0;
        audio.play();
        getPause();
    })
);

const playSong = () => {
    audio.src = "assets/audio/forest.mp3";
    audio.currentTime = 0;
    audio.play();
};
const pauseSong = () => {
    audio.pause();
};

const getPause = () => {
    play.style.display = "none";
    pause.style.display = "block";
};

const getPlay = () => {
    play.style.display = "block";
    pause.style.display = "none";
};

play.addEventListener("click", playSong);
pause.addEventListener("click", pauseSong);

play.addEventListener("click", getPause);
pause.addEventListener("click", getPlay);
