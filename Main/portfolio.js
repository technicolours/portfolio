
//document.addEventListener("resize", (height) => height = innerHeight)

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