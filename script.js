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
    x.style.background = "white";
  }
  
  function outfocusPassword(x) {
    var x = document.getElementById("password");
    x.style.background = "white";
  }

  function outfocusrepPassword(x) {
    var x = document.getElementById("repeat-pw");
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


  $("#signbtn").click(function(){
    $(this).val("Success!")
    $(this).animate({
        marginLeft: '-180px',
        width:"220px"
  });
});

function SignUpSuccess() {
  document.getElementById("signbtn").addEventListener("click",successMessage)
}
function successMessage(){
  document.getElementById("text6").innerHTML = "Signup Success"
}

  function displayText() {
    document.getElementById("readmore").addEventListener("click", displayText);
    document.getElementById('text').innerHTML = 
    "Arguments are specified after the function name, inside the parentheses." + 
    " You can add as many arguments as you want, just separate them with a comma." +
    " When the function is called, we pass along a first name, which is used inside the function to print the full name:";  
  }

  function castingText() {
    document.getElementById("readmore2").addEventListener("click", castingText);
    document.getElementById('text2').innerHTML = 
    "Python is an object-orientated language" + 
    " as such it uses classes to define data types, including its primitive types"; 
  }

  function formatText() {
    document.getElementById("readmore3").addEventListener("click", formatText);
    document.getElementById('text3').innerHTML = 
    "we can combine strings and numbers by using the format() method" + 
    " The format() method takes the passed arguments, formats them, and places them in the string where the placeholders {} are:"; 
  }

  function functionText() {
    document.getElementById("readmore4").addEventListener("click", functionText);
    document.getElementById('text4').innerHTML = 
    "You can pass data, known as parameters, into a function." + " A function can return data as a result." 
  }



function onHover()
{
  document.getElementById("tryout").style.backgroundColor = "yellow";
  document.getElementById("linkedin1").style.backgroundColor = "yellow";
  document.getElementById("readmore").style.backgroundColor = "yellow";
}

function TryOutButton()
{
  document.getElementById("trybtn").style.backgroundColor = "yellow";
}
function trybtn2()
{
  document.getElementById("trybtn2").style.backgroundColor = "yellow";
  document.getElementById("trybtn3").style.backgroundColor = "yellow";
}
function trybtn()
{
  document.getElementById("trybtn4").style.backgroundColor = "yellow";
}
function outbtn() {
  document.getElementById("trybtn4").style.backgroundColor = "lightgreen";
}
function Trybtnout()
{
  document.getElementById("trybtn").style.backgroundColor = "lightgreen";
}

function Trybtnout2()
{
  document.getElementById("trybtn2").style.backgroundColor = "lightgreen";
  document.getElementById("trybtn3").style.backgroundColor = "lightgreen";
}

function variablebtn()
{
  document.getElementById("trybtn6").style.backgroundColor = "yellow";
}
function OutVariablebtn()
{
  document.getElementById("trybtn6").style.backgroundColor = "lightgreen";
}

function Variablebtn2()
{
  document.getElementById("trybtn7").style.backgroundColor = "yellow";
}
function OutVariablebtn2()
{
  document.getElementById("trybtn7").style.backgroundColor = "lightgreen";
}

function Variablebtn3()
{
  document.getElementById("trybtn8").style.backgroundColor = "yellow";
}

function OutVariablebtn3()
{
  document.getElementById("trybtn8").style.backgroundColor = "lightgreen";
}

function Variablebtn4()
{
  document.getElementById("trybtn9").style.backgroundColor = "yellow";
}

function OutVariablebtn4()
{
  document.getElementById("trybtn9").style.backgroundColor = "lightgreen";
}

function Variablebtn5()
{
  document.getElementById("trybtn10").style.backgroundColor = "yellow";
}

function OutVariablebtn5()
{
  document.getElementById("trybtn10").style.backgroundColor = "lightgreen";
}

function Variablebtn6()
{
  document.getElementById("trybtn11").style.backgroundColor = "yellow";
}

function OutVariablebtn6()
{
  document.getElementById("trybtn11").style.backgroundColor = "lightgreen";
}
function Variablebtn7()
{
  document.getElementById("trybtn12").style.backgroundColor = "yellow";
}

function OutVariablebtn7()
{
  document.getElementById("trybtn12").style.backgroundColor = "lightgreen";
}
function Variablebtn8()
{
  document.getElementById("trybtn13").style.backgroundColor = "yellow";
}

function OutVariablebtn8()
{
  document.getElementById("trybtn13").style.backgroundColor = "lightgreen";
}
function Variablebtn9()
{
  document.getElementById("trybtn14").style.backgroundColor = "yellow";
}

function OutVariablebtn9()
{
  document.getElementById("trybtn14").style.backgroundColor = "lightgreen";
}
function Variablebtn10()
{
  document.getElementById("trybtn15").style.backgroundColor = "yellow";
}

function OutVariablebtn10()
{
  document.getElementById("trybtn15").style.backgroundColor = "lightgreen";
}
function Variablebtn11()
{
  document.getElementById("trybtn16").style.backgroundColor = "yellow";
}

function OutVariablebtn11()
{
  document.getElementById("trybtn16").style.backgroundColor = "lightgreen";
}

function Variablebtn12()
{
  document.getElementById("trybtn17").style.backgroundColor = "yellow";
}

function OutVariablebtn12()
{
  document.getElementById("trybtn17").style.backgroundColor = "lightgreen";
}

function Variablebtn13()
{
  document.getElementById("trybtn18").style.backgroundColor = "yellow";
}

function OutVariablebtn13()
{
  document.getElementById("trybtn18").style.backgroundColor = "lightgreen";
}

function Variablebtn14()
{
  document.getElementById("trybtn19").style.backgroundColor = "yellow";
}

function OutVariablebtn14()
{
  document.getElementById("trybtn19").style.backgroundColor = "lightgreen";
}

function Variablebtn15()
{
  document.getElementById("trybtn20").style.backgroundColor = "yellow";
}

function OutVariablebtn15()
{
  document.getElementById("trybtn20").style.backgroundColor = "lightgreen";
}

function Variablebtn16()
{
  document.getElementById("trybtn21").style.backgroundColor = "yellow";
}

function OutVariablebtn16()
{
  document.getElementById("trybtn21").style.backgroundColor = "lightgreen";
}

function Variablebtn17()
{
  document.getElementById("trybtn22").style.backgroundColor = "yellow";
}

function OutVariablebtn17()
{
  document.getElementById("trybtn22").style.backgroundColor = "lightgreen";
}

function Variablebtn18()
{
  document.getElementById("trybtn23").style.backgroundColor = "yellow";
}

function OutVariablebtn18()
{
  document.getElementById("trybtn23").style.backgroundColor = "lightgreen";
}
function Variablebtn19()
{
  document.getElementById("trybtn24").style.backgroundColor = "yellow";
}

function OutVariablebtn19()
{
  document.getElementById("trybtn24").style.backgroundColor = "lightgreen";
}

function Variablebtn20()
{
  document.getElementById("trybtn25").style.backgroundColor = "yellow";
}

function OutVariablebtn20()
{
  document.getElementById("trybtn25").style.backgroundColor = "lightgreen";
}

function Variablebtn21()
{
  document.getElementById("trybtn26").style.backgroundColor = "yellow";
}

function Variablebtn22()
{
  document.getElementById("trybtn27").style.backgroundColor = "yellow";
}
function OutVariablebtn22()
{
  document.getElementById("trybtn27").style.backgroundColor = "lightgreen";
}
function Variablebtn23()
{
  document.getElementById("trybtn28").style.backgroundColor = "yellow";
}
function OutVariablebtn23()
{
  document.getElementById("trybtn28").style.backgroundColor = "lightgreen";
}
function Variablebtn24()
{
  document.getElementById("trybtn29").style.backgroundColor = "yellow";
}
function OutVariablebtn24()
{
  document.getElementById("trybtn29").style.backgroundColor = "lightgreen";
}
function Variablebtn25()
{
  document.getElementById("trybtn30").style.backgroundColor = "yellow";
}
function OutVariablebtn25()
{
  document.getElementById("trybtn30").style.backgroundColor = "lightgreen";
}
function Variablebtn26()
{
  document.getElementById("trybtn31").style.backgroundColor = "yellow";
}
function OutVariablebtn26()
{
  document.getElementById("trybtn31").style.backgroundColor = "lightgreen";
}
function Variablebtn27()
{
  document.getElementById("trybtn32").style.backgroundColor = "yellow";
}
function OutVariablebtn27()
{
  document.getElementById("trybtn32").style.backgroundColor = "lightgreen";
}
function Stringbtn()
{
  document.getElementById("trybtn33").style.backgroundColor = "yellow";
}
function Outstringbtn()
{
  document.getElementById("trybtn33").style.backgroundColor = "lightgreen";
}
function Stringbtn2()
{
  document.getElementById("trybtn34").style.backgroundColor = "yellow";
}
function Outstringbtn2()
{
  document.getElementById("trybtn34").style.backgroundColor = "lightgreen";
}
function Stringbtn3()
{
  document.getElementById("trybtn35").style.backgroundColor = "yellow";
}
function Outstringbtn3()
{
  document.getElementById("trybtn35").style.backgroundColor = "lightgreen";
}
function Stringbtn4()
{
  document.getElementById("trybtn36").style.backgroundColor = "yellow";
}
function Outstringbtn4()
{
  document.getElementById("trybtn36").style.backgroundColor = "lightgreen";
}
function Stringbtn5()
{
  document.getElementById("trybtn37").style.backgroundColor = "yellow";
}
function Outstringbtn5()
{
  document.getElementById("trybtn37").style.backgroundColor = "lightgreen";
}
function Stringbtn6()
{
  document.getElementById("trybtn38").style.backgroundColor = "yellow";
}
function Outstringbtn6()
{
  document.getElementById("trybtn38").style.backgroundColor = "lightgreen";
}
function Stringbtn7()
{
  document.getElementById("trybtn39").style.backgroundColor = "yellow";
}
function Outstringbtn7()
{
  document.getElementById("trybtn39").style.backgroundColor = "lightgreen";
}
function Stringbtn8()
{
  document.getElementById("trybtn40").style.backgroundColor = "yellow";
}
function Outstringbtn8()
{
  document.getElementById("trybtn40").style.backgroundColor = "lightgreen";
}
function Stringbtn9()
{
  document.getElementById("trybtn41").style.backgroundColor = "yellow";
}
function Outstringbtn9()
{
  document.getElementById("trybtn41").style.backgroundColor = "lightgreen";
}
function Stringbtn10()
{
  document.getElementById("trybtn42").style.backgroundColor = "yellow";
}
function Outstringbtn10()
{
  document.getElementById("trybtn42").style.backgroundColor = "lightgreen";
}
function Stringbtn11()
{
  document.getElementById("trybtn43").style.backgroundColor = "yellow";
}
function Outstringbtn11()
{
  document.getElementById("trybtn43").style.backgroundColor = "lightgreen";
}
function Stringbtn12()
{
  document.getElementById("trybtn44").style.backgroundColor = "yellow";
}
function Outstringbtn12()
{
  document.getElementById("trybtn44").style.backgroundColor = "lightgreen";
}
function Stringbtn13()
{
  document.getElementById("trybtn45").style.backgroundColor = "yellow";
}
function Outstringbtn13()
{
  document.getElementById("trybtn45").style.backgroundColor = "lightgreen";
}
function Booleanbtn1()
{
  document.getElementById("trybool").style.backgroundColor = "yellow";
}
function OutBooleanbtn1()
{
  document.getElementById("trybool").style.backgroundColor = "lightgreen";
}
function Booleanbtn2()
{
  document.getElementById("trybool2").style.backgroundColor = "yellow";
}
function OutBooleanbtn2()
{
  document.getElementById("trybool2").style.backgroundColor = "lightgreen";
}
function Booleanbtn3()
{
  document.getElementById("trybool3").style.backgroundColor = "yellow";
}
function OutBooleanbtn3()
{
  document.getElementById("trybool3").style.backgroundColor = "lightgreen";
}
function Booleanbtn4()
{
  document.getElementById("trybool4").style.backgroundColor = "yellow";
}
function OutBooleanbtn4()
{
  document.getElementById("trybool4").style.backgroundColor = "lightgreen";
}
function Loopsbtn1()
{
  document.getElementById("wl1").style.backgroundColor = "yellow";
}
function OutLoopsbtn1()
{
  document.getElementById("wl1").style.backgroundColor = "lightgreen";
}
function Loopsbtn2()
{
  document.getElementById("wl2").style.backgroundColor = "yellow";
}
function OutLoopsbtn2()
{
  document.getElementById("wl2").style.backgroundColor = "lightgreen";
}
function Loopsbtn3()
{
  document.getElementById("wl3").style.backgroundColor = "yellow";
}
function OutLoopsbtn3()
{
  document.getElementById("wl3").style.backgroundColor = "lightgreen";
}
function Loopsbtn4()
{
  document.getElementById("wl4").style.backgroundColor = "yellow";
}
function OutLoopsbtn4()
{
  document.getElementById("wl4").style.backgroundColor = "lightgreen";
}
function Loopsbtn5()
{
  document.getElementById("fl1").style.backgroundColor = "yellow";
}
function OutLoopsbtn5()
{
  document.getElementById("fl1").style.backgroundColor = "lightgreen";
}
function Loopsbtn6()
{
  document.getElementById("fl2").style.backgroundColor = "yellow";
}
function OutLoopsbtn6()
{
  document.getElementById("fl2").style.backgroundColor = "lightgreen";
}
function Loopsbtn7()
{
  document.getElementById("fl3").style.backgroundColor = "yellow";
}
function OutLoopsbtn7()
{
  document.getElementById("fl3").style.backgroundColor = "lightgreen";
}
function Loopsbtn8()
{
  document.getElementById("fl4").style.backgroundColor = "yellow";
}
function OutLoopsbtn8()
{
  document.getElementById("fl4").style.backgroundColor = "lightgreen";
}
function Loopsbtn8()
{
  document.getElementById("fl5").style.backgroundColor = "yellow";
}
function OutLoopsbtn8()
{
  document.getElementById("fl5").style.backgroundColor = "lightgreen";
}
function Loopsbtn9()
{
  document.getElementById("fl6").style.backgroundColor = "yellow";
}
function OutLoopsbtn9()
{
  document.getElementById("fl6").style.backgroundColor = "lightgreen";
}
function Loopsbtn10()
{
  document.getElementById("fl7").style.backgroundColor = "yellow";
}
function OutLoopsbtn10()
{
  document.getElementById("fl7").style.backgroundColor = "lightgreen";
}
function Loopsbtn11()
{
  document.getElementById("fl8").style.backgroundColor = "yellow";
}
function OutLoopsbtn11()
{
  document.getElementById("fl8").style.backgroundColor = "lightgreen";
}
function functionbtn1()
{
  document.getElementById("func1").style.backgroundColor = "yellow";
}
function outfunctionbtn1()
{
  document.getElementById("func1").style.backgroundColor = "lightgreen";
}
function functionbtn2()
{
  document.getElementById("func2").style.backgroundColor = "yellow";
}
function outfunctionbtn2()
{
  document.getElementById("func2").style.backgroundColor = "lightgreen";
}
function functionbtn3()
{
  document.getElementById("func3").style.backgroundColor = "yellow";
}
function outfunctionbtn3()
{
  document.getElementById("func3").style.backgroundColor = "lightgreen";
}
function functionbtn4()
{
  document.getElementById("func4").style.backgroundColor = "yellow";
}
function outfunctionbtn4()
{
  document.getElementById("func4").style.backgroundColor = "lightgreen";
}
function functionbtn5()
{
  document.getElementById("func5").style.backgroundColor = "yellow";
}
function outfunctionbtn5()
{
  document.getElementById("func5").style.backgroundColor = "lightgreen";
}
function functionbtn6()
{
  document.getElementById("func6").style.backgroundColor = "yellow";
}
function outfunctionbtn6()
{
  document.getElementById("func6").style.backgroundColor = "lightgreen";
}
function scopebtn1()
{
  document.getElementById("scope1").style.backgroundColor = "yellow";
}
function outscopebtn1()
{
  document.getElementById("scope1").style.backgroundColor = "lightgreen";
}
function scopebtn2()
{
  document.getElementById("scope2").style.backgroundColor = "yellow";
}
function outscopebtn2()
{
  document.getElementById("scope2").style.backgroundColor = "lightgreen";
}
function scopebtn3()
{
  document.getElementById("scope3").style.backgroundColor = "yellow";
}
function outscopebtn3()
{
  document.getElementById("scope3").style.backgroundColor = "lightgreen";
}
function scopebtn4()
{
  document.getElementById("scope4").style.backgroundColor = "yellow";
}
function outscopebtn4()
{
  document.getElementById("scope4").style.backgroundColor = "lightgreen";
}
function nextBtn()
{
  document.getElementById("next1").style.backgroundColor = "yellow";
}

function OutnextBtn()
{
  document.getElementById("next1").style.backgroundColor = "lightgreen";
}
function nextBtn2()
{
  document.getElementById("next2").style.backgroundColor = "yellow";
}

function OutnextBtn2()
{
  document.getElementById("next2").style.backgroundColor = "lightgreen";
}
function nextBtn3()
{
  document.getElementById("next3").style.backgroundColor = "yellow";
}

function OutnextBtn3()
{
  document.getElementById("next3").style.backgroundColor = "lightgreen";
}
function nextBtn4()
{
  document.getElementById("next4").style.backgroundColor = "yellow";
}

function OutnextBtn4()
{
  document.getElementById("next4").style.backgroundColor = "lightgreen";
}
function nextBtn5()
{
  document.getElementById("next5").style.backgroundColor = "yellow";
}

function OutnextBtn5()
{
  document.getElementById("next5").style.backgroundColor = "lightgreen";
}
function Quizbtn()
{
  document.getElementById("quiz1").style.backgroundColor = "yellow";
}

function Quizmouseout()
{
  document.getElementById("quiz1").style.backgroundColor = "lightgreen";
}

function Quizbtn2()
{
  document.getElementById("quiz2").style.backgroundColor = "yellow";
}

function Quizmouseout2()
{
  document.getElementById("quiz2").style.backgroundColor = "lightgreen";
}

function Quizbtn3()
{
  document.getElementById("quiz3").style.backgroundColor = "yellow";
}

function Quizmouseout3()
{
  document.getElementById("quiz3").style.backgroundColor = "lightgreen";
}

function Quizbtn4()
{
  document.getElementById("quiz4").style.backgroundColor = "yellow";
}

function Quizmouseout4()
{
  document.getElementById("quiz4").style.backgroundColor = "lightgreen";
}

function Quizbtn5()
{
  document.getElementById("quiz5").style.backgroundColor = "yellow";
}

function Quizmouseout5()
{
  document.getElementById("quiz5").style.backgroundColor = "lightgreen";
}

function Quizbtn6()
{
  document.getElementById("quiz6").style.backgroundColor = "yellow";
}

function Quizmouseout6()
{
  document.getElementById("quiz6").style.backgroundColor = "lightgreen";
}

function Quizbtn7()
{
  document.getElementById("quiz7").style.backgroundColor = "yellow";
}

function Quizmouseout7()
{
  document.getElementById("quiz7").style.backgroundColor = "lightgreen";
}

function Quizbtn8()
{
  document.getElementById("quiz8").style.backgroundColor = "yellow";
}

function Quizmouseout8()
{
  document.getElementById("quiz8").style.backgroundColor = "lightgreen";
}
function Quizbtn9()
{
  document.getElementById("quiz9").style.backgroundColor = "yellow";
}

function Quizmouseout9()
{
  document.getElementById("quiz9").style.backgroundColor = "lightgreen";
}
function LinkedinBtn()
{
  document.getElementById("linkedin2").style.backgroundColor = "yellow"
}

function linktoPython() {
  window.open("https://www.python.org/",'_blank')
}

function linktoLinkedIn() {
  window.open("https://www.linkedin.com/in/min-teck-ho/", '_blank')
}

function linktoLinkedInDev2()
{
  window.open("https://www.linkedin.com/in/chong-jerome/", '_blank')
}

function linktoSurvey() 
{
  window.open("Language_Suggestion_survey/index.html", '_blank')
}

function BacktotopBtn() {
  document.getElementById("top").style.backgroundColor = "yellow";
}

function OutToTop() {
  document.getElementById("top").style.backgroundColor = "lightgreen";
}

function mouseOut()
{
  document.getElementById("tryout").style.backgroundColor = "lightgreen";
  document.getElementById("linkedin1").style.backgroundColor = "lightgreen";
  document.getElementById("readmore").style.backgroundColor = "lightgreen";
}

function LinkedinOut()
{
  document.getElementById("linkedin2").style.backgroundColor = "lightgreen";
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
