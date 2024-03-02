console.log("Hello World!");

var goldenrodButton = document.getElementById("goldenrodButton");

console.log(goldenrodButton);

goldenrodButton.addEventListener('click', callAlert);
goldenrodButton.addEventListener('mouseout', orange);

function callAlert() {
    //alert("You called?");
    goldenrodButton.innerHTML = "I got clicked!";
}

function orange() {
    //alert("You called?");
    goldenrodButton.innerHTML = "Mouse Out";
}