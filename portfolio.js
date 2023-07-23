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

let page = document.querySelector("#page1");
current = "#page0";

function isInViewport(element, height, array) {
    //console.log(element);

    let bounding = element.getBoundingClientRect();
    //console.log(`"${current}"`)
    const inViewport = document.querySelector(`${current}`);
    //console.log(inViewport);
    let location = bounding.top/inViewport.offsetHeight;

    console.log(location);
    //console.log(`Percentage: ${location}`)

    /*

    if (location > 0.4) {
        page = document.querySelector("#page1");
        current = "#page0";
    } else if (location < 0.4 && location > -0.6) {
        page = document.querySelector("#page1");
        current = "#page1"; 
    } else if (location < -0.6) {
        document.querySelector("#page2");
        //console.log("QSELECT PAGE 3")
        bounding = element.getBoundingClientRect();
        location = bounding.top/height;

        if (location < 0.4 && location > -0.6) {
        //pageNumber = 2;
        current = "#page2";
        } else {
        //pageNumber = 3;
        current = "#page3";
        }

    }

    */
    //console.log(pages[pageNumber]);

    document.getElementById("header-selector").innerHTML = document.querySelector(`a[href="${current}"]`).innerHTML;
    moveSelector(current);
}



function headerWidth () {
   const contentWidth = document.getElementById("header-content").offsetWidth;
   console.log(contentWidth);
   const linksWidth = document.querySelector("#header-content .links").offsetWidth;
   console.log(linksWidth);
   emptyWidth = contentWidth-linksWidth-100;
}

function moveSelector (page) {
    console.log(`a[href="${page}"]`)
    const link = document.querySelector(`a[href="${page}"]`);
    console.log(link)
    //console.log(link.offsetParent);
    console.log(link.offsetLeft)
    slider.setAttribute('style', `transform: translateX(${link.offsetLeft-50-(slider.offsetWidth/2)+(link.offsetWidth/2)}px);`)
    //console.log(link);
   // console.log(moveTotal);
}



const headerContent = document.getElementById("header-content");

window.addEventListener("resize", windowResize);
//window.addEventListener("resize", () => moveSelector(10, 1));

document.addEventListener("scroll", () => isInViewport(page, height, pages));

document.querySelectorAll('.header ul a').forEach(element => {
    //console.log(element[this]);
    element.addEventListener('click', (e) => moveSelector(e.target.getAttribute('href')))
    
})

//moveSelector(e.target.)