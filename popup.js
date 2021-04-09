let cordsArray = [];
function logMouse(e){
    let cords = { x:e.clientX, y:e.clientY };
    cordsArray.push(cords);
    let pos = e;
    let dot = document.createElement('div');
    dot.className = "dot";
    dot.id = "dot";

    dot.style.left = pos.x - 3 + "px";
    dot.style.top = pos.y -3 + "px";
    document.body.appendChild(dot);

    let cordsString = JSON.stringify(cordsArray);
    console.log(cordsString);
}

document.addEventListener('DOMContentLoaded', function (){
    let start = document.getElementById('startRecording');
    start.addEventListener('click', function () {
        document.querySelector('#mouse-position').addEventListener('mousemove', logMouse);
    });

    let stop = document.getElementById('stopRecording');
    stop.addEventListener('click', function () {
        document.querySelector('#mouse-position').removeEventListener('mousemove', logMouse);
    });
})