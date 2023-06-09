
//document.addEventListener("resize", (height) => height = innerHeight)

/*
let height = innerHeight;
console.log(`Initial height: ${height}`)

function windowResize() {
    height = innerHeight;
    //console.log(height)
}

window.addEventListener("resize", windowResize)

function checkPosition(height) {    
    let scroll = window.scrollY;
    let position = (scroll/height)*100;
    console.log(`Position: ${position}`)
    checkPage(position);
}

function checkPage(position) {
    console.log(`Switch position: ${position}`);
    
    if (0 <= position && position <= 25) {
        console.log("About page");
    } else if (25 < position && position <= 50) {
        console.log("Skills page");
    } else if (50 < position && position <= 75) {
        console.log("Projects")
    } else if (75 < position && position <= 100) {
        console.log("Contact");
    }
}

const area = document.querySelector("body");

document.addEventListener("scroll", () => checkPosition(height));
*/

windowResize();

function windowResize() {
    height = innerHeight;
    //console.log(height)
}

function isInViewport(element, height) {
    let bounding = element.getBoundingClientRect();
    let location = bounding.top/height;
    console.log(`Percentage: ${location}`)

    if (location > 0.4) {
        page = document.querySelector("#page2");
        console.log("About");
        pageName = 'About'
    } else if (location < 0.4 && location > -0.6) {
        page = document.querySelector("#page2");
        console.log("Skills");
        pageName = 'Skills'
    } else if (location < -0.6) {
        element = document.querySelector("#page3");
        //console.log("QSELECT PAGE 3")
        bounding = element.getBoundingClientRect();
        location = bounding.top/height;

        if (location < 0.4 && location > -0.6) {
            console.log("Projects")
        pageName = "Projects";
        } else {
            console.log("Contact")
        pageName = "Contact";
        }

    }

    document.getElementById("header-selector").innerHTML = pageName
}



let page = document.querySelector("#page2");

window.addEventListener("resize", windowResize);

document.addEventListener("scroll", () => isInViewport(page, height));