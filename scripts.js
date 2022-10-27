const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false}) // this is a promise
  .then(mediaStream => {
    console.log(mediaStream);
    video.srcObject = mediaStream;
    video.play();
  })
  .catch(err => {
    console.log("Access user camera has been disabled", err);
  });
}
 getVideo();
