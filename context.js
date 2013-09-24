// Create the context menu item with the genericOnClick callback
chrome.contextMenus.create({"title":"Context menu link", "onclick": genericOnClick});

function genericOnClick(info, tab) {
  //Make it work in the current tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //Get the meta data from content.js
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "url!"}, function(response) {
      window.open(response.answer, "_blank");
    });
  });
}
