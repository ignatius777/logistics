 


  

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

 // Greating Display

 const timediv = document.createElement('div')
 timediv.className='timediv'

 box1.appendChild(timediv)

// greeting function
 let dtime = new Date()
 let hours = dtime.getHours();
 
 let greeting = document.createElement('p')
 greeting.style.color='white'

 
 timediv.appendChild(greeting)

     if (hours >= 5 && hours <12) {

        greeting.textContent='Good Morning ☀️'
       
        
     } else if (hours >= 12 && hours <18){
         greeting.textContent='Good Afternoon ☀️'
     } else {
        greeting.textContent='Good Evening 🌙'
     } 


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
    index = (index + 1) % heroimages.length; // the remainder % ensures the loop starts onnce the last item is reacheched creating a circular loop
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
welcome.style.marginTop='1in'
welcome.style.marginBottom='0.5in'


weldiv.appendChild(welcome)


//contact section button 


const div1 = document.createElement('div')
div1.className='contactsec'
weldiv.after(div1)

//create innerdiv and append to div1
const div2 = document.createElement('div')
div2.id='contactbtn'

div1.appendChild(div2)

//3 inner div
const div3 = document.createElement('div')
div3.className='contactbtn'

div2.appendChild(div3)

//a tag and attatch it to the 3rd div

const a = document.createElement('a')
const btnc= document.createElement('button')
btnc.innerHTML="Contact Us"
a.appendChild(btnc)


a.href='#contact'

div3.appendChild(a)

// icon region

const div4 = document.createElement('div')
div4.className='icon-region'


div1.after(div4)

/* div5 = document.createElement('div')
div5.className='shipments'
const icoimg= document.createElement('img')
icoimg.src='img/truck.png'
div5.appendChild(icoimg)
const iconname=document.createElement('P')
iconname.textContent='450 shipments annually'
div5.appendChild(iconname)
div4.appendChild(div5) */

//create the image dynamically and loop thro
const icondata = [
    { img: "img/truck.png", text: "450 shipments annually." },
    { img: "img/team.png", text: "203 team members." },
    { img: "img/customer-service.png", text: "More than 700 satisfied clients annually." },
    { img: "img/location.png", text: "Touching every inch of Africa." }
];

icondata.forEach(icondata => {
    div5 = document.createElement('div')
div5.className='shipments'

const icoimg= document.createElement('img')
icoimg.src=icondata.img
div5.appendChild(icoimg)

const iconname=document.createElement('P')
iconname.textContent=icondata.text
div5.appendChild(iconname)
div4.appendChild(div5)
    
});


// PRODUCTS AND SERVICES SECTION
const section = document.createElement('section')
section.id='services'



div4.after(section)

//section tittle

const div6=document.createElement('div')
div6.className='productstitle'

const p=document.createElement('p')
p.textContent='Products and Services'
div6.appendChild(p)

section.append(div6)

                 //Prduct section Data
 let savedData = [
    {
        "id": 1,
        "title": "Mining Services",
        "image": "img/Coal-small.jpg",
        "description": "We provide efficient mining solutions, including excavation, material transport, and site management with advanced machinery. Our team ensures compliance with safety regulations and environmental standards. From coal to minerals, we optimize extraction processes for maximum efficiency."
    },
    {
        "id": 2,
        "title": "Construction Equipment Rental",
        "image": "img/construction equipment.jpg",
        "description": "Rent well-maintained excavators, graders, rollers, and loaders for all construction and infrastructure projects. Our fleet is regularly serviced to guarantee peak performance and reliability. Whether for short-term or long-term use, we offer flexible rental plans to suit your needs."
    },
    {
        "id": 3,
        "title": "Logistics & Transport Services",
        "image": "img/tippers edited.jpg",
        "description": "Reliable trucks and transportation services for heavy equipment, raw materials, and bulk deliveries. We ensure timely and secure transport with experienced drivers and modern vehicles. Our logistics solutions are tailored to optimize supply chain efficiency and reduce costs."
    },
    {
        "id": 4,
        "title": "Crane & Forklift Rental",
        "image": "img/Forklift.jpg",
        "description": "Offering forklifts and cranes for safe and efficient lifting, loading, and material handling in industrial and construction sites. Our equipment is designed to handle various load capacities, ensuring smooth operations. We also provide trained operators to enhance productivity and safety."
    },
    {
        "id": 5,
        "title": "EV Battery Swap Stations",
        "image": "img/Ev bat.jpg",
        "description": "Convenient battery swap stations for electric bikes, ensuring uninterrupted mobility and eco-friendly transportation. Our stations are strategically located for quick and hassle-free swaps. This service supports the transition to sustainable energy and reduces downtime for EV users."
    },
    {
        "id": 6,
        "title": "Portable Power Bank Rental",
        "image": "img/powerbank small.jpg",
        "description": "Rent portable power banks to keep your devices charged on the go, ideal for events, travel, and emergency use. Our power banks come with fast-charging capabilities and multiple ports for convenience. We offer affordable rental rates and long-lasting battery capacity."
    }
    
]





