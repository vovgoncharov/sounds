"use strict";
const play = document.querySelector(".play-btn");
const pause = document.querySelector(".pause-btn");
const birds = document.querySelectorAll(".link");
const section = document.querySelector(".section");
const audio = new Audio();

birds.forEach((bird) =>
    bird.addEventListener("click", (e) => {
        let birdSong = e.currentTarget.dataset;
        audio.src = `assets/audio/${birdSong.bird}.mp3`;
        section.style.background = `url(assets/img/${birdSong.bird}.jpg)`;
        audio.currentTime = 0;
        audio.play();
        getPause();
    }),
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
    document.querySelector(".wrap-button").classList.remove("squer");
    document.querySelectorAll(".span-btn").forEach((element) => {
        element.classList.add("pause");
    });
};

const getPlay = () => {
    document.querySelector(".wrap-button").classList.add("squer");
    document.querySelectorAll(".span-btn").forEach((element) => {
        element.classList.remove("pause");
    });
};

play.addEventListener("click", playSong);
pause.addEventListener("click", pauseSong);

play.addEventListener("click", getPause);
pause.addEventListener("click", getPlay);

console.log(20);
