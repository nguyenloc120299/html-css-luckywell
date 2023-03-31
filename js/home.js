let spiner = document.getElementById('spin-lucky-well')
let btn = document.getElementById("spineBtn")
let footer = document.getElementById("footer")
let number = Math.ceil(Math.random() * 1000);
let inbox = document.getElementById("inbox")
let gift_shop = document.getElementById("gift_shop")
let mission = document.getElementById("mission")
let history = document.getElementById("history")
let guide = document.getElementById("guide")
btn.onclick = function () {
    spiner.style.transform = "translate(-50%, -50%) rotate(" + number * 5 + "deg)";
    number = Math.ceil(Math.random() * 1000);
}
footer.style.background = "url(../images/bg_footer.png)"

mission.onclick = function () {
    return footer.style.background = "url(../images/mission_f.png)"
}
inbox.onclick = function () {
    return footer.style.background = "url(../images/inbox_footer.png)"
}
gift_shop.onclick = function () {
    return footer.style.background = "url(../images/giftshop_f.png)"
}

history.onclick = function () {
    return footer.style.background = "url(../images/history_f.png)"
}
guide.onclick = function () {
    return footer.style.background = "url(../images/guide_f.png)"
}