let heatMapContainer = document.createElement('div');
let body = document.querySelector('body');
let pageHeight = body.clientHeight;
let pageWidth = body.clientWidth;

heatMapContainer.style.cssText = 'position:absolute;' +
    'width:100%;' +
    'height:' +pageHeight + 'px;' +
    'opacity:0.3;' +
    'z-index:2147483647;' +
    'background:#000;' +
    'top:0;' +
    'display:flex;' +
    'justify-content:space-evenly;' +
    'flex-wrap:wrap;';

let heatMapChildIndex = 1;
for(let i=1; i<pageHeight/100; i++){
    for(let j=1; j<pageWidth/100; j++){
        let heatMapChild = document.createElement('div');
        heatMapChild.setAttribute("id", ''+heatMapChildIndex);
        heatMapChild.style.cssText = 'width:100px; height: 100px; background: red; opacity: 0.3;';
        heatMapContainer.appendChild(heatMapChild);
        heatMapChildIndex++;
    }
}

document.body.appendChild(heatMapContainer);
