document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.checkbox').addEventListener('change', function(event) {
        let isExtensionOn = event.target.checked;
        chrome.storage.local.set({ 'isExtensionOn': isExtensionOn }, function() {
          console.log('The extension is', isExtensionOn ? 'on' : 'off');
        });
      });
      
      // On popup open, ensure the checkbox is in the correct state
      chrome.storage.local.get('isExtensionOn', function(data) {
        document.querySelector('.checkbox').checked = !!data.isExtensionOn;
      });
  });
  