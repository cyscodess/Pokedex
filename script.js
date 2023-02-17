const bgm = document.getElementById("bgm")

window.onload = () => {
    bgm.play()
    bgm.volume = 0.05
    bgm.muted = false
}

document.getElementById("sound-btn").addEventListener("click", toggleBgm)
document.getElementById("get-pkmn-btn").addEventListener("click", renderPokemon)

function toggleBgm() {
    clickSound()
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

async function renderPokemon() {
    pcSound()
    const enteredValue = document.getElementById("text-val").value
    const pokemon = await getEnteredPkmn(enteredValue)
    displayName(pokemon.name)
    displayType(pokemon.types[0].type.name)
    document.getElementById("text-val").value = ""
}

async function getEnteredPkmn(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return json
}

function displayName(pokemon) {
    const displayField = document.getElementById("display-name")
    displayField.textContent = pokemon
}

function displayType(pokemon) {
    const typeField = document.getElementById("stat-type")
    typeField.textContent = pokemon.toUpperCase()
}

function clickSound() {
    const pressAB = document.getElementById("press-ab")
    pressAB.play()
    pressAB.volume = 0.05
}

function pcSound() {
    const pc = document.getElementById("pc")
    pc.play()
    pc.volume = 0.05
}