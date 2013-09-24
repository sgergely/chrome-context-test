var metas = document.getElementsByTagName('meta');

for (i=0; i<metas.length; i++) {
  //replace foobar with meta name's value <meta name="twitter:player:width" content="435">
  if (metas[i].getAttribute("name") == "baz") {
    var URL = ("https://foo.bar/"+metas[i].getAttribute("content"));
  }
}

/*
* This listens for the request what is made when the context menu is clicked.
* This is called from context.js
*/
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "url!") {
      sendResponse({answer: URL});
    }
  }
);
