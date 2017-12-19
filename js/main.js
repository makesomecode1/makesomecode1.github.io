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

var click = document.getElementById("click");
click.onclick = function()
{
    alert("Click!")
}

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

var range = +document.getElementById("range").value;
var ran = document.getElementById("range")

var f = document.getElementById("f");
var s = document.getElementById("s");
var t = document.getElementById("t");
var fo = document.getElementById("fo");






ran.onchange = function()
{
   range = document.getElementById("range").value;
    if(range<=25)
    {
       f.style.display = "block";
       s.style.display = "none";
       t.style.display = "none";
       fo.style.display = "none";
    }
    else if(range<=50)
    {
     f.style.display = "none";
       s.style.display = "block";
       t.style.display = "none";
       fo.style.display = "none";   
    }
    else if(range<=75)
    {
      f.style.display = "none";
       s.style.display = "none";
       t.style.display = "block";
       fo.style.display = "none";    
    }

    else if(range<=100)
    {
       f.style.display = "none";
       s.style.display = "none";
       t.style.display = "none";
       fo.style.display = "block"; 
    }
}








