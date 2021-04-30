let heatMapContainer = document.createElement('div');
let heatMapStop = document.createElement('div');
let body = document.body;
let pageHeight = body.clientHeight;
let pageWidth = body.clientWidth;

if(document.body.id !== "heatMapPopupBody"){
    heatMapContainer.style.cssText = 'position:absolute;' +
        'width:100%;' +
        'height:' +pageHeight + 'px;' +
        'z-index:2147483646;' +
        'background:transparent;' +
        'top:0;' +
        'display:flex;' +
        'justify-content:space-evenly;' +
        'flex-wrap:wrap;';

    heatMapStop.style.cssText = 'position: absolute;' +
        'top: 100px;' +
        'right: 50px;' +
        'width: 50px;' +
        'height: 20px;' +
        'background: red;' +
        'z-index:2147483647;';

    heatMapStop.setAttribute('id', 'heatMapStop');

    let heatMapChildIndex = 0;
    for(let i=1; i<pageHeight/25; i++){
        for(let j=1; j<pageWidth/25; j++){
            let heatMapChild = document.createElement('div');
            heatMapChild.setAttribute("id", ''+heatMapChildIndex);
            heatMapChild.style.cssText = 'width:25px; height: 25px; background: transparent;';
            heatMapContainer.appendChild(heatMapChild);
            heatMapChildIndex++;
        }
    }

    const heatMapChildren = heatMapContainer.childNodes;
    var numberOfVisit = new Array(heatMapChildren.length).fill(0);
    for (let i = 0; i < heatMapChildren.length; i++) {
        heatMapChildren[i].onmouseover = function () {
            numberOfVisit[i]++;
            console.log(JSON.stringify(numberOfVisit));
        }
    }
    document.body.appendChild(heatMapStop);
    document.body.appendChild(heatMapContainer);
    heatMapStop.addEventListener('click', function () {
        for (let i = 0; i < heatMapChildren.length; i++) {
            heatMapChildren[i].onmouseover = function(){};
        }
        for(let j = 0; j < 5; j++){
            const indexOfMaxValue = numberOfVisit.indexOf(Math.max.apply(window,numberOfVisit))
            console.log(indexOfMaxValue);
            document.getElementById(''+indexOfMaxValue).style.cssText = 'background-color:red; opacity: .3; height: 25px; width: 25px;';
        }
    });
}