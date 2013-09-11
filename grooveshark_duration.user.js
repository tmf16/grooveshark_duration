// ==UserScript==
// @name            grooveshark_duration
// @namespace       http://vinica.me/
// @include         http://grooveshark.com/*
// @include         https://grooveshark.com/*
// @version         0.01
// ==/UserScript==

//if (document.contentType != 'text/html') return;
if (window.frameElement != null) return;

(function () {


setInterval(function () {
  var box = document.getElementById("lightbox");
  if (box == null) {
    return;
  }

  var a_list = box.getElementsByClassName("submit");
  for (var i=0; i<a_list.length; i++) {
    if (a_list[0].text == "Resume playback") {
      a_list[0].click();
      return;
    }
    if (a_list[0].text == "Yes, I'm Here!") {
      a_list[0].click();
      return;
    }
  }
}, 5000);

})();
