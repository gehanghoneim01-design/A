const tuk = document.getElementById("tuktuk");
const song = document.getElementById("song");
const hint = document.getElementById("hint");

let started = false;

tuk.onclick = () => {

    hint.style.display = "none";

    if (!started) {
        started = true;
        song.play();
    }

};

song.onended = () => {
    song.currentTime = 0;
    song.play();
};
