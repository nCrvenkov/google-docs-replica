
var functions = {
  bold: function () {
    document.execCommand("bold",false,null);
    console.log("nesto");
  },
  italic: function () {
    document.execCommand("italic",false,null);
  },
  under: function () {
    document.execCommand("underline",false,null);
  },
  clearF: function () {
    document.execCommand("removeFormat",false,null);
  },
  undo: function () {
    document.execCommand("undo",false,null);
    returnFocus();
  },
  redo: function() {
    document.execCommand("redo",false,null);
    returnFocus();
  },
  cut: function() {
    document.execCommand("cut",false,null);
  },
  copy: function() {
    document.execCommand("copy",false,null);
  },
  del: function() {
    document.execCommand("delete",false,null);
  },
  strikethrough: function() {
    document.execCommand("strikethrough",false,null);
  },
  sub: function() {
    document.execCommand("subscript",false,null);
  },
  sup: function() {
    document.execCommand("superscript",false,null);
  },
  indent: function() {
    document.execCommand("indent",false,null);
  },
  outdent: function() {
    document.execCommand("outdent",false,null);
  },
  insertL: function() {
    document.execCommand("insertHorizontalRule",false,null);
  },
  ordered: function() {
    document.execCommand("insertOrderedList",false,null);
  },
  unordered: function() {
    document.execCommand("insertUnorderedList",false,null);
  },
  alignL: function() {
    document.execCommand("justifyLeft",false,null);
    returnFocus()
  },
  alignR: function() {
    document.execCommand("justifyRight",false,null);
    returnFocus()
  },
  alignC: function() {
    document.execCommand("justifyCenter",false,null);
    returnFocus()
  },
  justify: function() {
    document.execCommand("justifyFull",false,null);
    returnFocus()
  },
  boja: function() {
    var b = document.getElementById("boja");
    var bb = b.value;
    document.execCommand("foreColor", true, bb);
  },
  bojabg: function() {
    var b = document.getElementById("bojabg");
    var bb = b.value;
    document.execCommand("backColor", true, bb);
  },
  font: function() {
    var b = document.getElementById("font");
    var bb = b.value;
    document.execCommand("fontName", true, bb);
  },
  fontSize: function() {
    var b = document.getElementById("fontSize");
    var bb = b.value;
    document.execCommand("fontSize", true, bb);
  },
  slika: function() {
    var url = document.getElementById("slika").value;
    document.execCommand("insertImage", true, url);
  },
  link: function() {
    var url = document.getElementById("link").value;
    document.execCommand("createLink", true, url);
  },
  unlink: function() {
    document.execCommand("unlink");
  }
};
