'use strict'

/* CONSTANTS */

const KANAS = [
    [['a', 'あ', 'ア'], ['i', 'い', 'イ'], ['u', 'う', 'ウ'], ['e', 'え', 'エ'], ['o', 'お', 'オ']],
    [['ka', 'か', 'カ'], ['ki', 'き', 'キ'], ['ku', 'く', 'ク'], ['ke', 'け', 'ケ'], ['ko', 'こ', 'コ']],
    [['sa', 'さ', 'サ'], ['shi', 'し', 'シ'], ['su', 'す', 'ス'], ['se', 'せ', 'セ'], ['so', 'そ', 'ソ']],
    [['ta', 'た', 'タ'], ['chi', 'ち', 'チ'], ['tsu', 'つ', 'ツ'], ['te', 'て', 'テ'], ['to', 'と', 'ト']],
    [['na', 'な', 'ナ'], ['ni', 'に', 'ニ'], ['nu', 'ぬ', 'ヌ'], ['ne', 'ね', 'ネ'], ['no', 'の', 'ノ']],
    [['ha', 'は', 'ハ'], ['hi', 'ひ', 'ヒ'], ['fu', 'ふ', 'フ'], ['he', 'へ', 'ヘ'], ['ho', 'ほ', 'ホ']],
    [['ma', 'ま', 'マ'], ['mi', 'み', 'ミ'], ['mu', 'む', 'ム'], ['me', 'め', 'メ'], ['mo', 'も', 'モ']],
    [['ya', 'や', 'ヤ'], ['yu', 'ゆ', 'ユ'], ['yo', 'よ', 'ヨ']],
    [['ra', 'ら', 'ラ'], ['ri', 'り', 'リ'], ['ru', 'る', 'ル'], ['re', 'れ', 'レ'], ['ro', 'ろ', 'ロ']],
    [['wa', 'わ', 'ワ'], ['wo', 'を', 'ヲ'], ['n', 'ん', 'ン']],
    [['ga', 'が', 'ガ'], ['gi', 'ぎ', 'ギ'], ['gu', 'ぐ', 'グ'], ['ge', 'げ', 'ゲ'], ['go', 'ご', 'ゴ']],
    [['za', 'ざ', 'ザ'], ['ji', 'じ', 'ジ'], ['zu', 'ず', 'ズ'], ['ze', 'ぜ', 'ゼ'], ['zo', 'ぞ', 'ゾ']],
    [['da', 'だ', 'ダ'], ['ji', 'ぢ', 'ヂ'], ['zu', 'づ', 'ヅ'], ['de', 'で', 'デ'], ['do', 'ど', 'ド']],
    [['ba', 'ば', 'バ'], ['bi', 'び', 'ビ'], ['bu', 'ぶ', 'ブ'], ['be', 'べ', 'ベ'], ['bo', 'ぼ', 'ボ']],
    [['pa', 'ぱ', 'パ'], ['pi', 'ぴ', 'ピ'], ['pu', 'ぷ', 'プ'], ['pe', 'ぺ', 'ペ'], ['po', 'ぽ', 'ポ']],
    [['kya', 'きゃ', 'キャ'], ['kyu', 'きゅ', 'キュ'], ['kyo', 'きょ', 'キョ']],
    [['sha', 'しゃ', 'シャ'], ['shu', 'しゅ', 'シュ'], ['sho', 'しょ', 'ショ']],
    [['cha', 'ちゃ', 'チャ'], ['chu', 'ちゅ', 'チュ'], ['cho', 'ちょ', 'チョ']],
    [['nya', 'にゃ', 'ニャ'], ['nyu', 'にゅ', 'ニュ'], ['nyo', 'にょ', 'ニョ']],
    [['hya', 'ひゃ', 'ヒャ'], ['hyu', 'ひゅ', 'ヒュ'], ['hyo', 'ひょ', 'ヒョ']],
    [['mya', 'みゃ', 'ミャ'], ['myu', 'みゅ', 'ミュ'], ['myo', 'みょ', 'ミョ']],
    [['rya', 'りゃ', 'リャ'], ['ryu', 'りゅ', 'リュ'], ['ryo', 'りょ', 'リョ']],
    [['gya', 'ぎゃ', 'ギャ'], ['gyu', 'ぎゅ', 'ギュ'], ['gyo', 'ぎょ', 'ギョ']],
    [['ja', 'じゃ', 'ジャ'], ['ju', 'じゅ', 'ジュ'], ['jo', 'じょ', 'ジョ']],
    [['bya', 'びゃ', 'ビャ'], ['byu', 'びゅ', 'ビュ'], ['byo', 'びょ', 'ビョ']],
    [['pya', 'ぴゃ', 'ピャ'], ['pyu', 'ぴゅ', 'ピュ'], ['pyo', 'ぴょ', 'ピョ']]
]

