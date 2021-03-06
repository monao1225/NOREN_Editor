var editor = ace.edit("input_area");

const main = require("electron").remote.require("./main");
const bgColor = require("electron").remote.require("./menuTemplate").bgColor;
console.log(bgColor);

editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  });

if(bgColor){
    editor.setTheme("ace/theme/monokai");
}
editor.getSession().setMode("ace/mode/norencs");