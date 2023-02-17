const bgm = document.getElementById("bgm")
const imageField = document.getElementById("pkmn-sprite")

window.onload = () => {
    bgm.volume = 0.05
    bgm.muted = false
    bgm.play()
}

document.getElementById("sound-btn").addEventListener("click", toggleBgm)
document.getElementById("get-pkmn-btn").addEventListener("click", renderPokemon)
document.getElementById("show-artwork-btn").addEventListener("click", renderArtwork)
document.getElementById("show-sprite-btn").addEventListener("click", renderSprite)

document.getElementById("text-val").addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        document.getElementById("get-pkmn-btn").click()
    }
})

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
    const pokemon = await getEnteredPkmn(enteredValue.toLowerCase())
    document.getElementById("text-val").value = ""
    displayName(pokemon.name)
    displayType(pokemon.types[0].type.name)
    displayImage(pokemon.sprites.front_default)
    displayHp(pokemon.stats[0].base_stat)
    displayDef(pokemon.stats[2].base_stat)
    displayAtk(pokemon.stats[1].base_stat)
    displaySpAtk(pokemon.stats[3].base_stat)
    displayHeight(pokemon.height)
    displayWeight(pokemon.weight)
    changeTypeBg(pokemon.types[0].type.name)
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

function displayImage(pokemon) {
    imageField.src = pokemon
}

function displayHp(pokemon) {
    const hpField = document.getElementById("stat-hp")
    hpField.textContent = `HP: ${pokemon}`
}

function displayDef(pokemon) {
    const defField = document.getElementById("stat-def")
    defField.textContent = `DEF: ${pokemon}`
}

function displayAtk(pokemon) {
    const atkField = document.getElementById("stat-atk")
    atkField.textContent = `ATK: ${pokemon}`
}

function displaySpAtk(pokemon) {
    const spAtkField = document.getElementById("stat-sp-atk")
    spAtkField.textContent = `SP: ${pokemon}`
}

function displayHeight(pokemon) {
    const htField = document.getElementById("stat-ht")
    htField.textContent = `HT: ${pokemon}`
}

function displayWeight(pokemon) {
    const wtField = document.getElementById("stat-wt")
    wtField.textContent = `WT: ${pokemon}`
}

async function renderArtwork() {
    imgSound()
    const enteredValue = document.getElementById("display-name").textContent.toLowerCase()
    const pokemon = await getEnteredPkmn(enteredValue)
    imageField.src = pokemon.sprites.other["official-artwork"].front_default
    imageField.style.width = "70%"
}

async function renderSprite() {
    imgSound()
    const enteredValue = document.getElementById("display-name").textContent.toLowerCase()
    const pokemon = await getEnteredPkmn(enteredValue)
    imageField.src = pokemon.sprites.front_default
    imageField.style.width = "100%"
}

function changeTypeBg(type) {
    const typeBg = document.getElementById("stat-type")
    if (type === "normal") typeBg.style.backgroundColor = "#b9bbad"
    if (type === "fire") typeBg.style.backgroundColor = "#fa5542"
    if (type === "water") typeBg.style.backgroundColor = "#58adff"
    if (type === "grass") typeBg.style.backgroundColor = "#8dd653"
    if (type === "poison") typeBg.style.backgroundColor = "#a95da1"
    if (type === "electric") typeBg.style.backgroundColor = "#f8e63a"
    if (type === "ice") typeBg.style.backgroundColor = "#98f1ff"
    if (type === "fairy") typeBg.style.backgroundColor = "#feb1ff"
    if (type === "bug") typeBg.style.backgroundColor = "#c3d122"
    if (type === "dark") typeBg.style.backgroundColor = "#916759"
    if (type === "dragon") typeBg.style.backgroundColor = "#8874f9"
    if (type === "fighting") typeBg.style.backgroundColor = "#a65844"
    if (type === "flying") typeBg.style.backgroundColor = "#7ba4fe"
    if (type === "ghost") typeBg.style.backgroundColor = "#7a74d4"
    if (type === "ground") typeBg.style.backgroundColor = "#eace50"
    if (type === "psychic") typeBg.style.backgroundColor = "#fe6ab8"
    if (type === "rock") typeBg.style.backgroundColor = "#cdba75"
    if (type === "steel") typeBg.style.backgroundColor = "#c3c4d9"
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

function imgSound() {
    const save = document.getElementById("save-sfx")
    save.play()
    save.volume = 0.05
}