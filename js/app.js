/* 
Copyright (c) 2012 Rüdiger Appel
Copyright (c) 2015 Roger Meier <roger@bufferoverflow.ch>

SPDX-License-Identifier:	MIT
*/

window.setInterval(function() {
  var now     = new Date();
  var hours   = now.getHours();
  var minutes = now.getMinutes();
  var time    = Math.min(60000, 1.025 * (1000 * now.getSeconds() + now.getMilliseconds()));
  var seconds = Math.floor(time / 1000);
  var millis  = time % 1000;
  rotate('hourHand',   hours * 30 + minutes * 0.5);
  rotate('minuteHand', minutes * 6);
  rotate('secondHand', 6 * seconds + 3 * (1 + Math.cos(Math.PI + Math.PI * (0.001 * millis))));
}, 50);

function rotate(id, angle) {
  var element = document.getElementById(id);
  if (element) {
    element.setAttribute('transform', 'rotate(' + angle + ', 100, 100)');
    if (element.getAttribute('visibility') == 'hidden') {
      element.setAttribute('visibility', 'visible');
    }
  }
}