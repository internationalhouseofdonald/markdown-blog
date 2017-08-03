import '../sass/styles.scss';

$(document).ready(function() {
    // alert("working");
})

var html = require("../md/wed.md");

var content = document.getElementById("content");



content.innerHTML = html;