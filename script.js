// function to open sidenav in tutorial lesson pages on mobile view.
function w3_open() {
  document.getElementById("Sidenav").style.display = "block";
}
// function to close sidenav in tutorial lesson pages on mobile view.
function w3_close() {
  document.getElementById("Sidenav").style.display = "none";
}

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
  
  
  // This function is used to focus out the current fields that being focus 
  // and move the focus to the next fields.
  function outfocusEmail(x) {
    var x = document.getElementById("emailAddr");
    x.style.background = "white";
  }
  // This function is used to focus out the password field that is being focus 
  // and move the focus to the next fields.
  function outfocusPassword(x) {
    var x = document.getElementById("password");
    x.style.background = "white";
  }
  //  This function is used to focus out the repeat password field that is being focus
  //  and move the focus to the next fields
  function outfocusrepPassword(x) {
    var x = document.getElementById("repeat-pw");
    x.style.background = "white";
  }

  // This function is used to focus out the current fields that being focus 
  //and move the focus to the next fields.
  function outfocusContact(x) {
    var x = document.getElementById("contact");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }
  
  // This function is used to focus out the current fields that being focus 
  //and move the focus to the next fields.
  function outfocustextarea(x) {
    var x = document.getElementById("enquiries");
    x.value = x.value.toUpperCase();
    x.style.background = "white";
  }

// function to link the try out our tutorial button in index page to tutorial page.
function myFunction() {
    location.replace("tutorial.html");
  }

// when submit button for sign up modal is clicked, display success! message 
  $("#signbtn").click(function(){
    $(this).val("Success!");
    $(this).animate({
        marginLeft: '-180px',
        width:"220px"
  });
});
// function to add click event listener to display the message Signup Success 
//when the sign up modal form is submitted.
function SignUpSuccess() {
  document.getElementById("signbtn").addEventListener("click",successMessage);
  // get the button element id signbtn and add submit event listener called linkToSuccess to 
  // link to signup success page.
  document.getElementById("signbtn").addEventListener("submit",linkToSuccess)
}
// function to display the success message "Signup Success"
function successMessage(){
  // get the text element id text6 and display the message using innerHTML
  document.getElementById("text6").innerHTML = "Signup Success";
}
// function to redirect to signup success page when user submits the sign up modal form
function linkToSuccess() {
  window.open("signup_success.html");
}
  // function to display text when the readmore button in functions lesson page is clicked. 
