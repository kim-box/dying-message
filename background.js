window.commas = {};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.commas[request.url] = request.count;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
