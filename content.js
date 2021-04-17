
//create input and anchor elements
var element = document.getElementById("main");
element.innerHTML = "<div><input type='text' id='address' value=''><a id='myLink' href=''></a></div>";

//fill input from paste
var myInput = document.getElementById('address');
myInput.select();
document.execCommand('paste');

//fill link from input
var myLink = document.getElementById('myLink');
myLink.setAttribute("href", myInput.value.split('?')[0]);
myLink.click();



