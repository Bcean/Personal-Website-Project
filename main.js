let slider = document.getElementById("progressslider");
const audio = document.getElementById("mainmusic");
let currenttimeOutput = document.getElementById("CurrentTimeTag");
let volumesliderInput = document.getElementById("volumeslider");

//set default volume
const defaultVolume = 0.2;

audio.volume = defaultVolume;
volumesliderInput.value = defaultVolume * 100;

//show white progress
setVolumeslider(volumesliderInput);

function setVolumeslider(volumeslider){
    let currentVolume = (volumeslider.value / volumeslider.max)*100;
    volumeslider.style.background = `linear-gradient(90deg, white ${currentVolume}%, grey ${currentVolume}%)`;
}




function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60); // Get the minutes
    let remainingSeconds = Math.floor(seconds % 60); // Get the remaining seconds
    // Add leading zero for single-digit seconds
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

//listen to an input and change gradient off that value
slider.addEventListener("input", function(){
    //varible for current percentage
    let slidercurrentvalue = (slider.value / slider.max)*100;
    slider.style.background = `linear-gradient(90deg, white ${slidercurrentvalue}%, grey ${slidercurrentvalue}%)`;
    //change audio time based on where you click the slider
    audio.currentTime = slider.value;
    
})

//listen to the song time update
audio.addEventListener("timeupdate", function(){
    let audiocurrentvalue = (audio.currentTime / audio.duration)*100;
    slider.value = audio.currentTime;
    slider.style.background = `linear-gradient(90deg, white ${audiocurrentvalue}%, grey ${audiocurrentvalue}%)`;
    //change value of time
    currenttimeOutput.textContent = formatTime(audio.currentTime);
    
})

volumesliderInput.addEventListener("input", function(){
    //varible for current percentage
    let volumeslidercurrentInput = (volumesliderInput.value / volumesliderInput.max)*100;
    volumesliderInput.style.background = `linear-gradient(90deg, white ${volumeslidercurrentInput}%, grey ${volumeslidercurrentInput}%)`;
    //change volume based on where you click the slider
    audio.volume = volumeslidercurrentInput / 100;
    
})
