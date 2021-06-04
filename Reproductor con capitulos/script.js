document.getElementsByTagName("h1")[0].style.fontSize = "30px";

var miVideo;
var videoActual;

var sources = ["https://ia600803.us.archive.org/17/items/MickeyMouse-RunawayTrain/Film-42.mp4",
     "http://www.royray.name/videos/FG-S07E09-Brian-Sleep-Fart.mp4", "http://html5doctor.com/demos/video-canvas-magic/video.webm"];

function iniciar(){
  videoActual=0;
  miVideo = document.querySelector("#repro1");
}

function videoPrevio(){  
   
  if (videoActual>0){
   videoActual--;
  }
  miVideo.src = sources[videoActual]
  miVideo.load();
}

function reproducirVideo(){  
  miVideo.play();
}

function detenerVideo(){
  miVideo.pause();
}

function reiniciarVideo(){
  miVideo.currentTime = 0;
}

function siguienteVideo(){
  if (videoActual<sources.length && videoActual>=0 && videoActual!=sources.length-1){
   videoActual++;
  }else if(videoActual==sources.length-1){
   videoActual=0;
  }
  miVideo.src = sources[videoActual]
  miVideo.load();
}