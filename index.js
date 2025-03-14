               /* DARK/ LIGHT MODE */

var icon = document.getElementById("icon");

icon.addEventListener("click", myfunction);

function myfunction() {
    document.body.classList.toggle("dark-theme");

    // Use a single toggle and store the result in a variable
    var isDarkTheme = document.body.classList.contains("dark-theme");

    // Update the icon source based on the theme
    if (isDarkTheme) {
        icon.src = "img/sun.png";
    } else {
        icon.src = "img/moon.png";
    }
}


                     /* MENU TOGGLE */


  var menuList = document.getElementById("menuList");
    var icon1 = document.getElementById("icon1");


    function toggleMenu() {
  
  
       if (menuList.style.display === "none") {
            menuList.style.display = "block";
        } else {
            menuList.style.display = "none";
        }
    }

    // Add event listener to the button
    icon1.addEventListener("click", toggleMenu);



                     /*  HERO SECTION SLIDER  */




    var slideImg = document.getElementById("slideImg");

    var images =[
        "img/petroleum tanker.jpg",
        "img/tipper rear.jpg",
        "img/tank-truck-1388933_1920.jpg",
        "img/excavator.jpg",
        "img/working-cave large.jpg"
    ];

    var len =images.length;
    var i = 0;

    function slider() {
        if (i > len-1) {
            i = 0;
        }
        slideImg.src=images[i];
        i++;

        setTimeout('slider()', 6000) 

    }



//Creating navbar using Js
const box1 = document.createElement('div')

const att = document.createAttribute('class','headerjs')

document.body.prepend(box1)

//set value to the class





