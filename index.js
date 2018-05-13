var unique = require('uniq');
var Mustache = require('mustache');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));


var test = {
    firstName: "Arnold",
    lastName: "BC"
}

var template = "<h1>{{firstName}} {{lastName}}</h1>";
var html = Mustache.to_html(template, test);
var sampleArea = document.getElementById('sampleArea');
// sampleArea.innerHTML = html;