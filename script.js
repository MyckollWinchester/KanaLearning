const HIRAGANA = [
    ['あ', 'い', 'う', 'え', 'お'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['や', 'ゆ', 'よ'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['わ', 'を', 'ん'],
    ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
    ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
    ['だ', 'ぢ', 'づ', 'で', 'ど'],
    ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
    ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
    ['きゃ', 'きゅ', 'きょ'],
    ['しゃ', 'しゅ', 'しょ'],
    ['ちゃ', 'ちゅ', 'ちょ'],
    ['にゃ', 'にゅ', 'にょ'],
    ['ひゃ', 'ひゅ', 'ひょ'],
    ['みゃ', 'みゅ', 'みょ'],
    ['りゃ', 'りゅ', 'りょ'],
    ['ぎゃ', 'ぎゅ', 'ぎょ'],
    ['じゃ', 'じゅ', 'じょ'],
    ['びゃ', 'びゅ', 'びょ'],
    ['ぴゃ', 'ぴゅ', 'ぴょ']
];

const KATAKANA = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ['カ', 'キ', 'ク', 'ケ', 'コ'],
    ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ['タ', 'チ', 'ツ', 'テ', 'ト'],
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ['ヤ', 'ユ', 'ヨ'],
    ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    ['ワ', 'ヲ', 'ン'],
    ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
    ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'],
    ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'],
    ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
    ['パ', 'ピ', 'プ', 'ペ', 'ポ'],
    ['キャ', 'キュ', 'キョ'],
    ['シャ', 'シュ', 'ショ'],
    ['チャ', 'チュ', 'チョ'],
    ['ニャ', 'ニュ', 'ニョ'],
    ['ヒャ', 'ヒュ', 'ヒョ'],
    ['ミャ', 'ミュ', 'ミョ'],
    ['リャ', 'リュ', 'リョ'],
    ['ギャ', 'ギュ', 'ギョ'],
    ['ジャ', 'ジュ', 'ジョ'],
    ['ビャ', 'ビュ', 'ビョ'],
    ['ピャ', 'ピュ', 'ピョ']
];

const ROMAJI = [
    ['a', 'i', 'u', 'e', 'o'],
    ['ka', 'ki', 'ku', 'ke', 'ko'],
    ['sa', 'shi', 'su', 'se', 'so'],
    ['ta', 'chi', 'tsu', 'te', 'to'],
    ['na', 'ni', 'nu', 'ne', 'no'],
    ['ha', 'hi', 'fu', 'he', 'ho'],
    ['ma', 'mi', 'mu', 'me', 'mo'],
    ['ya', 'yu', 'yo'],
    ['ra', 'ri', 'ru', 're', 'ro'],
    ['wa', 'wo', 'n'],
    ['ga', 'gi', 'gu', 'ge', 'go'],
    ['za', 'ji', 'zu', 'ze', 'zo'],
    ['da', 'ji', 'zu', 'de', 'do'],
    ['ba', 'bi', 'bu', 'be', 'bo'],
    ['pa', 'pi', 'pu', 'pe', 'po'],
    ['kya', 'kyu', 'kyo'],
    ['sha', 'shu', 'sho'],
    ['cha', 'chu', 'cho'],
    ['nya', 'nyu', 'nyo'],
    ['hya', 'hyu', 'hyo'],
    ['mya', 'myu', 'myo'],
    ['rya', 'ryu', 'ryo'],
    ['gya', 'gyu', 'gyo'],
    ['ja', 'ju', 'jo'],
    ['bya', 'byu', 'byo'],
    ['pya', 'pyu', 'pyo']
];

const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('menu-close-button');

const counter = document.getElementById('counter');
const display = document.getElementById('display');

const prev2 = document.getElementById('prev2');
const prev1 = document.getElementById('prev');
const curr = document.getElementById('curr');
const next1 = document.getElementById('next');
const next2 = document.getElementById('next2');

const statCombo = document.getElementById('combo');
const statMaxCombo = document.getElementById('maxCombo');
const statSeen = document.getElementById('seen');
const statCorrect = document.getElementById('correct');
const statAccuracy = document.getElementById('accuracy');
const statAvgCombo = document.getElementById('avgCombo');

let clickSounds = [];

for (let i = 1; i <= 12; i++) {
    clickSounds.push(new Audio(`sounds/click${i}.wav`));
}

let mode = {
    hiragana: true,
    katakana: false,
}

let selectedHiragana = {
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true,
    6: true, 7: true, 8: true, 9: true, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false,
    16: false, 17: false, 18: false, 19: false, 20: false,
    21: false, 22: false, 23: false, 24: false, 25: false,
}

let selectedKatakana = {
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true,
    6: true, 7: true, 8: true, 9: true, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false,
    16: false, 17: false, 18: false, 19: false, 20: false,
    21: false, 22: false, 23: false, 24: false, 25: false,
}

let selectedKanaList = [];
let selectedAnswerList = [];

function updateLists() {
    selectedKanaList = [];
    selectedAnswerList = [];
    if (mode.hiragana) {
        for (let i = 0; i < 26; i++) {
            if (selectedHiragana[i]) {
                selectedKanaList = selectedKanaList.concat(HIRAGANA[i]);
                selectedAnswerList = selectedAnswerList.concat(ROMAJI[i]);
            }
        }
    } else if (mode.katakana) {
        for (let i = 0; i < 26; i++) {
            if (selectedKatakana[i]) {
                selectedKanaList = selectedKanaList.concat(KATAKANA[i]);
                selectedAnswerList = selectedAnswerList.concat(ROMAJI[i]);
            }
        }
    }
}

let stats = {
    combo: 0, maxCombo: 0, avgCombo: 0,
    seen: 0, correct: 0, accuracy: 0,
    _comboBreaks: 1
}

let buffer = '';
let correct;
let locked;

function getRandomKana() {
    const rand = Math.floor(Math.random() * selectedKanaList.length);
    return selectedKanaList[rand];
}

function lockInput() {
    locked = true;
    curr.style.opacity = 0.5;
    setTimeout(() => {
        curr.style.opacity = 1;
        locked = false;
    }, 500);
}

function expand() {
    curr.style.transition = 'border 0.01s';
    curr.style.border = '#bbb solid 12px';
    setTimeout(() => {
        curr.style.transition = 'border 0.15s';
        curr.style.border = '#bbb solid 4px';
    }, 50);
}

function compare() {
    correctAnswer = selectedAnswerList[selectedKanaList.indexOf(curr.innerText)];
    if (correctAnswer === buffer || !correctAnswer.startsWith(buffer)) {
        if (correctAnswer === buffer) {
            correct = true;
        } else {
            lockInput();
            correct = false;
        }
        buffer = '';
        updateStats();
        updateDisplay();
    }
}

function updateDisplay() {
    prev2.innerText = prev1.innerText;
    prev1.innerText = curr.innerText;
    curr.innerText = next1.innerText;
    next1.innerText = next2.innerText;
    next2.innerText = getRandomKana();

    prev2.parentElement.children[0].innerText = prev1.parentElement.children[0].innerText;
    prev2.style.color = prev1.style.color;
    prev2.style.backgroundColor = prev1.style.backgroundColor;
    prev2.style.border = prev1.style.border;

    if (correct) {
        prev1.style.color = '#4f4'
        prev1.style.backgroundColor = '#393';
        prev1.style.border = '#4f4 solid 4px';
        prev1.parentElement.children[0].innerHTML = '';
    } else {
        let newP = document.createElement("p");
        newP.innerText = selectedAnswerList[selectedKanaList.indexOf(prev1.innerText)];
        prev1.style.color = '#f44'
        prev1.style.backgroundColor = '#933';
        prev1.style.border = '#f44 solid 4px';
        prev1.parentElement.children[0].replaceWith(newP);
    }
}

function updateStats() {
    stats.seen++;

    if (correct) {
        stats.combo++;
        stats.correct++;
    } else {
        stats.combo = 0;
        stats._comboBreaks++;
    }

    if (stats.combo > stats.maxCombo) {
        stats.maxCombo = stats.combo;
    }

    stats.accuracy = Math.round(10000 * stats.correct / stats.seen) / 100;
    stats.avgCombo = Math.round(stats.correct / stats._comboBreaks);

    statCombo.innerText = stats.combo;
    statMaxCombo.innerText = stats.maxCombo;
    statSeen.innerText = stats.seen;
    statCorrect.innerText = stats.correct;
    statAccuracy.innerText = String(stats.accuracy) + '%';
    statAvgCombo.innerText = stats.avgCombo;
}

let ithSound = 0;

function updateBuffer(e) {
    if (!locked) {
        clickSounds[ithSound].play();
        ithSound = (ithSound + 1) % clickSounds.length;
        expand();
        buffer += e.key.toLowerCase();
        compare();
    }
}

function reroll() {
    for (let i = 2; i < 5; i++) {
        display.children[i].children[1].innerText = getRandomKana();
    }
}

function saveLocalStorage() {
    localStorage.setItem("stats", JSON.stringify(stats));
    localStorage.setItem("selectedHiragana", JSON.stringify(selectedHiragana));
    localStorage.setItem("selectedKatakana", JSON.stringify(selectedKatakana));
    localStorage.setItem("mode", JSON.stringify(mode));
}

function loadLocalStorage() {
    if (localStorage.getItem("stats")) {
        stats = JSON.parse(localStorage.getItem("stats"));
        statCombo.innerText = stats.combo;
        statMaxCombo.innerText = stats.maxCombo;
        statSeen.innerText = stats.seen;
        statCorrect.innerText = stats.correct;
        statAccuracy.innerText = String(stats.accuracy) + '%';
        statAvgCombo.innerText = stats.avgCombo;
    }
    if (localStorage.getItem("selectedHiragana")) {
        selectedHiragana = JSON.parse(localStorage.getItem("selectedHiragana"));
    }
    if (localStorage.getItem("selectedKatakana")) {
        selectedKatakana = JSON.parse(localStorage.getItem("selectedKatakana"));
    }
    if (localStorage.getItem("mode")) {
        mode = JSON.parse(localStorage.getItem("mode"));
    }
}

const kanas = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'ga', 'za', 'da', 'ba', 'pa'];

