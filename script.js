// This function is used to let the current fields the user is typing in to get focused by styling the background colour.
function infocus(x) {
  x.style.background = "orange";
  }
  
  // This function is used to focus out the current fields that being focus and move the focus to the next fields.
  function outfocus(x) {
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }
  
  // This function is used to focus out the current fields that being focus and move the focus to the next fields.
  function outfocusEmail(x) {
    var x = document.getElementById("emailAddr");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }
  
  // This function is used to focus out the current fields that being focus and move the focus to the next fields.
  function outfocusContact(x) {
    var x = document.getElementById("contact");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }
  
  // This function is used to focus out the current fields that being focus and move the focus to the next fields.
  function outfocustextarea(x) {
    var x = document.getElementById("enquiries");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }

function myFunction() {
    location.replace("tutorial.html")
  }

$(document).ready(function () {
    
    const APIKEY = "61fe3faf6a791555010217e6";

// Get the modal
function SignUpForm() {
var modal = document.getElementById('SignupModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
    // api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assignmentapi-7328.restdb.io/rest/students",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "APIKEY",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assignmentapi-7328.restdb.io/rest/students",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "APIKEY",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

var jsondata = {"field1": "new value","field2": "xxx"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assignmentapi-7328.restdb.io/rest/students/{id}",
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "APIKEY",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
})
