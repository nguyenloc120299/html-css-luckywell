let spiner = document.getElementById('spin-lucky-well')
let btn = document.getElementById("spineBtn")
let footer = document.getElementById("footer")
let number = Math.ceil(Math.random() * 1000);
let inbox = document.getElementById("inbox")
let gift_shop = document.getElementById("gift_shop")
let mission = document.getElementById("mission")
let history = document.getElementById("history")
let guide = document.getElementById("guide")
let img1 = "url(../images/mission_f.png)"
let img2 = "url(../images/inbox_footer.png)"
let img3 = "url(../images/giftshop_f.png)"
let img4 = "url(../images/history_f.png)"
let img5 = "url(../images/guide_f.png)"

// document.addEventListener('touchmove', function (e) {
//     e.preventDefault();
// }, { passive: false });
var myElement = document.getElementsByClassName('main');

document.addEventListener('touchmove', function (e) {
    var element = e.target;
    if (element.scrollHeight === element.clientHeight) {
        e.preventDefault();
    } else if (element.scrollTop === 0) {
        element.scrollTop = 1;
        e.preventDefault();
    } else if (element.scrollTop + element.clientHeight === element.scrollHeight) {
        element.scrollTop = element.scrollHeight - element.clientHeight - 1;
        e.preventDefault();
    }
}, { passive: false });

if (btn)
    btn.onclick = function () {
        spiner.style.transform = "translate(-50%, -50%) rotate(" + number * 5 + "deg)";
        spiner.style.transition = "3.5s"
        number = Math.ceil(Math.random() * 1000);
    }
// footer.style.background = "url(../images/bg_footer.png)"

mission.onclick = function () {
    return footer.style.background = img1

}
inbox.onclick = function () {
    return footer.style.background = img2
}
gift_shop.onclick = function () {
    return footer.style.background = img3
}

history.onclick = function () {
    return footer.style.background = img4
}
guide.onclick = function () {
    return footer.style.background = img5

}
