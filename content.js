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

    heatMapStop.addEventListener('click', function () {
        for (let i = 0; i < heatMapChildren.length; i++) {
            heatMapChildren[i].onmouseover = () => {};
        }
        let sortedNumberOfEntries = [...numberOfEntries].sort((a, b) => b - a);
        for(let i = 0; i < 20; i++){
            let mostEntries = sortedNumberOfEntries[i];
            let indexesOfMostEntries = [];
            let index = -1;
            while ((index = numberOfEntries.indexOf(mostEntries, index+1)) !== -1){
                indexesOfMostEntries.push(index);
            }
            indexesOfMostEntries.forEach(item => {
                document.getElementById(''+item).style.cssText =
                    'background: red;' +
                    'opacity: .4;' +
                    'width: 25px;' +
                    'height: 25px';
            });
            indexesOfMostEntries = [];
        }
        for(let i = 20; i < 40; i++){
            let mostEntries = sortedNumberOfEntries[i];
            let indexesOfMostEntries = [];
            let index = -1;
            while ((index = numberOfEntries.indexOf(mostEntries, index+1)) !== -1){
                indexesOfMostEntries.push(index);
            }
            indexesOfMostEntries.forEach(item => {
                document.getElementById(''+item).style.cssText =
                    'background: orange;' +
                    'opacity: .4;' +
                    'width: 25px;' +
                    'height: 25px';
            });
            indexesOfMostEntries = [];
        }
        for(let i = 40; i < 60; i++){
            let mostEntries = sortedNumberOfEntries[i];
            let indexesOfMostEntries = [];
            let index = -1;
            while ((index = numberOfEntries.indexOf(mostEntries, index+1)) !== -1){
                indexesOfMostEntries.push(index);
            }
            indexesOfMostEntries.forEach(item => {
                document.getElementById(''+item).style.cssText =
                    'background: yellow;' +
                    'opacity: .4;' +
                    'width: 25px;' +
                    'height: 25px';
            });
            indexesOfMostEntries = [];
        }
        for(let i = 60; i < 80; i++){
            let mostEntries = sortedNumberOfEntries[i];
            let indexesOfMostEntries = [];
            let index = -1;
            while ((index = numberOfEntries.indexOf(mostEntries, index+1)) !== -1){
                indexesOfMostEntries.push(index);
            }
            indexesOfMostEntries.forEach(item => {
                document.getElementById(''+item).style.cssText =
                    'background: green;' +
                    'opacity: .4;' +
                    'width: 25px;' +
                    'height: 25px';
            });
            indexesOfMostEntries = [];
        }
        for(let i = 80; i < 100; i++){
            let mostEntries = sortedNumberOfEntries[i];
            let indexesOfMostEntries = [];
            let index = -1;
            while ((index = numberOfEntries.indexOf(mostEntries, index+1)) !== -1){
                indexesOfMostEntries.push(index);
            }
            indexesOfMostEntries.forEach(item => {
                document.getElementById(''+item).style.cssText =
                    'background: blue;' +
                    'opacity: .4;' +
                    'width: 25px;' +
                    'height: 25px';
            });
            indexesOfMostEntries = [];
        }
        document.getElementById('heat-map-container').style.backgroundColor = 'rgba(0,0,0,.2)';
    });
}