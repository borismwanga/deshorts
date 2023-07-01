chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackground,
    });
  });
  
  function changeBackground() {
    document.body.style.backgroundColor = 'green';
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.storage.local.get('isExtensionOn', function(data) {
    if (data.isExtensionOn) {
      chrome.tabs.update(request.tabId, { url: request.newUrl });
    }
  });
});
