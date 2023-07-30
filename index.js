var cc = 0;

//order and readabilty is everything in coding, you should be more careful with your that.
const menuBT = document.getElementById("menuBT");
const nav = document.getElementById("nav");
const bar1 = document.getElementById("bar1");
const bar3 = document.getElementById("bar3");
const navLink1 = document.getElementById("navLink1");
const navLink2 = document.getElementById("navLink2");

window.onload = function (x) {

    document.getElementById("menuBT").onclick = function (x) {
        //your solution is great, focus on toggle that part. Instead of giving everytime a "style" you can change the class of the element.
        //for that you should make a class in css and give it to the element with classList.add("className") and remove it with classList.remove("className")
        //and there is a bug in main page i believe you can find it :)
        //instead of using <script> tag in html you can use <script src="index.js"></script> tag in html
        cc++;
        if (cc == 1) {

            nav.style.backgroundColor = "rgb(50% 0% 31%)";
            nav.style.transitionDuration = "800ms";

            bar1.style.transform = "translate(0, 11px)";
            bar1.style.transitionDuration = "800ms";

            bar3.style.transform = "translate(0, -11px)";
            bar3.style.transitionDuration = "800ms";

            navLink1.style.color = "black";
            navLink2.style.color = "black";
            navLink1.style.transitionDuration = "800ms";
            navLink2.style.transitionDuration = "800ms";

        } else if (cc == 2) {

            cc = 0;
            document.getElementById("bar1").style.transform = "translate(0, -0.5px)";
            document.getElementById("bar1").style.transitionDuration = "800ms";

            document.getElementById("bar3").style.transform = "translate(0, 0.4px)";
            document.getElementById("bar3").style.transitionDuration = "800ms";

            document.getElementById("navLink1").style.color = "transparent";
            document.getElementById("navLink2").style.color = "transparent";
            document.getElementById("navLink1").style.transitionDuration = "800ms";
            document.getElementById("navLink2").style.transitionDuration = "800ms";

            document.getElementById("nav").style.backgroundColor = "transparent";

        }
    };
}

