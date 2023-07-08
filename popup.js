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

    // Event listener for the refresh button
    document.querySelector('#refresh-button').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    });

    //version 
    const version = chrome.runtime.getManifest().version;
    document.getElementById('version').textContent = 'Version: ' + version;

    // for later
    // document.getElementById("color-toggle").addEventListener("change", function() {
    //     chrome.storage.local.set({colorToggle: this.checked});
    //   });
    

    

});

