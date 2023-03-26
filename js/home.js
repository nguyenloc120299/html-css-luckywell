let spiner = document.getElementById('spin-lucky-well')
let btn = document.getElementById("spineBtn")
let number = Math.ceil(Math.random() * 1000);
btn.onclick = function () {
    spiner.style.transform = "translate(-50%, -50%) rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}