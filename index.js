 


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




  /*   var slideImg = document.getElementById("slideImg");

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

    } */



//Creating navbar using Js
const box1 = document.createElement('div')
box1.setAttribute("style", "border-bottom: 3px solid grey;")
box1.style.backgroundColor='black'
box1.className ='headerjs'
document.body.prepend(box1)
//Add header logo div

const logo = document.createElement('img')
logo.className='logo'
logo.src='img/kata africa logo 1.png'

box1.appendChild(logo)









// Creating Menu dynamically


const menuItems = [
    { name: "Home", url: "#" },
    { name: "About", url: "#about" },
    { name: "Products", url: "#services" },
    { name: "Contact", url: "#contact" }
];

const menu1= document.createElement('div')
menu1.className='menu'

box1.appendChild(menu1)

const menuitem = document.createElement('ul')
//menuitem.id = "menuList"
 


 
const ul = document.createElement('ul')
menuitem.id = "menuList"

menu1.appendChild(ul);




menuItems.forEach((menuItems)=> {
    const li= document.createElement('li')
    const a = document.createElement('a')
    
   
    a.textContent=menuItems.name
    a.href =menuItems.url

     li.appendChild(a)
     
     
     ul.appendChild(li)
});




// hero section image

const hero = document.createElement('div')

hero.className='herosec'
hero.style.height='70vh'

box1.after(hero)

const heroimg= document.createElement('img')

heroimg.style.height='90vh'
heroimg.style.width='100vw'

heroimg.src='heroswitcher()'
//heroimg.src='img/Hero 2 js.jpg'



hero.appendChild(heroimg)

const heroimages =['img/HERO 1.jpg','img/hero f2.jpg']
let index = 0;

setInterval(function heroswitcher() {
    index = (index + 1) % heroimages.length;
    heroimg.src = heroimages[index];
    
},2500)

//Text bellow hero images

const weldiv= document.createElement('div')
weldiv.style.display='flex'
weldiv.style.justifyContent='center'
weldiv.style.marginTop='175px'

hero.after(weldiv)

const welcome= document.createElement('p')

welcome.textContent='Welcome to Kata Africa'
welcome.style.fontFamily="roboto"
welcome.style.fontWeight='800'
welcome.style.fontSize='32px'
welcome.style.color='green'


weldiv.appendChild(welcome)

