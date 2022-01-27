const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
        //toggle nav
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
        

        navLinks.forEach((item,index) =>{
            if(item.style.animation){
                item.style.animation = ""
            }else{
               item.style.animation = ` navLinkFade 0.5s ease forwards ${ index / 7 +0.5}s `;
            }
    });


       // Burger animation
        burger.classList.toggle("toogle");

    });

    //animate links
}

const coffeeItems = [
    {
        id:1,
        name:"Latte Macchiato",
        descriere : "Coffe Boiled Water",
        img: "./img/latte.webp"
    },
    {
        id:2,
        name:"Caramel Macchiato",
        descriere : "Coffe Boiled Water",
        img: "./img/caramel.png"
    },
    {
        id:3,
        name:"Espresso Risteto",
        descriere : "Coffe Boiled Water",
        img: "./img/espressso.png"
    },
    {
        id:4,
        name:"Espresso ",
        descriere : "Coffe Boiled Water",
        img: "./img/cafeluta3.png"
    },
];

const img = document.getElementById("imgItem");
const name = document.getElementById("coffeName");
const descriere = document.getElementById("description")

const prevBtn = document.querySelector(".leftButton");
const nextBtn = document.querySelector(".rightButton");
const randomBtn = document.querySelector(".randomBtn");
let currentItem = 0;

const coffeeSlide = () =>{

const showCoffe = (coffe) =>{
    const item = coffeeItems[coffe];
    img.src = item.img;
    name.textContent = item.name;
    descriere.textContent = item.descriere;
}

nextBtn.addEventListener("click", () =>{
    currentItem++;
    if(currentItem > coffeeItems.length -1){
        currentItem = 0;
    }

    showCoffe(currentItem);
});

prevBtn.addEventListener("click", ()=> {
    currentItem--;
    if (currentItem < 0) {
      currentItem = coffeeItems.length - 1;
    }
    showCoffe(currentItem);
  });

randomBtn.addEventListener("click", ()=>{
    currentItem = Math.floor(Math.random()* coffeeItems.length);
    showCoffe(currentItem);
})

}


 navSlide();
 coffeeSlide();
