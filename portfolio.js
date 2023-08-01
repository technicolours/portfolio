const slider = document.querySelector("#header-selector");
console.log(slider);

windowResize();
headerWidth();
moveSelector("#page0");
const pages = document.querySelectorAll('.header ul a');

function windowResize() {
    height = innerHeight;
    console.log(height)
}

let page = document.querySelector("#page0");
current = "#page0";
let boundingArray = [];

let elemList = document.querySelectorAll('#main>div');
console.log(elemList[0].id);
let elemArray = Array.from(elemList);
// for (i = 0; i < elemArray.length; i++) {
//     boundingArray[i] = elemArray[i].getBoundingClientRect();
// }

/*
function isInViewport(el) {
const rect = el.getBoundingClientRect();
// console.log(el.id + "bottom: " + bounding.bottom)
// console.log(el.id + "top: " + Math.abs(bounding.top))
//console.log("inner height" + window.innerHeight)

return (
    rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);

}

*/

function isInViewport(el, percentVisible) {
        let
          rect = el.getBoundingClientRect(),
          windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      
        return !(
          Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
          Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
}

function locate(element, height, array) {

    let inViewport = []

    for (elem of elemList) {
        if (isInViewport(elem, 60)) {
            /*
            inViewport.push(elem);
            if (inViewport.length > 1) {
                console.log('MORE THAN 1')
                for (div of inViewport) {
                    //console.log(inViewport[div]);
                }
                
            }
            */

            moveSelector(`#${elem.id}`)
            console.log(elem.id);
        }
    }
    
}

function headerWidth () {
   const contentWidth = document.getElementById("header-content").offsetWidth;
   console.log(contentWidth);
   const linksWidth = document.querySelector("#header-content .links").offsetWidth;
   console.log(linksWidth);
   emptyWidth = contentWidth-linksWidth-100;
}

function moveSelector (page) {
    console.log(`a[href="${page}"]`);
    const link = document.querySelector(`a[href="${page}"]`);
    //console.log(link.offsetLeft)    
   document.getElementById("header-selector").innerHTML = document.querySelector(`a[href="${page}"]`).innerHTML;
   let translate = link.offsetLeft-50-(slider.offsetWidth/2)+(link.offsetWidth/2);
   slider.setAttribute('style', `transform: translateX(${translate}px);`)
}



const headerContent = document.getElementById("header-content");

window.addEventListener("resize", windowResize);

//window.addEventListener("resize", () => moveSelector(10, 1));

document.addEventListener('a .within', () => moveSelector('#page1'));

document.addEventListener("scrollend", () => locate(page, height, pages));



document.querySelectorAll('.header ul a').forEach(element => {
    element.addEventListener('click', (e) => moveSelector(e.target.getAttribute('href')))
    
});

