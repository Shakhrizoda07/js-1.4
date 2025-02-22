let count = 0;
function increment() {
    count++;
    document.getElementById("count").textContent = count;
}
function decrement() {
    count--;
    document.getElementById("count").textContent = count;
}
function changeColor() {
let color = document.getElementById("color.Sh").value;
    document.getElementById("Box").style.backgroundColor = color;
}
