chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let url = tabs[0].url;
    document.getElementById('url').textContent = url;

    console.log(url);
    
  });
  