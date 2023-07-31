window.onload = function(){
var cc=0;

const menuBT = document.getElementsByClassName("menuBT");
const nav = document.getElementById("nav");
const bar1 = document.getElementById("bar1");
const bar3 = document.getElementById("bar3");
const navLink1 = document.getElementById("navLink1");
const navLink2 = document.getElementById("navLink2");


document.getElementById("menuBT").onclick = function(){
    cc++;
    if (cc==1){
    nav.classList.remove("nav")
    bar1.classList.remove("fadeBar1");
    bar3.classList.remove("fadeBar3");
    nav.classList.remove("fadeNav");
    navLink1.classList.remove("fadeLink1");
    navLink2.classList.remove("fadeLink2");  

    bar1.classList.add("activeBar1");
    bar3.classList.add("activeBar3");
    nav.classList.add("activeNav");
    navLink1.classList.add("activeLink1");
    navLink2.classList.add("activeLink2");


    }else if (cc==2){
    cc=0;
    bar1.classList.add("fadeBar1");
    bar3.classList.add("fadeBar3");
    nav.classList.add("fadeNav");
    navLink1.classList.add("fadeLink1");
    navLink2.classList.add("fadeLink2");    

    bar1.classList.remove("activeBar1");
    bar3.classList.remove("activeBar3");
    nav.classList.remove("activeNav");
    navLink1.classList.remove("activeLink1");
    navLink2.classList.remove("activeLink2");




     
    //  document.getElementById("bar1").style.transform="translate(0, -0.5px)";
    //  document.getElementById("bar1").style.transitionDuration="800ms";

    //  document.getElementById("bar3").style.transform="translate(0, 0.4px)";
    //  document.getElementById("bar3").style.transitionDuration="800ms"; 

    //  document.getElementById("navLink1").style.color="transparent";
    //  document.getElementById("navLink2").style.color="transparent";
    //  document.getElementById("navLink1").style.transitionDuration="800ms";
    //  document.getElementById("navLink2").style.transitionDuration="800ms";            
        
    //  document.getElementById("nav").style.backgroundColor="transparent";

    }
};
}



              