const _KANAS = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'ga', 'za', 'da', 'ba', 'pa']

const clickSounds = Array.from({ length: 12 }, (_, i) => new Audio(`sounds/click${i + 1}.wav`))

/* DOM Elements */

const menu = document.getElementById('menu')
const menuHeaderContainer = document.getElementById('menu-header-container')
const screenCover = document.getElementById('screen-cover')
const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('menu-close-button')
const typeHiragana = document.getElementById('type-hiragana')
const typeKatakana = document.getElementById('type-katakana')

const display = document.getElementById('display')
const prev2 = document.getElementById('prev2')
const prev1 = document.getElementById('prev')
const curr = document.getElementById('curr')
const next1 = document.getElementById('next')
const next2 = document.getElementById('next2')

const statCombo = document.getElementById('combo')
const statMaxCombo = document.getElementById('maxCombo')
const statSeen = document.getElementById('seen')
const statCorrect = document.getElementById('correct')
const statAccuracy = document.getElementById('accuracy')
const statAvgCombo = document.getElementById('avgCombo')

/* GLOBAL VARIABLES */

let mode = { hiragana: true, katakana: false }

let selectedHiragana = {
    0: true, 1: true, 2: true, 3: true, 4: true,
    5: true, 6: true, 7: true, 8: true, 9: true, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false,
    16: false, 17: false, 18: false, 19: false, 20: false,
    21: false, 22: false, 23: false, 24: false, 25: false,
}

let selectedKatakana = {
    0: true, 1: true, 2: true, 3: true, 4: true,
    5: true, 6: true, 7: true, 8: true, 9: true, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false,
    16: false, 17: false, 18: false, 19: false, 20: false,
    21: false, 22: false, 23: false, 24: false, 25: false,
}

let stats = {
    combo: 0, maxCombo: 0, avgCombo: 0,
    seen: 0, correct: 0, accuracy: 0,
    _comboBreaks: 1
}

let buffer = ''
let correct, locked
let selectedList   = []
let kanasQueue     = []
let kanasInDisplay = []

/* STOLEN FUNCTIONS */

function shuffle(array) {
    let newArray = array.slice()
    let currentIndex = newArray.length, randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]]
    } return newArray
}

/* FUNCTIONS */

function updateList() {
    selectedList = []
    if (mode.hiragana) {
        for (let i = 0; i < 26; i++) {
            if (selectedHiragana[i]) selectedList = selectedList.concat(KANAS[i])
        }
    } else if (mode.katakana) {
        for (let i = 0; i < 26; i++) {
            if (selectedKatakana[i]) selectedList = selectedList.concat(KANAS[i])
        }
    }
    kanasQueue = []
    kanasInDisplay = [getKana(), getKana(), getKana()]
}

function getKana() {
    if (kanasQueue.length === 0) kanasQueue = shuffle(selectedList)
    return kanasQueue.pop()
}

function lockInput(time = 500) {
    locked = true
    if (time > 0) {
        curr.style.opacity = 0.5
        setTimeout(() => {
            curr.style.opacity = 1
            unlockInput()
        }, time)
    }
}

const unlockInput = () => { return locked = false }

function expand() {
    curr.style.transition = 'border 0.01s'
    curr.style.border = '#bbb solid 12px'
    setTimeout(() => {
        curr.style.transition = 'border 0.15s'
        curr.style.border = '#bbb solid 4px'
    }, 50)
}

function compare() {
    let correctAnswer = kanasInDisplay[0][0]
    if (correctAnswer === buffer || !correctAnswer.startsWith(buffer)) {
        if (correctAnswer === buffer) {
            correct = true
        } else {
            lockInput()
            correct = false
        }
        buffer = ''
        updateStats()
        updateDisplay(true)
    }
}

