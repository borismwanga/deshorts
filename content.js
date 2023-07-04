chrome.storage.local.get(["colorToggle"], function(result) {
    if (result.colorToggle) {
      var elements = document.getElementsByClassName('ytd-rich-section-renderer');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "red";
      }
    } else {
      var elements = document.getElementsByClassName('ytd-rich-section-renderer');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
      }
    }
  });
  