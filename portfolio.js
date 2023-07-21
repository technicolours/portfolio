let moveInput = 100;
let emptyWidth = 0;
//pageNumber = 0;

windowResize();
headerWidth(0);
moveSelector(moveInput);

const pages = [];
pages[0] = ['EMPTY PAGE','About', 'Skills', 'Projects', 'Contact'];
pages[1] = [50, 100, 150, 200];
console.log(pages)

function windowResize() {
    height = innerHeight;
    console.log(height)
}

function isInViewport(element, height, array) {
    let bounding = element.getBoundingClientRect();
    let location = bounding.top/height;
    //console.log(`Percentage: ${location}`)




    if (location > 0.4) {
        page = document.querySelector("#page2");
        pageNumber = 1;
    } else if (location < 0.4 && location > -0.6) {
        page = document.querySelector("#page2");
        pageNumber = 2;
    } else if (location < -0.6) {
        element = document.querySelector("#page3");
        //console.log("QSELECT PAGE 3")
        bounding = element.getBoundingClientRect();
        location = bounding.top/height;

        if (location < 0.4 && location > -0.6) {
        pageNumber = 3;
        } else {
        pageNumber = 4;
        }

    }
    console.log(pages[0][pageNumber])

    document.getElementById("header-selector").innerHTML = pages[0][pageNumber];
    moveSelector(pages[1][pageNumber], pageNumber);
}



function headerWidth () {
   const contentWidth = document.getElementById("header-content").offsetWidth;
   console.log(contentWidth);
   const linksWidth = document.querySelector("#header-content .links").offsetWidth;
   console.log(linksWidth);
   emptyWidth = contentWidth-linksWidth-100;
}

function moveSelector (moveInput, page) {
    let moveTotal = emptyWidth + moveInput;
    const link = document.querySelector(`a[href="#page${page}"]`);
    
    //console.log(link);
    console.log(moveTotal);
}

let page = document.querySelector("#page2");
const headerContent = document.getElementById("header-content");

window.addEventListener("resize", windowResize);
window.addEventListener("resize", () => moveSelector(headerWidth(), pageNumber));

document.addEventListener("scroll", () => isInViewport(page, height, pages));