function updateDisplay(updatePrevious) {
    let lastKana = kanasInDisplay[0]

    if (updatePrevious) {
        kanasInDisplay = [kanasInDisplay[1], kanasInDisplay[2], getKana()]
        prev2.innerText = prev1.innerText
        prev1.innerText = curr.innerText
    }

    if (mode.hiragana) {
        curr.innerText = kanasInDisplay[0][1]
        next1.innerText = kanasInDisplay[1][1]
        next2.innerText = kanasInDisplay[2][1]
    } else if (mode.katakana) {
        curr.innerText = kanasInDisplay[0][2]
        next1.innerText = kanasInDisplay[1][2]
        next2.innerText = kanasInDisplay[2][2]
    }

    if (!updatePrevious) return

    prev2.parentElement.children[0].innerText = prev1.parentElement.children[0].innerText
    prev2.style.color = prev1.style.color
    prev2.style.backgroundColor = prev1.style.backgroundColor
    prev2.style.border = prev1.style.border

    if (correct) {
        prev1.style.color = '#4f4'
        prev1.style.backgroundColor = '#393'
        prev1.style.border = '#4f4 solid 4px'
        prev1.parentElement.children[0].innerHTML = ''
    } else {
        let newP = document.createElement("p")
        newP.innerText = lastKana[0]
        prev1.style.color = '#f44'
        prev1.style.backgroundColor = '#933'
        prev1.style.border = '#f44 solid 4px'
        prev1.parentElement.children[0].replaceWith(newP)
    }
}

function updateStats() {
    stats.seen++

    if (correct) {
        stats.combo++
        stats.correct++
    } else {
        stats.combo = 0
        stats._comboBreaks++
    }

    if (stats.combo > stats.maxCombo) {
        stats.maxCombo = stats.combo
    }

    stats.accuracy = Math.round(10000 * stats.correct / stats.seen) / 100
    stats.avgCombo = Math.round(stats.correct / stats._comboBreaks)

    statCombo.innerText = stats.combo
    statMaxCombo.innerText = stats.maxCombo
    statSeen.innerText = stats.seen
    statCorrect.innerText = stats.correct
    statAccuracy.innerText = String(stats.accuracy) + '%'
    statAvgCombo.innerText = stats.avgCombo
}


function hotKeys(e) {
    switch (e.key) {
        case 'Escape':
            menu.attributes.hidden ? menuActions('open') : menuActions('close')
            break
        case `'`:
            typeHiragana.click()
            break
        case `¿`:
            typeKatakana.click()
            break
    }
}

let ithSound = 0

function updateBuffer(e) {
    if (!menu.attributes.hidden || e.key.length !== 1 || !/[a-zA-Z]/.test(e.key)) {
        hotKeys(e)
        return
    }

    if (!locked) {
        clickSounds[ithSound++].play()
        ithSound %= clickSounds.length
        buffer += e.key.toLowerCase()
        expand()
        compare()
    }
}

function saveLocalStorage() {
    localStorage.setItem("stats", JSON.stringify(stats))
    localStorage.setItem("selectedHiragana", JSON.stringify(selectedHiragana))
    localStorage.setItem("selectedKatakana", JSON.stringify(selectedKatakana))
    localStorage.setItem("mode", JSON.stringify(mode))
}

function loadLocalStorage() {
    if (localStorage.getItem("stats")) {
        stats = JSON.parse(localStorage.getItem("stats"))
        statCombo.innerText = stats.combo
        statMaxCombo.innerText = stats.maxCombo
        statSeen.innerText = stats.seen
        statCorrect.innerText = stats.correct
        statAccuracy.innerText = String(stats.accuracy) + '%'
        statAvgCombo.innerText = stats.avgCombo
    }
    if (localStorage.getItem("selectedHiragana")) {
        selectedHiragana = JSON.parse(localStorage.getItem("selectedHiragana"))
    }
    if (localStorage.getItem("selectedKatakana")) {
        selectedKatakana = JSON.parse(localStorage.getItem("selectedKatakana"))
    }
    if (localStorage.getItem("mode")) {
        mode = JSON.parse(localStorage.getItem("mode"))
    }
}

