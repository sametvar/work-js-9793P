function myFunction() {
    let x = document.getElementById("there");
    let sayi =Number(x.innerHTML);
    x.innerHTML=sayi+1;
}


function music_one() {
 let audio = document.getElementById("audio1");
    if (audio.paused) {
        audio.play();
    }else {
        audio.pause();
    }
};

function music_two() {
    let audio = document.getElementById("audio2");
       if (audio.paused) {
           audio.play();
       } else {
        audio.pause();
       }
   };

function music_there() {
    let audio =document.getElementById("audio3");
    if (audio.paused) {
        audio.play();
    }else {
        audio.pause();
    }
}   



function setVolume1(){
    let volume_slider = document.getElementById("volume");
    audio1.volume = volume_slider.value / 100;
}

function setVolume2(){
    let volume_slider = document.getElementById("volume");
    audio2.volume = volume_slider.value / 100;
 }

 function setVolume3(){
    let volume_slider = document.getElementById("volume");
    audio3.volume = volume_slider.value / 100;
 }




 