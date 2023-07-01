chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let url = tabs[0].url; // retrieve url
    if (url.includes("https://www.youtube.com/shorts/")) {
    // spilt video code to ytb url
      const vid = url.split("https://www.youtube.com/shorts/")
      chrome.runtime.sendMessage({
        message: "update_tab_url",
        tabId: tabs[0].id,
        newUrl: "https://www.youtube.com/watch?v=" + `${vid[1]}`
      });
    } else {
      document.getElementById('url').textContent = url;
    }
  });
  
  document.getElementById('turnOn').addEventListener('click', function() {
    chrome.storage.local.set({ 'isExtensionOn': true }, function() {
      console.log('The extension is on.');
    });
  });
  
  document.getElementById('turnOff').addEventListener('click', function() {
    chrome.storage.local.set({ 'isExtensionOn': false }, function() {
      console.log('The extension is off.');
    });
  });
  