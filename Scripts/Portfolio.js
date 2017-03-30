//Get the modal
var  modal = document.getElementById("InfoModal");
var modalHeader = document.getElementById("Modal_Header");
var modalText = document.getElementById("Modal_Description");

var images = document.getElementsByClassName("img");

//Get the image
var img = document.getElementById("test_trigger");

for(var i = 0; i < images.length; i++)
{
   (function ()
   {
     var k = i;
     images[i].addEventListener("click", function(){
     FadeIn(modal);
     EditText(k);
    }, false);
   }());

}

window.onclick = function(event)
{
  if(event.target == modal)
  {
    FadeOut(modal);
  }
}

function FadeIn(element)
{
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += op * 0.1;
  }, 30);
}

function FadeOut(element)
{
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    op -= op * 0.1;
  }, 30);
}

function EditText(index)
{
  if(index == '0')
  {
    modalHeader.innerHTML = "Hi";
    modalText.innerHTML = "Wow";
  }
  else if(index == '1')
  {
    modalText.innerHTML = "Amazing!";
  }
  else if(index == '2')
  {
    modalText.innerHTML = "AHHH";
  }
  else if(index == '3')
  {
    modalText.innerHTML = "Blah blah blah";
  }
}
