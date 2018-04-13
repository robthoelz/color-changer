//document.write("running");
var modal = document.getElementById("modal");
var changeBtn = document.getElementById("change");
var preview = document.getElementById("preview");
function Preview() {
    color = doucument.querySelector('input[name="colors"]:checked').value;
    console.log("The color is " + color);
    preview.style.background = color;
}
function changeColor() {
    console.log("The color is: " + color);
    document.body.style.background = color;
}
function Close() {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}
function ChangeButtonClick() {
    console.log("snathoeu")
    modal.style.visibility = "visible";
    modal.stlye.opacity = "1";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.visibiity = "hidden";
        modal.style.opacity = "0";
        preview.stlye.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
};