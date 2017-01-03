var ON_INPUT_ENTERED_DISPOSITION = {
    "CURRENT_TAB": "currentTab",
    "NEW_FOREGROUND_TAB": "newForegroundTab",
    "NEW_BACKGROUND_TAB": "newBackgroundTab"
};

var suggestResultOne = {
    "content": "Some content",
    "description": "Description"
};

var suggestResults = [suggestResultOne];
var searchService = "https://www.google.com";

searchService += "/search?q=chrome+extensions+developers+";
function CreateWindow(url) {
    var windowCreateData = {"url": ""};
    windowCreateData.url = url;
    chrome.windows.create(windowCreateData);
}

chrome.omnibox.onInputStarted.addListener(function(){
    console.log("<InputStarted>");
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest){
    console.log("<InputChanged> Text: " + text);
    suggest(getSuggestResults(text));
});

chrome.omnibox.onInputEntered.addListener(function(text, disposition){
    console.log("<InputEntered> Text: " + text);
    CreateWindow(searchService + text);
});
