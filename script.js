const tuktuk = document.getElementById("tuktuk");
const horn = document.getElementById("horn");
const song = document.getElementById("song");

let started = false;

tuktuk.addEventListener("click", () => {

    // أول ضغطة فقط
    if(started) {

        horn.currentTime = 0;
        horn.play();

        return;
    }

    started = true;

    // كلاكس
    horn.play();

    // بعد الكلاكس تبدأ الأغنية
    setTimeout(() => {

        song.play();

    },1200);

});

// كلاكس كل 18 ثانية أثناء الأغنية
setInterval(() => {

    if(started){

        horn.currentTime = 0;
        horn.play();

    }

},18000);
