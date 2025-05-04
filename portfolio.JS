icon1.onclick = function () {
    document.body.classList.toggle("dark-theme");
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


//for qualification section
var tabs = document.getElementsByClassName("Qualification-section-p");
var timelines = document.getElementsByClassName("timeline");

function opentab2(index) {
    
    for (var i = 0; i < timelines.length; i++) {
        timelines[i].style.display = "none";
        tabs[i].classList.remove("active-link"); 
    }

 timelines[index].style.display = "block";
    tabs[index].classList.add("active-link");
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        opentab2(i);
    });
}

window.onload = function() {
    opentab2(0); 
};




/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
  
   
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


  //word less and more
const cards = document.querySelectorAll(".card__article");

window.onload = function () {
    cards.forEach((card__article) => {
        let seeMoreBtn = card__article.querySelector(".see-more-btn");
        let textContent = card__article.querySelector(".card_content .text");
        if (textContent.scrollHeight == textContent.clientHeight) {
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }
else{
  card__article.classList.add("gradient");
}
    });
}

cards.forEach((card__article) => {
    let seeMoreBtn = card__article.querySelector(".see-more-btn");
    let textContent = card__article.querySelector(".card_content .text");
    seeMoreBtn.addEventListener("click", () => {
      card__article.classList.toggle("active");
      card__article.classList.toggle("gradient");

        if (card__article.classList.contains("active")) {
            seeMoreBtn.innerHTML = "See less";
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else {
            seeMoreBtn.innerHTML = "See More";
            textContent.style.height = "50px";
        }
    });
});





//for project name
function opentab(sectionname) {
    var f;
    var x = document.getElementsByClassName("city");
    for (f = 0; f < x.length; f++) {
      x[f].style.display = "none";  
    }
    document.getElementById(sectionname).style.display = "block";  
  
    var tabs90 = document.getElementsByClassName("project-section-p");
    for (var p = 0; p < tabs90.length; p++) {
        tabs90[p].classList.remove("active-link1");
    }

    var selectedTab = document.querySelector(".project-section-p[onclick=\"opentab('" + sectionname + "')\"]");
    if (selectedTab) {
        selectedTab.classList.add("active-link1");
    }
}
  


  

//for skill name
function opentab1(sectionname1) {
    var j;
    var y = document.getElementsByClassName("skill-name");
    for (j = 0; j < y.length; j++) {
      y[j].style.display = "none";  
    }
    document.getElementById(sectionname1).style.display = "block";  
    var tabs99 = document.getElementsByClassName("skill-section-p");
    for (var r = 0; r < tabs99.length; r++) {
        tabs99[r].classList.remove("active-link2");
    }

    // Add 'active-link2' class to the selected tab
    var selectedTab1 = document.querySelector(".skill-section-p[onclick=\"opentab1('" + sectionname1 + "')\"]");
    if (selectedTab1) {
        selectedTab1.classList.add("active-link2");
    }
}