function updateMenu() {
    if (mode.hiragana) {
        document.getElementById('sep-h').style.display = 'flex'
        document.getElementById('sep-k').style.display = 'none'
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="katakana-${_KANAS[i]}"]`).style.display = 'none'
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="hiragana-${_KANAS[i]}"]`).style.display = 'flex'
    } else if (mode.katakana) {
        document.getElementById('sep-h').style.display = 'none'
        document.getElementById('sep-k').style.display = 'flex'
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="hiragana-${_KANAS[i]}"]`).style.display = 'none'
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="katakana-${_KANAS[i]}"]`).style.display = 'flex'
    }
}

function menuActions(action) {
    switch (action) {
        case 'open':
            menu.removeAttribute('hidden')
            menuHeaderContainer.removeAttribute('hidden')
            screenCover.removeAttribute('hidden')
            lockInput(0)
            break
        case 'close':
            menu.setAttribute('hidden', '')
            menuHeaderContainer.setAttribute('hidden', '')
            screenCover.setAttribute('hidden', '')
            unlockInput()
            break
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // localStorage.clear()
    loadLocalStorage()
    updateList()

    if (mode.hiragana) {
        curr.innerText = kanasInDisplay[0][1]
        next1.innerText = kanasInDisplay[1][1]
        next2.innerText = kanasInDisplay[2][1]
    } else if (mode.katakana) {
        curr.innerText = kanasInDisplay[0][2]
        next1.innerText = kanasInDisplay[1][2]
        next2.innerText = kanasInDisplay[2][2]
    }

    if (mode.hiragana) {
        document.getElementById('type-hiragana').checked = true
        document.getElementById('type-katakana').checked = false
    } else if (mode.katakana) {
        document.getElementById('type-katakana').checked = true
        document.getElementById('type-hiragana').checked = false
    }

    typeHiragana.addEventListener('click', () => {
        if (mode.hiragana) return
        mode.hiragana = true
        mode.katakana = false
        updateMenu()
        updateList()
        updateDisplay(false)
    })

    typeKatakana.addEventListener('click', () => {
        if (mode.katakana) return
        mode.hiragana = false
        mode.katakana = true
        updateMenu()
        updateList()
        updateDisplay(false)
    })

    updateMenu()

    document.addEventListener('keydown', updateBuffer)

    for (let i = 0; i < 15; i++) {
        if (selectedHiragana[i]) {
            document.getElementById(`hiragana-${_KANAS[i]}`).checked = true
        }
    }

    for (let i = 0; i < 15; i++) {
        document.getElementById(`hiragana-${_KANAS[i]}`).addEventListener('click', () => {
            selectedHiragana[i] = !selectedHiragana[i]
            if (selectedHiragana[i]) {
                document.getElementById(`hiragana-${_KANAS[i]}`).checked = true
            } else {
                document.getElementById(`hiragana-${_KANAS[i]}`).checked = false
            }
            for (let j = 0; j < 26; j++) {
                if (selectedHiragana[j]) {
                    updateList()
                    updateDisplay(false)
                    break
                } else if (j === 25) {
                    selectedHiragana[i] = true
                    document.getElementById(`hiragana-${_KANAS[i]}`).checked = true
                }
            }
        })
    }

    for (let i = 0; i < 15; i++) {
        if (selectedKatakana[i]) {
            document.getElementById(`katakana-${_KANAS[i]}`).checked = true
        }
    }

    for (let i = 0; i < 15; i++) {
        document.getElementById(`katakana-${_KANAS[i]}`).addEventListener('click', () => {
            selectedKatakana[i] = !selectedKatakana[i]
            if (selectedKatakana[i]) {
                document.getElementById(`katakana-${_KANAS[i]}`).checked = true
            } else {
                document.getElementById(`katakana-${_KANAS[i]}`).checked = false
            }
            for (let j = 0; j < 26; j++) {
                if (selectedKatakana[j]) {
                    updateList()
                    updateDisplay(false)
                    break
                } else if (j === 25) {
                    selectedKatakana[i] = true
                    document.getElementById(`katakana-${_KANAS[i]}`).checked = true
                }
            }
        })
    }

    openMenuButton.addEventListener('click', () => { menuActions('open') })
    screenCover.addEventListener('click', () => { menuActions('close') })
    closeMenuButton.addEventListener('click', () => { menuActions('close') })

    window.addEventListener('beforeunload', () => { saveLocalStorage() })
})
