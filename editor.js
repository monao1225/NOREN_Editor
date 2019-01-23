var editor = ace.edit("input_area");

const main = require("electron").remote.require("./main");
const bgColor = main.bgColor;
console.log(bgColor);

if(bgColor){
    editor.setTheme("ace/theme/monokai");
}