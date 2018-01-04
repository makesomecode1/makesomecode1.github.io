$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1,
            nav:false,
            loop:true
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})


var mbtn = document.getElementById("mbtn");
var btnn = document.getElementsByClassName("btnn"); 
var fm = document.getElementById("fm");
var sm = document.getElementById("sm");
var close = document.getElementById("close");

mbtn.onclick = function()
{
     for(var i = 0; i < btnn.length; i++){
     btnn[i].style.display = "block"
}
fm.style.transform = "rotate(410deg)";
sm.style.transform = "rotate(-410deg)";
mbtn.style.opacity = '0'
}



close.onclick = function()
{
     for(var i = 0; i < btnn.length; i++){
     btnn[i].style.display = "none";
     fm.style.transform = "rotate(0deg)";
sm.style.transform = "rotate(0deg)";
}
mbtn.style.opacity = '100'
}

var act = document.getElementById("act");
var tab = document.getElementById("tab");
var close1 = document.getElementById("close1");

act.onclick = function()
{
    tab.style.top="43px"; 
    tab.style.opacity="1";
}

close1.onclick = function()
{
    tab.style.top="-400px";
    tab.style.opacity="0";
}

var modal = document.getElementById("modal");
var close2 = document.getElementById("close2");
var clicker = document.getElementById("clicker");

clicker.onclick = function()
{
  modal.style.display = "block"
}
close2.onclick = function()
{
  modal.style.display = "none"
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled>=700)
  {
    clicker.style.opacity = "0";


  }

  else if(scrolled<700)
  {
    clicker.style.opacity = "1";
  }
  else
  {
    clicker.style.opacity = "1";
  }
}

var lname = document.getElementById("lname");
var lphone = document.getElementById("lphone");
var inpname = document.getElementById("inpname");
var inpphone = document.getElementById("inpphone");
var lbtn = document.getElementById("lbtn");

inpname.onfocus = function()
{
  lname.style.top = "0px";
  lname.style.fontSize = "0.8em";
  lname.style.color = "black";
}


inpname.onblur = function()
{
  
 var inpnamevl = inpname.value.length;

 if(inpnamevl==0)
 {
   lname.style.top = "27px";
  lname.style.fontSize = "1em";
  lname.style.color = "gray";
 }

else if(inpnamevl<4)
 {
  lname.style.top = "0px";
  lname.style.fontSize = "0.9em";
  lname.style.color = "red";
 }

  else if(inpnamevl>0)
 {

  lname.style.top = "0px";
  lname.style.fontSize = "0.8em";
  lname.style.color = "black";

 }




 else{}
 

}



inpphone.onfocus = function()
{
  lphone.style.top = "0px";
  lphone.style.fontSize = "0.8em";
  lphone.style.color = "black";
}


inpphone.onblur = function()
{
  
 var inpphonevl = inpphone.value.length;

if(inpphonevl==0)
 {
  lphone.style.top = "27px";
  lphone.style.fontSize = "1em";
  lphone.style.color = "gray";
 }


 else if(inpphonevl<10)
 {

  lphone.style.top = "0px";
  lphone.style.fontSize = "0.9em";
  lphone.style.color = "red";
 }

   else if(isNaN(inpphone.value))
 {

  lphone.style.top = "0px";
  lphone.style.fontSize = "0.9em";
  lphone.style.color = "red";
  
 }


 else if(inpphonevl>0)
 {

  lphone.style.top = "0px";
  lphone.style.fontSize = "0.8em";
  lphone.style.color = "black";
 }
 

}

var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");

l1.onclick = function()
{
 

  for(i=1; i<6; i++)
  {
        var a = i;
        console.log(a);
        var b = "d"+a;
        var e4 = document.getElementById(b).style.fontSize="0em"; 
        var e4 = document.getElementById(b).style.padding="0px";
        d1.style.fontSize="0.9em";
        d1.style.padding="10px";
  }
}

l2.onclick = function()
{
  for(i=1; i<6; i++)
  {
        var a = i;
        console.log(a);
        var b = "d"+a;
        var e4 = document.getElementById(b).style.fontSize="0em"; 
        var e4 = document.getElementById(b).style.padding="0px";
        d2.style.fontSize="0.9em";
        d2.style.padding="10px";
  }
}

l3.onclick = function()
{
  for(i=1; i<6; i++)
  {
        var a = i;
        console.log(a);
        var b = "d"+a;
        var e4 = document.getElementById(b).style.fontSize="0em"; 
        var e4 = document.getElementById(b).style.padding="0px";
        d3.style.fontSize="0.9em";
        d3.style.padding="10px";
  }
}

l4.onclick = function()
{
  for(i=1; i<6; i++)
  {
        var a = i;
        console.log(a);
        var b = "d"+a;
        var e4 = document.getElementById(b).style.fontSize="0em"; 
        var e4 = document.getElementById(b).style.padding="0px";
        d4.style.fontSize="0.9em";
        d4.style.padding="10px";
  }
}

l5.onclick = function()
{
  for(i=1; i<6; i++)
  {
        var a = i;
        console.log(a);
        var b = "d"+a;
        var e4 = document.getElementById(b).style.fontSize="0em"; 
        var e4 = document.getElementById(b).style.padding="0px";
        d5.style.fontSize="0.9em";
        d5.style.padding="10px";
  }
}


















