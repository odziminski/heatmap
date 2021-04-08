function startRecording() {

    document.querySelector('#mouse-position').addEventListener('mousemove', (e) => {
        console.log("X: ", e.clientX + " Y: " + e.clientY);
        var pos = e;
        var dot;
        dot = document.createElement('div');
        dot.className = "dot";
        dot.id = "dot";

        dot.style.left = pos.x + "px";
        dot.style.top = pos.y + "px";
        document.body.appendChild(dot);

    }, );

}

function stopRecording() {

    document.querySelector('#mouse-position').RemoveEventListener('mousemove', (e));

}
document.addEventListener('DOMContentLoaded', function () {
    var start = document.getElementById('startRecording');
    start.addEventListener('click', function () {
        startRecording();
    });
    var stop = document.getElementById('stopRecording');
    stop.addEventListener('click', function () {
        stopRecording();
    });
});


/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#mouse-position').addEventListener('mousemove', (e) => {
        console.log("X: ", e.clientX + " Y: " + e.clientY);
        var pos = e;
        var dot;
        dot = document.createElement('div');
        dot.className = "dot";
        dot.id = "dot";

        dot.style.left = pos.x + "px";
        dot.style.top = pos.y + "px";
        document.body.appendChild(dot);

    }, );
}); */