//Get the modal
var  modal = document.getElementById("ModalTest");

var images = document.getElementsByClassName("img");

var modalText = document.getElementById("Modal_Description");

//Get the image
var img = document.getElementById("test_trigger");

//Get the <span> element
var span = document.getElementsByClassName("close")[0];

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
//When the user clicks the x button, close the modal.
span.onclick = function()
{
  FadeOut(modal);
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
