$(document).ready(function () {
    const APIKEY = "61fe3faf6a791555010217e6";

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
