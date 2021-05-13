var tab = 
chrome.tabs.executeScript(tab.id, {
    code: 'var string1 = "Hello, World !"; return string1;'
}, function(resultArr) {
    processString1(resultArr[0]);
});