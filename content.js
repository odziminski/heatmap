let heatMapContainer = document.createElement('div');
heatMapContainer.setAttribute('id', 'heat-map-container');
let heatMapStop = document.createElement('div');
let pageHeight = document.body.clientHeight;
let pageWidth = document.body.clientWidth;

if(document.body.id !== "heatMapPopupBody"){
    heatMapContainer.style.cssText =
        'position:absolute;' +
        'width:100%;' +
        'height:' +pageHeight + 'px;' +
        'z-index:2147483646;' +
        'background:transparent;' +
        'top:0;' +
        'display:flex;' +
        'justify-content:space-evenly;' +
        'flex-wrap:wrap;';

    heatMapStop.style.cssText =
        'position: fixed;' +
        'top: 100px;' +
        'right: 50px;' +
        'width: 50px;' +
        'height: 20px;' +
        'background: red;' +
        'z-index:2147483647;';

    heatMapStop.setAttribute('id', 'heatMapStop');
    document.body.appendChild(heatMapStop);
    document.body.appendChild(heatMapContainer);

    let indexOfHeatMapChild = 0;
    for(let i=1; i<pageHeight/25; i++){
        for(let j=1; j<pageWidth/25; j++){
            let heatMapChild = document.createElement('div');
            heatMapChild.setAttribute("id", ''+indexOfHeatMapChild);
            heatMapChild.style.cssText = 'width:25px; height: 25px; background: transparent;';
            heatMapContainer.appendChild(heatMapChild);
            indexOfHeatMapChild++;
        }
    }

    const heatMapChildren = heatMapContainer.childNodes;
    numberOfEntries = new Array(heatMapChildren.length).fill(0);
    for (let i = 0; i < heatMapChildren.length; i++) {
        heatMapChildren[i].onmouseover = () => {
            numberOfEntries[i]++;
        }
    }


}
