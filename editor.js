function onLoad(){
  var editor = ace.edit("input_area");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
}