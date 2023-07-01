chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.storage.local.get('isExtensionOn', function(data) {
    if (data.isExtensionOn) {
      chrome.tabs.update(request.tabId, { url: request.newUrl });
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    chrome.storage.local.get('isExtensionOn', function(data) {
      if (data.isExtensionOn && changeInfo.url.includes("https://www.youtube.com/shorts/")) {
        const vid = changeInfo.url.split("https://www.youtube.com/shorts/");
        chrome.tabs.update(tabId, { url: "https://www.youtube.com/watch?v=" + vid[1] });
      }
    });
  }
});
