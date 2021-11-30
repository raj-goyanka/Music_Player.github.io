console.log("Hii")

let songIndex=1;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.querySelector("#masterPlay");
let myProgressBar=document.getElementById("myProgressbar");
let songItems=document.querySelectorAll(".songItem");
let check=true;







let songs = [
{songName: "Muskurane ki Vjah Tum Ho",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName: "Kashmir Main,Tu Kanya Kumari",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName: "Ready Steady Po",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName: "Bom Diggy Diggy Bom",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName: "Daru Badnam Kr Di",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName: "DJ Waley Babu",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
{songName: "High Rated Gabru",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
{songName: "Lahore",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
{songName: "Looking For Love",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
{songName: "Sun Meri Shehzadi",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},




]

i=0;
songItems.forEach((element,i) => {
  element.querySelector("img").src=songs[i].coverPath;
  element.querySelector(".songName").innerText=songs[i].songName;
  i++;
  


})


masterPlay.addEventListener("click",() => {
  if(audioElement.paused || audioElement.currentTime<=0) {
      audioElement.play();
      document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
      document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');
      document.querySelector("#disco_img").style.opacity =1;
      document.querySelector("#master_text").innerText=songs[songIndex-1].songName;
      tem=document.querySelectorAll(".time_i")[songIndex-1];
      tem.firstElementChild.classList.remove("fa-play-circle");
      tem.firstElementChild.classList.add("fa-pause-circle");
  }else{
     audioElement.pause();
     document.querySelector("#masterPlay").firstChild.classList.remove("fa-pause-circle");
      document.querySelector("#masterPlay").firstChild.classList.add('fa-play-circle');
      document.querySelector("#disco_img").style.opacity =0;
      document.querySelector("#master_text").innerText=songs[songIndex-1].songName;
      tem=document.querySelectorAll(".time_i")[songIndex-1];
      tem.firstElementChild.classList.remove("fa-pause-circle");
      tem.firstElementChild.classList.add("fa-play-circle");














    
  }

})


audioElement.addEventListener('timeupdate',() => {
   console.log("Time update");
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;



})







myProgressBar.addEventListener('change',() => {

audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})




const play_all=() => {
  document.querySelectorAll(".time_i").forEach((element)=>{
    element.firstElementChild.classList.remove('fa-pause-circle');
    element.firstElementChild.classList.add('fa-play-circle');
})



}



Array.from(document.querySelectorAll(".time_i")).forEach((element)=>{
   element.addEventListener('click',(e) => {
         preSongIndex=songIndex;
         songIndex=parseInt(element.id);
         play_all();
         if(preSongIndex==songIndex )
         {
           check=!check;
           if(check) {
      audioElement.pause();
      element.firstElementChild.classList.remove('fa-pause-circle');   
      element.firstElementChild.classList.add('fa-play-circle');  
      document.querySelector("#disco_img").style.opacity =0;
      document.querySelector("#masterPlay").firstChild.classList.remove("fa-pause-circle");
      document.querySelector("#masterPlay").firstChild.classList.add('fa-play-circle');

           }else{
         audioElement.play();
         element.firstElementChild.classList.remove('fa-play-circle');   
         element.firstElementChild.classList.add('fa-pause-circle'); 
         document.querySelector("#disco_img").style.opacity =1;   
         document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
         document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');
      
      
      
      }   


         }else{
         element.firstElementChild.classList.remove('fa-play-circle');   
         element.firstElementChild.classList.add('fa-pause-circle');  
         audioElement.src=`songs/${songIndex}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
         document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
         document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');
         document.querySelector("#disco_img").style.opacity =1;
         document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
         document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');






         }
         document.querySelector("#master_text").innerText=songs[songIndex-1].songName;
         







        })

})

document.querySelector("#pre").addEventListener("click",()=>{
    if(songIndex<=1)
       songIndex=10;
    else
       songIndex--;
    
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    play_all();
    document.querySelector("#master_text").innerText=songs[songIndex-1].songName;
    document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
    document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');
    document.querySelector("#disco_img").style.opacity =1; 
    tem=document.querySelectorAll(".time_i")[songIndex-1];
    tem.firstElementChild.classList.remove("fa-play-circle");
    tem.firstElementChild.classList.add("fa-pause-circle");

})

document.querySelector("#next").addEventListener("click",()=>{
  if(songIndex>=10)
     songIndex=1;
  else
     songIndex++;

  audioElement.src=`songs/${songIndex}.mp3`;
  audioElement.currentTime=0;
  play_all();
  audioElement.play();
  document.querySelector("#master_text").innerText=songs[songIndex-1].songName;
  document.querySelector("#masterPlay").firstChild.classList.remove("fa-play-circle");
  document.querySelector("#masterPlay").firstChild.classList.add('fa-pause-circle');
  document.querySelector("#disco_img").style.opacity =1;   
  tem=document.querySelectorAll(".time_i")[songIndex-1];
  tem.firstElementChild.classList.remove("fa-play-circle");
  tem.firstElementChild.classList.add("fa-pause-circle");




})



