// carousel.js:-
let scrollContent = document.querySelector('.contents');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContent.addEventListener("wheel", (evt) => {
   evt.preventDefault();
   scrollContent.scrollLeft += evt.deltaY;
   scrollContent.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", () => {
   scrollContent.style.scrollBehaviour = "smooth";
   scrollContent.scrollLeft += 900;
})
backBtn.addEventListener("click", () => {
   scrollContent.style.scrollBehaviour = "smooth";
   scrollContent.scrollLeft -= 900;
})

//  tabs.js:-
let tabButtons = document.querySelectorAll('.tabsContainer .buttons button');
let tabPanels = document.querySelectorAll('.tabPanel');

function showPanel(panelIndex, colorCode) {
   tabButtons.forEach(function (node) {
      node.style.backgroundColor = "#343057";
      node.style.color = "lightGray";
      node.style.textDecoration = "none";
   });
   tabButtons[panelIndex].style.backgroundColor = colorCode;
   tabButtons[panelIndex].style.color = "#343057";
   tabButtons[panelIndex].style.textDecoration = "underline";

   tabPanels.forEach(function (node) {
      node.style.display = "none";
   });
   tabPanels[panelIndex].style.display = "block";
   tabPanels[panelIndex].style.backgroundColor = colorCode;
};

showPanel(0, 'lightGray');

// accordion.js
const accordionItems = document.querySelectorAll(" .accordion-item");

if (window.matchMedia = (('max-width: 425px'))) {

    accordionItems.forEach(item => {
        let title = item.querySelector(".accordion-title");
        let content = item.querySelector(".accordion-content");

        title.addEventListener('click', () => {
            for (let i = 0; i < accordionItems.length; i++) {
                if (accordionItems[i] != item) {
                    accordionItems[i].classList.remove('active');
                }
                else {
                    item.classList.toggle('active');
                }
            }
        });
    });
}