function displayText() {
  // this is used to get the button id "readmore" and add a click event listener to display the information.
  document.getElementById("readmore").addEventListener("click", displayText);
  // this is used to get the text id "text" and display the message using innerHTML
  document.getElementById('text').innerHTML =
    "Arguments are specified after the function name, inside the parentheses." +
    " You can add as many arguments as you want, just separate them with a comma." +
    " When the function is called, we pass along a first name, which is used inside the function to print the full name:";
}
// function used to display more text when the readmore button in casting lesson page is clicked
function castingText() {
  // this is used to get the button id "readmore2" and add a click event listener to display the information
  document.getElementById("readmore2").addEventListener("click", castingText);
  // this is used to get the text id "text2" and display the message using innerHTML
  document.getElementById('text2').innerHTML =
    "Python is an object-orientated language" +
    " as such it uses classes to define data types, including its primitive types";
}
// function to display more text when the readmore button in string format lesson page is clicked.
function formatText() {
  // this is used to get the button id "readmore3" and add a click event listener to display the information 
  document.getElementById("readmore3").addEventListener("click", formatText);
  // this is used to get the text id "text3" and display the message using innerHTML
  document.getElementById('text3').innerHTML =
    "we can combine strings and numbers by using the format() method" +
    " The format() method takes the passed arguments, formats them, and places them in the string where the placeholders {} are:";
}
// function to display more text when the readmore button in function lesson page is clicked
function functionText() {
  // this is used to get the button id "readmore4" and add a click event listener to display the information
  document.getElementById("readmore4").addEventListener("click", functionText);
  // this is used to get the text id "text4" and display the message using innerHTML
  document.getElementById('text4').innerHTML =
    "You can pass data, known as parameters, into a function." + " A function can return data as a result.";
}
// function used to get button id and add hover effects to the tryout and readmore button
function onHover()
{
  // get the button id "tryout" and style the button to yellow when mouse over.
  document.getElementById("tryout").style.backgroundColor = "yellow";
  // get the button id "linkedin1" and style the button to yellow when mouse over.
  document.getElementById("linkedin1").style.backgroundColor = "yellow";
  // get the button id "readmore" and style the button to yellow when mouse over.
  document.getElementById("readmore").style.backgroundColor = "yellow";
}
// function used to add hover effects to the individual try it yourself button
function TryOutButton()
{
  // get the button id "trybtn" and style the button to yellow when mouse over.
  document.getElementById("trybtn").style.backgroundColor = "yellow";
}
// function used to add hover effects to the individual try it yourself button
function trybtn2()
{
  // get the button id "trybtn2" and style the button to yellow when mouse over.
  document.getElementById("trybtn2").style.backgroundColor = "yellow";
  // get the button id "trybtn3" and style the button to yellow when mouse over.
  document.getElementById("trybtn3").style.backgroundColor = "yellow";
}
// function used to add hover effects to the individual try it yourself button
function trybtn()
{
  // get the button id "trybtn4" and style the button to yellow when mouse over.
  document.getElementById("trybtn4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outbtn() {
  // get the button id "trybtn4" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn4").style.backgroundColor = "lightgreen";
}
// function used to add mouse out effect when the button is mouse out.
function Trybtnout()
{
  // get the button id "trybtn" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn").style.backgroundColor = "lightgreen";
}
// function used to add mouse out effect when the button is mouse out.
function Trybtnout2()
{
  // get the button id "trybtn2" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn2").style.backgroundColor = "lightgreen";
  // get the button id "trybtn3" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function variablebtn()
{
  // get the button id "trybtn6" and style the button to yellow when mouse over.
  document.getElementById("trybtn6").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn()
{
  // get the button id "trybtn6" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn6").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn2()
{
  // get the button id "trybtn7" and style the button to yellow when mouse over.
  document.getElementById("trybtn7").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn2()
{
// get the button id "trybtn7" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn7").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn3()
{
  // get the button id "trybtn8" and style the button to yellow when mouse over.
  document.getElementById("trybtn8").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn3()
{
  // get the button id "trybtn8" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn8").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn4()
{
  // get the button id "trybtn9" and style the button to yellow when mouse over.
  document.getElementById("trybtn9").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn4()
{
  // get the button id "trybtn9" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn9").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn5()
{
  //  get the button id "trybtn10" and style the button to yellow when mouse over.
  document.getElementById("trybtn10").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn5()
{
  // get the button id "trybtn10" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn10").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn6()
{
  // get the button id "trybtn11" and style the button to yellow when mouse over.
  document.getElementById("trybtn11").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn6()
{
  // get the button id "trybtn9" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn11").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn7()
{
  // get the button id "trybtn12" and style the button to yellow when mouse over.
  document.getElementById("trybtn12").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn7()
{
  // get the button id "trybtn12" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn12").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn8()
{
  // get the button id "trybtn13" and style the button to yellow when mouse over.
  document.getElementById("trybtn13").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn8()
{
  // get the button id "trybtn13" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn13").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn9()
{
  // get the button id "trybtn14" and style the button to yellow when mouse over.
  document.getElementById("trybtn14").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn9()
{
  // get the button id "trybtn14" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn14").style.backgroundColor = "lightgreen";
}
//  function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn10()
{
  // get the button id "trybtn15" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn15").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn10()
{
  // get the button id "trybtn15" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn15").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn11()
{
  // get the button id "trybtn16" and style the button to yellow when mouse over.
  document.getElementById("trybtn16").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn11()
{
  // get the button id "trybtn16" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn16").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn12()
{
  // get the button id "trybtn17" and style the button to yellow when mouse over.
  document.getElementById("trybtn17").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn12()
{
  // get the button id "trybtn17" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn17").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn13()
{
  // get the button id "trybtn18" and style the button to yellow when mouse over.
  document.getElementById("trybtn18").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn13()
{
  // get the button id "trybtn18" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn18").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn14()
{
  // get the button id "trybtn19" and style the button to yellow when mouse over.
  document.getElementById("trybtn19").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn14()
{
  // get the button id "trybtn19" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn19").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn15()
{
  // get the button id "trybtn19" and style the button to yellow when mouse over.
  document.getElementById("trybtn20").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn15()
{
  //  get the button id "trybtn19" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn20").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn16()
{
  // get the button id "trybtn21" and style the button to yellow when mouse over.
  document.getElementById("trybtn21").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn16()
{
  //  get the button id "trybtn21" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn21").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn17()
{
  // get the button id "trybtn22" and style the button to yellow when mouse over.
  document.getElementById("trybtn22").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn17()
{
  // get the button id "trybtn22" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn22").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn18()
{
  // get the button id "trybtn23" and style the button to yellow when mouse over.
  document.getElementById("trybtn23").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn18()
{
  // get the button id "trybtn23" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn23").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn19()
{
  // get the button id "trybtn24" and style the button to yellow when mouse over.
  document.getElementById("trybtn24").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn19()
{
  // get the button id "trybtn24" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn24").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn20()
{
  //  get the button id "trybtn25" and style the button to yellow when mouse over.
  document.getElementById("trybtn25").style.backgroundColor = "yellow";
}
//  function used to add mouse out effect when the button is mouse out.
function OutVariablebtn20()
{
  // get the button id "trybtn25" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn25").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn21()
{
  // get the button id "trybtn26" and style the button to yellow when mouse over.
  document.getElementById("trybtn26").style.backgroundColor = "yellow";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn22()
{
  // get the button id "trybtn27" and style the button to yellow when mouse over.
  document.getElementById("trybtn27").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn22()
{
  // get the button id "trybtn27" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn27").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn23()
{
  // get the button id "trybtn28" and style the button to yellow when mouse over.
  document.getElementById("trybtn28").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn23()
{
  // get the button id "trybtn28" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn28").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn24()
{
  // get the button id "trybtn27" and style the button to yellow when mouse over.
  document.getElementById("trybtn29").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn24()
{
  // get the button id "trybtn29" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn29").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn25()
{
  // get the button id "trybtn30" and style the button to yellow when mouse over.
  document.getElementById("trybtn30").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn25()
{
  // get the button id "trybtn30" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn30").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn26()
{
  // get the button id "trybtn31" and style the button to yellow when mouse over.
  document.getElementById("trybtn31").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn26()
{
  // get the button id "trybtn31" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn31").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in variable tutorial page
function Variablebtn27()
{
  // get the button id "trybtn32" and style the button to yellow when mouse over.
  document.getElementById("trybtn32").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutVariablebtn27()
{
  // get the button id "trybtn32" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn32").style.backgroundColor = "lightgreen";
}
//  function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn()
{
  // get the button id "trybtn33" and style the button to yellow when mouse over.
  document.getElementById("trybtn33").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn()
{
  // get the button id "trybtn33" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn33").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn2()
{
  // get the button id "trybtn34" and style the button to yellow when mouse over.
  document.getElementById("trybtn34").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn2()
{
  // get the button id "trybtn34" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn34").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn3()
{
  // get the button id "trybtn35" and style the button to yellow when mouse over.
  document.getElementById("trybtn35").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn3()
{
  // get the button id "trybtn35" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn35").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn4()
{
  // get the button id "trybtn36" and style the button to yellow when mouse over.
  document.getElementById("trybtn36").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn4()
{
  // get the button id "trybtn36" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn36").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn5()
{
  //  get the button id "trybtn37" and style the button to yellow when mouse over.
  document.getElementById("trybtn37").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn5()
{
  // get the button id "trybtn37" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn37").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn6()
{
  // get the button id "trybtn38" and style the button to yellow when mouse over.
  document.getElementById("trybtn38").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn6()
{
  // get the button id "trybtn38" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn38").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn7()
{
  //  get the button id "trybtn39" and style the button to yellow when mouse over.
  document.getElementById("trybtn39").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn7()
{
  // get the button id "trybtn39" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn39").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn8()
{
  // get the button id "trybtn40" and style the button to yellow when mouse over.
  document.getElementById("trybtn40").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn8()
{
  //  get the button id "trybtn40" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn40").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn9()
{
  // get the button id "trybtn41" and style the button to yellow when mouse over.
  document.getElementById("trybtn41").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn9()
{
  // get the button id "trybtn41" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn41").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn10()
{
  // get the button id "trybtn41" and style the button to yellow when mouse over.
  document.getElementById("trybtn42").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn10()
{
  // get the button id "trybtn42" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn42").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn11()
{
  // get the button id "trybtn43" and style the button to yellow when mouse over.
  document.getElementById("trybtn43").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn11()
{
  // get the button id "trybtn43" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn43").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn12()
{
  // get the button id "trybtn43" and style the button to yellow when mouse over.
  document.getElementById("trybtn44").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn12()
{
  // get the button id "trybtn44" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn44").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in string tutorial page
function Stringbtn13()
{
  // get the button id "trybtn45" and style the button to yellow when mouse over.
  document.getElementById("trybtn45").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Outstringbtn13()
{
  // get the button id "trybtn45" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybtn45").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in boolean tutorial page
function Booleanbtn1()
{
  // get the button id "trybool" and style the button to yellow when mouse over.
  document.getElementById("trybool").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutBooleanbtn1()
{
  // get the button id "trybool" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybool").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in boolean tutorial page
function Booleanbtn2()
{
  // get the button id "trybool2" and style the button to yellow when it is mouse over.
  document.getElementById("trybool2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutBooleanbtn2()
{
  // get the button id "trybool2" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybool2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in boolean tutorial page
function Booleanbtn3()
{
  // get the button id "trybool3" and style the button to yellow when it is mouse over.
  document.getElementById("trybool3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutBooleanbtn3()
{
  // get the button id "trybool3" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybool3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in boolean tutorial page
function Booleanbtn4()
{
  // get the button id "trybool4" and style the button to yellow when it is mouse over.
  document.getElementById("trybool4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutBooleanbtn4()
{
  // get the button id "trybool4" and style the button to lightgreen when it is mouse out.
  document.getElementById("trybool4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in while loops tutorial page
function Loopsbtn1()
{
  // get the button id "wl1" and style the button to yellow when it is mouse over.
  document.getElementById("wl1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn1()
{
  // get the button id "wl1" and style the button to lightgreen when it is mouse out.
  document.getElementById("wl1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in while loops tutorial page
function Loopsbtn2()
{
  // get the button id "wl2" and style the button to yellow when it is mouse over.
  document.getElementById("wl2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn2()
{
  // get the button id "wl2" and style the button to lightgreen when it is mouse out.
  document.getElementById("wl2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in while loops tutorial page
function Loopsbtn3()
{
  // get the button id "wl3" and style the button to yellow when it is mouse over.
  document.getElementById("wl3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn3()
{
  //  get the button id "wl3" and style the button to lightgreen when it is mouse out.
  document.getElementById("wl3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in while loops tutorial page
function Loopsbtn4()
{
  // get the button id "wl4" and style the button to yellow when it is mouse over.
  document.getElementById("wl4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn4()
{
  // get the button id "wl4" and style the button to lightgreen when it is mouse out.
  document.getElementById("wl4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn5()
{
  // get the button id "fl1" and style the button to yellow when it is mouse over.
  document.getElementById("fl1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn5()
{
  //  get the button id "fl1" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn6()
{
  // get the button id "fl2" and style the button to yellow when it is mouse over.
  document.getElementById("fl2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn6()
{
  // get the button id "fl2" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn7()
{
  // get the button id "fl3" and style the button to yellow when it is mouse over.
  document.getElementById("fl3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn7()
{
  // get the button id "fl3" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl3").style.backgroundColor = "lightgreen";
}
//  function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn8()
{
  // get the button id "fl4" and style the button to yellow when it is mouse over.
  document.getElementById("fl4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn8()
{
  // get the button id "fl4" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn8()
{
  //  get the button id "fl5" and style the button to yellow when it is mouse over.
  document.getElementById("fl5").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn8()
{
  // get the button id "fl5" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl5").style.backgroundColor = "lightgreen";
}
//  function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn9()
{
  //  get the button id "fl6" and style the button to yellow when it is mouse over.
  document.getElementById("fl6").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn9()
{
  // get the button id "fl6" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl6").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn10()
{
  // get the button id "fl6" and style the button to yellow when it is mouse over.
  document.getElementById("fl7").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn10()
{
  // get the button id "fl7" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl7").style.backgroundColor = "lightgreen";
}
//  function used to add hover effects to the individual try it yourself button in for loops tutorial page
function Loopsbtn11()
{
  //  get the button id "fl8" and style the button to yellow when it is mouse over.
  document.getElementById("fl8").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutLoopsbtn11()
{
  // get the button id "fl8" and style the button to lightgreen when it is mouse out.
  document.getElementById("fl8").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn1()
{
  //  get the button id "func1" and style the button to yellow when it is mouse over.
  document.getElementById("func1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn1()
{
  // get the button id "func1" and style the button to lightgreen when it is mouse out.
  document.getElementById("func1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn2()
{
  // get the button id "func2" and style the button to yellow when it is mouse over.
  document.getElementById("func2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn2()
{
  // get the button id "func2" and style the button to lightgreen when it is mouse out.
  document.getElementById("func2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn3()
{
  // get the button id "func3" and style the button to yellow when it is mouse over.
  document.getElementById("func3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn3()
{
  // get the button id "func3" and style the button to lightgreen when it is mouse out.
  document.getElementById("func3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn4()
{
  //  get the button id "func4" and style the button to yellow when it is mouse over.
  document.getElementById("func4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn4()
{
  // get the button id "func4" and style the button to lightgreen when it is mouse out.
  document.getElementById("func4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn5()
{
  // get the button id "func5" and style the button to yellow when it is mouse over.
  document.getElementById("func5").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn5()
{
  // get the button id "func5" and style the button to lightgreen when it is mouse out.
  document.getElementById("func5").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in functions tutorial page
function functionbtn6()
{
  // get the button id "func6" and style the button to yellow when it is mouse over.
  document.getElementById("func6").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outfunctionbtn6()
{
  // get the button id "func6" and style the button to lightgreen when it is mouse out.
  document.getElementById("func6").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in scope tutorial page
function scopebtn1()
{
  // get the button id "scope1" and style the button to yellow when it is mouse over.
  document.getElementById("scope1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outscopebtn1()
{
  // get the button id "scope1" and style the button to lightgreen when it is mouse out.
  document.getElementById("scope1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in scope tutorial page
function scopebtn2()
{
  // get the button id "scope1" and style the button to yellow when it is mouse over.
  document.getElementById("scope2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outscopebtn2()
{
  // get the button id "scope2" and style the button to lightgreen when it is mouse out.
  document.getElementById("scope2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in scope tutorial page
function scopebtn3()
{
  // get the button id "scope3" and style the button to yellow when it is mouse over.
  document.getElementById("scope3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outscopebtn3()
{
  // get the button id "scope3" and style the button to lightgreen when it is mouse out.
  document.getElementById("scope3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to the individual try it yourself button in scope tutorial page
function scopebtn4()
{
  // get the button id "scope4" and style the button to yellow when it is mouse over.
  document.getElementById("scope4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function outscopebtn4()
{
  // get the button id "scope4" and style the button to lightgreen when it is mouse out.
  document.getElementById("scope4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to next button in tutorials page to link to next lesson. 
function nextBtn()
{
  // get the button id "next1" and style the button to yellow when it is mouse over.
  document.getElementById("next1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutnextBtn()
{
  // get the button id "next1" and style the button to lightgreen when it is mouse out.
  document.getElementById("next1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to next button in tutorials page to link to next lesson. 
function nextBtn2()
{
  // get the button id "next2" and style the button to yellow when it is mouse over.
  document.getElementById("next2").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutnextBtn2()
{
  // get the button id "next2" and style the button to lightgreen when it is mouse out.
  document.getElementById("next2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to next button in tutorials page to link to next lesson. 
function nextBtn3()
{
  // get the button id "next3" and style the button to yellow when it is mouse over.
  document.getElementById("next3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutnextBtn3()
{
  // get the button id "next3" and style the button to lightgreen when it is mouse out.
  document.getElementById("next3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to next button in tutorials page to link to next lesson.
function nextBtn4()
{
  // get the button id "next4" and style the button to yellow when it is mouse over.
  document.getElementById("next4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutnextBtn4()
{
  // get the button id "next4" and style the button to lightgreen when it is mouse out.
  document.getElementById("next4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to next button in tutorials page to link to next lesson.
function nextBtn5()
{
  // get the button id "next5" and style the button to yellow when it is mouse over.
  document.getElementById("next5").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutnextBtn5()
{
  // get the button id "next5" and style the button to lightgreen when it is mouse out.
  document.getElementById("next5").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn()
{
  // get the button id "quiz1" and style the button to yellow when it is mouse over.
  document.getElementById("quiz1").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout()
{
  // get the button id "quiz1" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz1").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn2()
{
  //  get the button id "quiz2" and style the button to yellow when it is mouse over.
  document.getElementById("quiz2").style.backgroundColor = "yellow";
}
//  function used to add mouse out effect when the button is mouse out.
function Quizmouseout2()
{
  // get the button id "quiz2" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz2").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn3()
{
  // get the button id "quiz3" and style the button to yellow when it is mouse over.
  document.getElementById("quiz3").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout3()
{
  // get the button id "quiz3" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz3").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn4()
{
  // get the button id "quiz4" and style the button to yellow when it is mouse over.
  document.getElementById("quiz4").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout4()
{
  //  get the button id "quiz4" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz4").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn5()
{
  // get the button id "quiz5" and style the button to yellow when it is mouse over.
  document.getElementById("quiz5").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout5()
{
  //  get the button id "quiz5" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz5").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn6()
{
  // get the button id "quiz6" and style the button to yellow when it is mouse over.
  document.getElementById("quiz6").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout6()
{
  // get the button id "quiz6" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz6").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn7()
{
  // get the button id "quiz7" and style the button to yellow when it is mouse over.
  document.getElementById("quiz7").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout7()
{
  // get the button id "quiz7" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz7").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn8()
{
  // get the button id "quiz8" and style the button to yellow when it is mouse over.
  document.getElementById("quiz8").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout8()
{
  // get the button id "quiz8" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz8").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to quiz button in tutorials page.
function Quizbtn9()
{
  // get the button id "quiz9" and style the button to yellow when it is mouse over.
  document.getElementById("quiz9").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function Quizmouseout9()
{
  // get the button id "quiz9" and style the button to lightgreen when it is mouse out.
  document.getElementById("quiz9").style.backgroundColor = "lightgreen";
}
// function used to add hover effects to linkedin button in index page.
function LinkedinBtn()
{
  // get the button id "linkedin2" and style the button to yellow when it is mouse over.
  document.getElementById("linkedin2").style.backgroundColor = "yellow";
}
// function used to open and redirect official python site when the read more ... button on index page is clicked.
// it redirects using window.open and _blank will open it in a new tab.
function linktoPython() {
  window.open("https://www.python.org/",'_blank');
}
// function used to redirect to -- Dev 1 Min Teck -- Linkedin profile when the get in touch on Linkedin button
// is clicked. it redirects using window.open and _blank will open it in a new tab. 
function linktoLinkedIn() {
  window.open("https://www.linkedin.com/in/min-teck-ho/", '_blank');
}
// function used to redirect to -- Dev 2 Jerome -- Linkedin profile when the get in touch on Linkedin button
// is clicked. it redirects using window.open and _blank will open it in a new tab. 
function linktoLinkedInDev2()
{
  window.open("https://www.linkedin.com/in/chong-jerome/", '_blank');
}
// function used to redirect user to the external survey when the language suggestion is clicked.
// _blank will open survey in a new tab 
function linktoSurvey() 
{
  window.open("Language_Suggestion_survey/index.html", '_blank');
}
// function used to add hover effects to the back to top button in index page.
function BacktotopBtn() {
  // get the button id "top" and style the button background colour to yellow when it is moused over.
  document.getElementById("top").style.backgroundColor = "yellow";
}
// function used to add mouse out effect when the button is mouse out.
function OutToTop() {
  // get the button id "top" and style the button to lightgreen when it is mouse out.
  document.getElementById("top").style.backgroundColor = "lightgreen";
}
// function used to add mouse out effect when the button is mouse out.
function mouseOut()
{
  // get the button id "tryout" and style the button to lightgreen when it is mouse out.
  document.getElementById("tryout").style.backgroundColor = "lightgreen";
  // get the button id "linkedin1" and style the button to lightgreen when it is mouse out.
  document.getElementById("linkedin1").style.backgroundColor = "lightgreen";
  // get the button id "readmore" and style the button to lightgreen when it is mouse out.
  document.getElementById("readmore").style.backgroundColor = "lightgreen";
}
// function used to add mouse out effect when the button is mouse out.
function LinkedinOut()
{
  // get the button id "linkedin2" and style the button to lightgreen when it is mouse out.
  document.getElementById("linkedin2").style.backgroundColor = "lightgreen";
}

// Get the modal
function SignUpForm() {
  // get the modal id "SignupModal"
  var modal = document.getElementById('SignupModal');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  }

// when document is ready, request api from restdb 
$(document).ready(function () {
    // RestDB api key
    const APIKEY = "61fe3faf6a791555010217e6";

// api
var settings = {
    "async": true,
    "crossDomain": true,
    // get api from the url
    "url": "https://assignmentapi-7328.restdb.io/rest/students",
    // GET api data
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "APIKEY",
      "cache-control": "no-cache"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

// api
var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  // get api from the url
  "url": "https://assignmentapi-7328.restdb.io/rest/students",
  // POST api data to RESTDB.
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "APIKEY",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// api - PUT 
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
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
});
