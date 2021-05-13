// document.querySelector('button').addEventListener('click', onclick, false)
//   function onclick () {
//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
//     })
//   }
document.getElementById('startRecording').addEventListener('click', function (){
    chrome.tabs.executeScript(null,{
        file: 'content.js'
    });
    console.log('Start');
})

document.getElementById('stopRecording').onclick = () => {
    chrome.tabs.executeScript(null,{
        file: 'stop.js'
    });
    console.log('Stop');
}
