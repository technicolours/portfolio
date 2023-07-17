

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

const headerButtons = [l0, l1, l2, l3];



/*



*/