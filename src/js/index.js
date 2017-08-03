import '../sass/styles.scss';

$(document).ready(function() {
    // alert("working");
})

function toggle() {
    var toggler = document.getElementById("toggler");
    toggler.classList.remove('fa-caret-left');
    toggler.classList.add('fa-caret-down');
}

var html = require("../md/wed.md");
var content = document.getElementById("content");
content.innerHTML = html;