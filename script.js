const bgm = document.getElementById("bgm")

window.onload = () => {
    bgm.play()
    bgm.volume = 0.05
    bgm.muted = false
}

document.getElementById("sound-btn").addEventListener("click", toggleBgm)
document.getElementById("get-pkmn-btn").addEventListener("click", getEnteredPkmn)

function toggleBgm() {
    bgm.muted = !bgm.muted
    toggleBgmIcon()
}

function toggleBgmIcon() {
    const bgmIcon = document.querySelector("i")
    if (bgm.muted) {
        bgmIcon.classList.remove("fa-volume-high")
        bgmIcon.classList.add("fa-volume-xmark")
    } else {
        bgmIcon.classList.add("fa-volume-high")
        bgmIcon.classList.remove("fa-volume-xmark")
    }
}

function getEnteredPkmn() {
    return document.getElementById("text-val").value
}
