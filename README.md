# JS30 #19: js-unreal-webcam-fun
This is a vanilla JavaScript project that captures a video stream from user's webcam and manipulates the pixels by using getUserMedia() and HTML5 Canvas.
## Installation
Clone this repository with the command below
``` 
git clone https://github.com/ozrn/js-unreal-webcam-fun 
```
Change directory to the cloned folder
```
cd js-unreal-webcam-fun
```
Check whether node and npm have been installed globally on your machine with the below commands
```
node -v // node version installed on your machine
npm -v //  npm version installed on your machine
```
In this step, install the project dependencies and then start with the following commands
```
npm install
npm start
```

Run the project at http://localhost:3000
### Usage & Features
* Camera permission is requested from user
* The canvas size is adjusted to the video size that comes off the user's camera
* Pictures are taken from the webcam with snap sound and they are also downloadable
* Images inserted into the strip can be filtered by modifying based on red color or can be given to ghosting effect by changing transparency value
### Acknowledgement
This is the nineteenth challenge of JS30 projects by Wes Bos.





