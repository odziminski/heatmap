console.log("początek stop")
const heatMapChildren = heatMapContainer.childNodes;
var numberOfEntries = new Array(heatMapChildren.length).fill(0);
for (let i = 0; i < heatMapChildren.length; i++) {
    heatMapChildren[i].onmouseover = () => {
        numberOfEntries[i]++;
    }
}


heatMapStop.addEventListener('click', function () {
    console.log("listener")

    for (let i = 0; i < heatMapChildren.length; i++) {
        heatMapChildren[i].onmouseover = () => {};
    }
    let sortedNumberOfEntries = [...numberOfEntries].sort((a, b) => b - a);


    var countForColors = 0;
    for (var j = 0; j < sortedNumberOfEntries.length; j++) {
        if (sortedNumberOfEntries[j] != 0)
            countForColors++;
    }
    var squaresToColor =  countForColors / 5;
    console.log(countForColors);


    for (let i = 0; i < squaresToColor/5 ; i++) {
        let mostEntries = sortedNumberOfEntries[i];
        let indexesOfMostEntries = [];

        let index = -1;
        while ((index = numberOfEntries.indexOf(mostEntries, index + 1)) !== -1) {
            indexesOfMostEntries.push(index);
        }
        indexesOfMostEntries.forEach(item => {
            document.getElementById('' + item).style.cssText =
                'background: red;' +
                'opacity: .4;' +
                'width: 25px;' +
                'height: 25px';
        });
        indexesOfMostEntries = [];
    }
    for (let i = 0; i < squaresToColor ; i++) {
        let mostEntries = sortedNumberOfEntries[i];
        let indexesOfMostEntries = [];
        let index = -1;
        while ((index = numberOfEntries.indexOf(mostEntries, index + 1)) !== -1) {
            indexesOfMostEntries.push(index);
        }
        indexesOfMostEntries.forEach(item => {
            document.getElementById('' + item).style.cssText =
                'background: orange;' +
                'opacity: .4;' +
                'width: 25px;' +
                'height: 25px';
        });
        indexesOfMostEntries = [];
    }
    for (let i = squaresToColor; i < squaresToColor*2; i++) {
        let mostEntries = sortedNumberOfEntries[i];
        let indexesOfMostEntries = [];
        let index = -1;
        while ((index = numberOfEntries.indexOf(mostEntries, index + 1)) !== -1) {
            indexesOfMostEntries.push(index);
        }
        indexesOfMostEntries.forEach(item => {
            document.getElementById('' + item).style.cssText =
                'background: yellow;' +
                'opacity: .4;' +
                'width: 25px;' +
                'height: 25px';
        });
        indexesOfMostEntries = [];
    }
    for (let i = squaresToColor*2; i < squaresToColor*4; i++) {
        let mostEntries = sortedNumberOfEntries[i];
        let indexesOfMostEntries = [];
        let index = -1;
        while ((index = numberOfEntries.indexOf(mostEntries, index + 1)) !== -1) {
            indexesOfMostEntries.push(index);
        }
        indexesOfMostEntries.forEach(item => {
            document.getElementById('' + item).style.cssText =
                'background: green;' +
                'opacity: .4;' +
                'width: 25px;' +
                'height: 25px';
        });
        indexesOfMostEntries = [];
    }
    for (let i = 80; i < 100; i++) {
        let mostEntries = sortedNumberOfEntries[i];
        let indexesOfMostEntries = [];
        let index = -1;
        while ((index = numberOfEntries.indexOf(mostEntries, index + 1)) !== -1) {
            indexesOfMostEntries.push(index);
        }
        indexesOfMostEntries.forEach(item => {
            document.getElementById('' + item).style.cssText =
                'background: blue;' +
                'opacity: .4;' +
                'width: 25px;' +
                'height: 25px';
        });
        indexesOfMostEntries = [];
    }




    document.getElementById('heat-map-container').style.backgroundColor = 'rgba(0,0,0,.2)';

    console.log("koniec");
});