function updateMenu() {
    if (mode.hiragana) {
        document.getElementById('sep-h').style.display = 'flex';
        document.getElementById('sep-k').style.display = 'none';
        for (let i = 0; i < 15; i++) 
            document.querySelector(`label[for="katakana-${kanas[i]}"]`).style.display = 'none';
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="hiragana-${kanas[i]}"]`).style.display = 'flex';
    } else if (mode.katakana) {
        document.getElementById('sep-h').style.display = 'none';
        document.getElementById('sep-k').style.display = 'flex';
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="hiragana-${kanas[i]}"]`).style.display = 'none';
        for (let i = 0; i < 15; i++)
            document.querySelector(`label[for="katakana-${kanas[i]}"]`).style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // localStorage.clear();
    loadLocalStorage();
    updateLists();
    reroll();

    if (mode.hiragana) {
        document.getElementById('type-hiragana').checked = true;
        document.getElementById('type-katakana').checked = false;
    } else if (mode.katakana) {
        document.getElementById('type-katakana').checked = true;
        document.getElementById('type-hiragana').checked = false;
    }

    document.getElementById('type-hiragana').addEventListener('click', () => {
        mode.hiragana = true;
        mode.katakana = false;
        updateMenu();
        updateLists();
        reroll();
    });

    document.getElementById('type-katakana').addEventListener('click', () => {
        mode.hiragana = false;
        mode.katakana = true;
        updateMenu();
        updateLists();
        reroll();
    });

    updateMenu();

    document.addEventListener('keypress', updateBuffer);

    for (let i = 0; i < 15; i++) {
        if (selectedHiragana[i]) {
            document.getElementById(`hiragana-${kanas[i]}`).checked = true;
        }
    }

    for (let i = 0; i < 15; i++) {
        document.getElementById(`hiragana-${kanas[i]}`).addEventListener('click', () => {
            selectedHiragana[i] = !selectedHiragana[i];
            if (selectedHiragana[i]) {
                document.getElementById(`hiragana-${kanas[i]}`).checked = true;
            } else {
                document.getElementById(`hiragana-${kanas[i]}`).checked = false;
            }
            selectedKanaList = [];
            selectedAnswerList = [];
            for (let j = 0; j < 26; j++) {
                if (selectedHiragana[j]) {
                    updateLists();
                    reroll();
                    break;
                } else if (j === 25) {
                    selectedHiragana[i] = true;
                    document.getElementById(`hiragana-${kanas[i]}`).checked = true;
                }
            }
        });
    }

    for (let i = 0; i < 15; i++) {
        if (selectedKatakana[i]) {
            document.getElementById(`katakana-${kanas[i]}`).checked = true;
        }
    }

    for (let i = 0; i < 15; i++) {
        document.getElementById(`katakana-${kanas[i]}`).addEventListener('click', () => {
            selectedKatakana[i] = !selectedKatakana[i];
            if (selectedKatakana[i]) {
                document.getElementById(`katakana-${kanas[i]}`).checked = true;
            } else {
                document.getElementById(`katakana-${kanas[i]}`).checked = false;
            }
            selectedKanaList = [];
            selectedAnswerList = [];
            for (let j = 0; j < 26; j++) {
                if (selectedKatakana[j]) {
                    updateLists();
                    reroll();
                    break;
                } else if (j === 25) {
                    selectedKatakana[i] = true;
                    document.getElementById(`katakana-${kanas[i]}`).checked = true;
                }
            }
        });
    }
    
    openMenuButton.addEventListener('click', () => {
        menu.removeAttribute('hidden');
    });

    closeMenuButton.addEventListener('click', () => {
        menu.setAttribute('hidden', '');
    });
});

window.addEventListener('beforeunload', () => { saveLocalStorage() });
