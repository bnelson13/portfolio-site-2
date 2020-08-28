let typeI = 0;
let typeText = ['Hello.','My name is Brad','Welcome'];
let typeWriterDiv = document.querySelector('.typewrite');

function typeWriter() {
    let i =0;
    let txt = typeText[i];
    if (typeI < txt.length) {
        typeWriterDiv.innerHTML += txt.charAt(typeI);
        typeI++;
        setTimeout(typeWriter, 160);
    }
}

window.onload = setTimeout(typeWriter, 3000);


