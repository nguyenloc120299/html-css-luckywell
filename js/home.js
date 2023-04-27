let spiner = document.getElementById('spin-lucky-well')
let btn = document.getElementById("spineBtn")
let btn_soud_on = document.getElementById("btn_soud_on")
let btn_soud_off = document.getElementById("btn_soud_off")
let us_lang = document.getElementById("us_lang")
let myanmar = document.getElementById("myanmar_lang")
let footer = document.getElementById("footer")
let btn_sound = document.getElementById("btn-sound")
let inbox = document.getElementById("inbox")
let gift_shop = document.getElementById("gift_shop")
let mission = document.getElementById("mission")
let history = document.getElementById("history")
let guide = document.getElementById("guide")
let imgSpin = document.getElementById("img_spin")
let img1 = "url(../images/mission_f.png)"
let img2 = "url( ./images/inbox_footer.png)"
let img3 = "url(../images/giftshop_f.png)"
let img4 = "url(../images/history_f.png)"
let img5 = "url(../images/guide_f.png)"
const cards = document.querySelectorAll('.animation1');
const cards1 = document.querySelectorAll('.animation2');

let isSpin = false
let isSound = true
let lang = "en"
document.addEventListener('touchstart', function (e) {
    var content = e.target;
    if (content.scrollTop + content.clientHeight > content.scrollHeight) {
        e.preventDefault();
    }
}, { passive: false });


let timeOut
if (btn)
    btn.onclick = function () {

        isSpin = !isSpin
        clearTimeout(timeOut)
        let number = Math.ceil(Math.random() * 1000);
        timeOut = setTimeout(() => {
            imgSpin.src = "./images/spine.png"
            isSpin = false
            clearTimeout(timeOut)
        }, 3000)
        if (isSpin) {
            imgSpin.src = "./images/spine_stop.png"
            spiner.style.transform = "translate(-50%, -50%) rotate(" + number * 5 + "deg)";
            spiner.style.transition = "3.5s"
        }
        else {
            imgSpin.src = "./images/spine.png"
            spiner.style.transform = "translate(-50%, -50%) rotate(" + number + "deg)";
            spiner.style.transition = "unset"

        }
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
btn_soud_on.onclick = function () {
    toggleSound(true)
}
btn_soud_off.onclick = function () {
    toggleSound(false)
}
us_lang.onclick = function () {
    toggleLang("en")
}
myanmar.onclick = function () {
    toggleLang("myanmar")
}
const toggleSound = (isSound) => {
    if (isSound) {
        // turn off sound
        btn_soud_on.classList.add("active-sound")
        btn_soud_off.classList.remove("active-sound")
        // code to turn off sound here
    } else {
        // turn on sound
        btn_soud_off.classList.add("active-sound")
        btn_soud_on.classList.remove("active-sound")

    }
}
const toggleLang = (lang) => {
    if (lang == "en") {
        us_lang.style.opacity = "1"
        myanmar.style.opacity = ".2"
    }
    if (lang == "myanmar") {
        myanmar.style.opacity = "1"
        us_lang.style.opacity = ".2"
    }
}
toggleSound(true)
toggleLang("en")

