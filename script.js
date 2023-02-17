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
    const pokemon = await getEnteredPkmn(enteredValue.toLowerCase())
    displayName(pokemon.name)
    displayType(pokemon.types[0].type.name)
    displayImage(pokemon.sprites.front_default)
    displayHp(pokemon.stats[0].base_stat)
    displayDef(pokemon.stats[2].base_stat)
    displayAtk(pokemon.stats[1].base_stat)
    displaySpAtk(pokemon.stats[3].base_stat)
    displayHeight(pokemon.height)
    displayWeight(pokemon.weight)
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

function displayImage(pokemon) {
    const imageField = document.getElementById("pkmn-sprite")
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