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

 function paintToCanvas(){
   const {videoWidth: width, videoHeight: height } = video;
   canvas.width = width;
   canvas.height = height;

   return setInterval(() => { // if you ever need to stop this from painting, you can have access to that interval and can call "clearInterval" on it!
     ctx.drawImage(video, 0 , 0 , width , height);

     // take pixels out of the canvas;
     let pixels = ctx.getImageData(0, 0, width, height);

     // change pixels rgb values
     //pixels = redEffect(pixels);
     pixels = rgbSplit(pixels);

     ctx.globalAlpha = 0.1 ; //transparency value of the image

     // put the new rgb values back;
     ctx.putImageData(pixels, 0, 0);
   }, 16);
 }

function takePhoto(){
  // to play sound
  snap.currentTime = 0;
  snap.play();

  // to take the data out of the canvas;
  const data = canvas.toDataURL("image/jpeg"); // Base64: text-based representation of the picture we take.
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "profile");
  link.innerHTML = `<img src = ${data} alt = "profile photo" />`;
  strip.insertBefore(link, strip.firstChild); //we're going to dump our links in strip

}

function redEffect(pixels){
  for(let i = 0; i < pixels.data.length; i+=4){
       pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
       pixels.data[i + 1] = pixels.data[i + 1] - 50;  // green
       pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
  };

  return pixels;
}

function rgbSplit(pixels){
  for(let i = 0; i < pixels.data.length; i += 4) {
          pixels.data[i - 150] = pixels.data[i + 0]; // red
          pixels.data[i + 100] = pixels.data[i + 1]; // green
          pixels.data[i - 150] = pixels.data[i + 2]; // blue
      }

    return pixels;
  }
video.addEventListener("canplay", paintToCanvas); // that is an event that video will emit. Once this video is playing, it's going to emit an event called
// "canplay", which in turn canvas is going to say "now we should start to paint to the canvas "!
