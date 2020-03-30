import './styles/scss/main.scss'
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

const toggleClass = (el, className) => el.classList.toggle(className);
const nav = document.querySelector('header');
const brandsSlider = document.querySelector('.brands-slider');
const brandsSlider2 = document.querySelector('.brands-slider-t');


function fixedheader() {
  10 < window.scrollY ? nav.classList.add("fixed-nav") : nav.classList.remove("fixed-nav");
}




document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.navbar_toggle').addEventListener('click', () => {
    toggleClass(document.querySelector('div.nav'), 'open');
    toggleClass(document.querySelector('a.navbar_toggle'), 'navbar_toggle_toggle');
    toggleClass(document.body, 'scrolllock');
  });


  window.addEventListener('scroll', fixedheader);
  if (brandsSlider) {
    var slider = tns({
        container: '.brands-slider',
        "loop": false,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "nav":false,
        "controlsText":["<img src='assets/images/chevron-left.svg'>", "<img src='assets/images/chevron-right.svg'>"],
        "responsive": {
          "640": {
            "items": 1
          },
          "768": {
            "items": 3
          },
          "1280": {
            "items": 5
          }
        }
      });
  }
  if (brandsSlider2) {
    var slider = tns({
      container: '.brands-slider-t',
      "loop": false,
      "slideBy": "page",
      "mouseDrag": true,
      "swipeAngle": false,
      "nav":false,
      "controlsText":["<img src='assets/images/chevron-left.svg'>", "<img src='assets/images/chevron-right.svg'>"],
      "responsive": {
        "640": {
          "items": 1
        },
        "768": {
          "items": 3
        },
        "1280": {
          "items": 5
        }
      }
    });
  }
  

});
