const currentImage = document.querySelector("#image");
const images = ["images/pilt 1.jpg","images/pilt 2.png","images/pilt 3.png"];

function changeimage() {
    console.log("Hello from script file.");

    let randomNumber = Math.floor(Math.random() * images.length);

    console.log(images[randomNumber]);
    
    currentImage.src = images[randomNumber];

}