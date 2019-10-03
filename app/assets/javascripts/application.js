/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

object.onclick = function(){imgBorder};
document.getElementById("image-container").onclick = function() {imgBorder()};

function imgBorder() {
            opacity:0.5;
            border-style: solid;
}
