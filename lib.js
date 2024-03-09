const debug = false;

// Get all panels
let panelElements = document.getElementsByTagName("panel");
console.log("Panels: " + panelElements.length);

for (let i = 0; i < panelElements.length; i++) {
    // get all contents inside panels
    let contentElements = panelElements[i].getElementsByTagName("content");
    console.log("Contents in panel " + panelElements[i] + ": " + panelElements.length)

    for (let i = 0; i < contentElements.length - 1; i++) {
        console.log("Adding seperators to: " + contentElements[i]);
        contentElements[i].outerHTML += "<br><hr><br>";
    }
}

// Get navbar
let menubarElements = document.getElementsByTagName("menubar");
console.log("Menubars: " + menubarElements.length);


for (let i = 0; i < menubarElements.length; i++) {
    let menubarElement = menubarElements[i];
    console.log(menubarElement);

    let menubarPlacement = menubarElement.getAttribute("placement");
    console.log(menubarPlacement);
    console.log(menubarElement.scrollHeight);
    if (menubarPlacement == "top") {
        document.querySelector("body").style.marginTop += menubarElement.scrollHeight;
    } else if (menubarPlacement == "bottom") {
        document.querySelector("body").style.marginBottom = menubarElement.scrollHeight;
    } else {
        console.error("DynamoJS: Invalid placement of a menubar!")
    }
}

if (debug) {
    // Enable debug: Draw red borders around everything.
    let allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.border = "1px solid red";
    }
}