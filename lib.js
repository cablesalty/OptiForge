

// Get all content elements inside panels
var panelElements = document.getElementsByTagName("content");
console.log(panelElements.length);

for (var i = 0; i < panelElements.length - 1; i++) {
    console.log("Adding division between element: " + panelElements[i]);
    panelElements[i].outerHTML += "<br><hr><br>";
}
