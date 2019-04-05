
function returnFocus(){
  document.getElementById("text").focus();
}

function p(){
  window.print();
}

function sacuvaj(){
  var tekst = document.getElementById("text").innerHTML;
  localStorage.setItem("dokument", tekst);
}

function paste(){
  alert("Please use CTRL + V for function paste;");
}

function selectAll(){
  document.getElementById('text').focus();
  document.execCommand('selectAll');
}

//LINE SPACING <==============================
function lineSpacing(){
  var spacing = document.getElementById("lineS").value;
  extractNodes().forEach(function(element){
    element.style.lineHeight = spacing;
    console.log(element);
  });
}

function extractNodes(){
  var selectionRange = window.getSelection().getRangeAt(0);
  var startingNode = selectionRange.startContainer.parentNode;
  var endingNode = selectionRange.endContainer.parentNode;

  if(startingNode===endingNode){
    return [startingNode];
  }
  else{
    return getNodesBetween(startingNode, endingNode);
  }
}

function getNodesBetween(start, end){
  var nodes = [];
  var currentNode = start;
  while(currentNode !== end){
    if(!nodes.includes(currentNode)){
      nodes.push(currentNode);
      currentNode = getNext(currentNode);
    }
    else {
      currentNode = getNextSibling(currentNode);
    }
  }
  return nodes;
}

function getNext(node) {
  if(node.hasChildNodes()){
    return node.firstChild;
  }
  else if(node.nextSibling){
    return node.nextSibling;
  }
  else {
    return node.parentNode;
  }
}

function getNextSibling(node) {
  if(node.nextSibling){
    return node.nextSibling;
  }
  else {
    return node.parentNode;
  }
}


function insertTable(){
  var rows = document.getElementById("rows").value;
  var cols = document.getElementById("cols").value;

  var table = document.createElement("table");
  table.setAttribute('border', '1');
  var tbody = document.createElement('tbody')
  for(var i=0; i<rows; i++){
    var tr = document.createElement('tr');
    for(var j=0; j<cols; j++){
      td = document.createElement('td');
      td.textContent = 'nesto';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  document.getElementById('text').appendChild(table);

}

function zoomings(){
var val=document.getElementById("zooming").value;
                document.getElementById("text").style.zoom=val;
}
function popup1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function popup2(){
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
var brojac=1;
function openForm() {
  if(brojac%2==0){
    document.getElementById("myForm").style.display = "block";
  }
  else{
    document.getElementById("myForm").style.display = "none";
  }
  brojac++;
}

/*$(function(){
  $('#myForm input[type=radio]').change(function(){
    lineSpacing($(this).val);
    console.lov($(this).val)
  })
})*/

window.onload = function(){
  var pocetno = localStorage.getItem("dokument");
  document.getElementById("text").innerHTML = pocetno;
}