//create product card
const div7= document.createElement('div')
    div7.className=('row')
    

 //Loop thru the array

 savedData.forEach((savedData) => {
    
    
    
    const div8 = document.createElement('div')
    div8.className='services-card'

    const ptitle= document.createElement('h5')
    ptitle.textContent= savedData.title

        const pimg=document.createElement('img')
        pimg.src= savedData.image

    const pdesc= document.createElement('p')
    pdesc.textContent=savedData.description.slice(0,90) +'....'


    
const pbtn=document.createElement('button')
pbtn.textContent='See more'

     pbtn.addEventListener('click', ()=>{
         
        if (pdesc.textContent===savedData.description.slice(0,90) +'....' && pbtn.textContent==='See more') 
            {
            pdesc.textContent=savedData.description.slice(0,125)
            pbtn.textContent='See less'
        } 
        else {
            pdesc.textContent=savedData.description.slice(0,90)+'....' 
            pbtn.textContent='See more'
        }

     })



div8.appendChild(ptitle)
div8.appendChild(pimg)
div8.appendChild(pdesc)
div8.appendChild(pbtn)

div7.appendChild(div8)


section.append(div7)


 });


                              // ABOUT SECTION
     
     const aboutsec = document.createElement('section') //section        
     aboutsec.id='about'
     


     const abouttitle = document.createElement('h3')
     abouttitle.textContent='About Us'
     
  


    const aboutdiv= document.createElement('div')  //inner div that will make them 2
    aboutdiv.className='innerdiv'

    const subtitle = document.createElement('h5')
    subtitle.className='subtitle'
    subtitle.textContent='Who we are.'

    aboutdiv.appendChild(subtitle)

     const inpara= document.createElement('p')
     inpara.innerHTML='We are a trusted logistics partner,delivering seamless and efficient transportation solutions. With a focus on reliability and speed, we help businesses move goods effortlessly across regions.'
     inpara.style.marginTop='15px'

    aboutdiv.appendChild(inpara)


     //aboutsec.appendChild(abouttitle)
     aboutsec.appendChild(aboutdiv) // attatch to about section
     
    
     section.after(aboutsec)


     // 2nd div

const aboutdiv2= document.createElement('div')  //inner div that will make them 2
    aboutdiv2.className='innerdiv'
    

    const subtitle2 = document.createElement('h5')
    subtitle2.className='subtitle'
    subtitle2.textContent='Our Mission.'

    aboutdiv2.appendChild(subtitle2)

     const inpara2= document.createElement('p')
     inpara2.innerHTML='To provide fast, secure, and cost-effective logistics services that keep supply chains running smoothly.'
     inpara2.style.marginTop='15px'


    aboutdiv2.appendChild(inpara2)
    
    
     
     aboutsec.appendChild(aboutdiv2) // attatch to about section
     
    
     section.after(aboutsec)

     
 

     // FOOTER REGION

     const divfooter = document.createElement('div')
     divfooter.className='footer'


     aboutsec.after(divfooter) // append after about section

     const innerfooter = document.createElement('div')
     innerfooter.className='container'

     divfooter.appendChild(innerfooter)

     const par1 =document.createElement('p')
      par1.innerHTML='Call Us 0700-000-000 <br>Head Office: Dul Dul Phase 2, Nairobi Kenya,<br> Copyright © 2012-2024 Kata Africa - All Rights Reserved'
      innerfooter.appendChild(par1)





      
