chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackground,
    });
  });
  
  function changeBackground() {
    document.body.style.backgroundColor = 'green';
}