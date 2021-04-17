
//create input and anchor elements
var element = document.getElementById("main");
element.innerHTML = "<div><input type='text' id='address' value=''><a id='myLink' href=''>Redirecting...</a></div>";


//fill input from paste
var myInput = document.getElementById('address');
myInput.select();
document.execCommand('paste');
myInput.style.visibility = "hidden";

//fill link from input
var myLink = document.getElementById('myLink');

// //make sure the clipboard has a medium link in it
// if (myLink.substring(0, 22) == "https://www.medium.com")
// {
//     debugger;

// };

myLink.setAttribute("href", myInput.value.split('?')[0]);
myLink.click();





