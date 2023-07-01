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
