let spiner = document.getElementById('spin-lucky-well')
let btn = document.getElementById("spineBtn")
let footer = document.getElementById("footer")

let inbox = document.getElementById("inbox")
let gift_shop = document.getElementById("gift_shop")
let mission = document.getElementById("mission")
let history = document.getElementById("history")
let guide = document.getElementById("guide")
let imgSpin = document.getElementById("img_spin")
let img1 = "url(../images/mission_f.png)"
let img2 = "url(../images/inbox_footer.png)"
let img3 = "url(../images/giftshop_f.png)"
let img4 = "url(../images/history_f.png)"
let img5 = "url(../images/guide_f.png)"
const cards = document.querySelectorAll('.animation1');
const cards1 = document.querySelectorAll('.animation2');

let isSpin = false
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
            imgSpin.src = "../images/spine.png"
            isSpin = false
            clearTimeout(timeOut)
        }, 3000)
        if (isSpin) {
            imgSpin.src = "../images/spine_stop.png"
            spiner.style.transform = "translate(-50%, -50%) rotate(" + number * 5 + "deg)";
            spiner.style.transition = "3.5s"
        }
        else {
            imgSpin.src = "../images/spine.png"
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


let delay = 0; // thời gian độ trễ giữa mỗi thẻ (1000ms = 1s)
let index = 0;
let animationDuration = 500; // thời gian animation (3000ms = 3s)

function animateCard() {
    cards[index].classList.add('shine');
    cards1[index].classList.add('shine');
    setTimeout(() => {
        cards[index].classList.remove('shine');
        cards1[index].classList.remove('shine');
        index++;
        if (index === cards.length) {
            index = 0;
        }
        setTimeout(() => {
            animateCard();
        }, delay);
    }, animationDuration);
}

animateCard();
