function logMouse(e){
    console.log("X: ", e.clientX + " Y: " + e.clientY);
    let pos = e;
    let dot = document.createElement('div');
    dot.className = "dot";
    dot.id = "dot";

    dot.style.left = pos.x - 3 + "px";
    dot.style.top = pos.y -3 + "px";
    document.body.appendChild(dot);
}

let start = document.getElementById('startRecording');
start.addEventListener('click', function () {
    document.querySelector('#mouse-position').addEventListener('mousemove', logMouse);
});

let stop = document.getElementById('stopRecording');
stop.addEventListener('click', function () {
    document.querySelector('#mouse-position').removeEventListener('mousemove', logMouse);
});