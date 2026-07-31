const tuktuk = document.getElementById("tuktuk");
const horn = document.getElementById("horn");
const song = document.getElementById("song");
const hint = document.getElementById("hint");

let started = false;

// أول ضغطة
tuktuk.addEventListener("click", () => {

    // اختفاء الرسالة
    hint.style.display = "none";

    // كلاكس
    horn.currentTime = 0;
    horn.play();

    // تشغيل الأغنية مرة واحدة
    if (!started) {

        started = true;

        setTimeout(() => {
            song.play();
        }, 900);

    }

});

// كلاكس كل 15 ثانية أثناء الأغنية
setInterval(() => {

    if (started) {

        horn.currentTime = 0;
        horn.play();

    }

},15000);


// لو الأغنية خلصت تبدأ من أول
song.addEventListener("ended", () => {

    song.currentTime = 0;
    song.play();

});


// عند الضغط على زر Space
document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        horn.currentTime=0;
        horn.play();

    }

});
