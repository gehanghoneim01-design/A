const tuk=document.getElementById("tuktuk");
const horn=document.getElementById("horn");
const song=document.getElementById("song");
const hint=document.getElementById("hint");

let started=false;

tuk.onclick=()=>{

hint.style.display="none";

if(horn){
horn.currentTime=0;
horn.play().catch(()=>{});
}

if(!started){

started=true;

setTimeout(()=>{
song.play().catch(()=>{});
},700);

}

};

setInterval(()=>{

if(started && horn){

horn.currentTime=0;
horn.play().catch(()=>{});

}

},15000);

song.onended=()=>{
song.currentTime=0;
song.play();
};
