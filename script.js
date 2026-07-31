const tuk = document.getElementById("tuktuk");
const song = document.getElementById("song");
const hint = document.getElementById("hint");

let played = false;

tuk.addEventListener("click", function(){

    hint.style.display = "none";

    if(!played){
        played = true;
        song.play();
    }

});

song.addEventListener("ended", function(){
    song.currentTime = 0;
    song.play();
});
