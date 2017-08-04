import '../sass/styles.scss';

// jQuery 3.2.1 (uncompressed)
$(document).ready(function() {
    // "iffy"
})

var scroll, togglerIcon, toggleComponent;
scroll = document.getElementById('scroll');
togglerIcon = document.getElementById('toggler-icon');
toggleComponent = document.getElementById('toggle-component');

scroll.addEventListener("click", function() {
    if ( toggleComponent.classList.contains('collapsed') ) {
        // TODO: make this scroll to 20px above #content
        $("html, body").animate({scrollTop: 460}, 1000, "linear");
    } else {
        $("html, body").animate({scrollTop: 720}, 1000, "linear");
    }
})
togglerIcon.addEventListener("click", function() {
    if ( togglerIcon.classList.contains('fa-caret-left') ) {
    togglerIcon.classList.remove('fa-caret-left');
    togglerIcon.classList.add('fa-caret-down');
    } else {
    togglerIcon.classList.remove('fa-caret-down');
    togglerIcon.classList.add('fa-caret-left');
    }
});

// add Markdown to the div element with id of "content"
var html = require("../md/wed.md");
var content = document.getElementById("content");
content.innerHTML = html;