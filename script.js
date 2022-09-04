var sourceURL="https://api.funtranslations.com/translate/ferb-latin.json";
var navbutton=document.querySelector("#navigation-button");
var navdiv=document.querySelector(".nav-div")
var txtarea=document.querySelector(".text-area")
function geturl(text)
{
  return sourceURL+"?text="+text;
}
function errorhandler(error)
{
  alert("Please try again Later!!!")
  console.log("Error is "+error)
}
function handleclick()
{
  var text=txtarea.value;
  fetch(geturl(text))
  .then((response)=>response.json())
  .then(text => navdiv.innerText=""+text.contents['translation'])
  .catch(errorhandler)
}
navbutton.addEventListener("click",handleclick);