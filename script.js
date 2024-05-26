//your JS code here. If required.
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('level');
    var domLevel = calculateDomLevel(targetElement);
    alert("The level of the element is: " + domLevel);
});

function calculateDomLevel(element) {
    var level = 1; // Starting level including the root HTML element
    var parent = element.parentNode;

    while (parent && parent !== document) {
        level++;
        parent = parent.parentNode;
    }

    return level;
}
