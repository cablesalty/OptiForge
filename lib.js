

// Get all panels
var panelElements = document.getElementsByTagName("panel");
console.log("Panels: " + panelElements.length);

for (var i = 0; i < panelElements.length; i++) {
    // get all contents inside panels
    var contentElements = panelElements[i].getElementsByTagName("content");

    for (var i = 0; i < contentElements.length - 1; i++) {
        console.log("Adding seperators to: " + contentElements[i]);
        contentElements[i].outerHTML += "<br><hr><br>";
    }
}
