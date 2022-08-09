let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
const word = document.querySelector(".word");
const compareBtn = document.querySelector(".btn")
const text = document.querySelector(".textfield");
const changeBtn = document.querySelector(".changeBtn");

function changeLang() {
    if (changeBtn.value == "gerEng") {
        changeBtn.value = "engGer"
        nextVocabulary();
    } else {
        changeBtn.value = "gerEng"
        nextVocabulary();
    }
}


changeBtn.addEventListener("click", changeLang)


function nextVocabulary() {
    if (changeBtn.value == "gerEng") {
        let words = Object.keys(dictionary);
        let random_word = words[Math.floor(Math.random() * words.length)];
        if (Object.keys(dictionary).length == 0) {
            word.textContent = "Füge Vokabeln hinzu!"
            text.disabled = true;
            compareBtn.disabled = true;
            changeBtn.disabled = true;
        } else {
            word.textContent = random_word;
        }
    } else {
        let words = Object.keys(dictionary);
        random_word = words[Math.floor(Math.random() * words.length)];
        if (Object.keys(dictionary).length == 0) {
            word.textContent = "Füge Vokabeln hinzu!"
            text.disabled = true;
            compareBtn.disabled = true;
            changeBtn.disabled = true;
        } else {
            word.textContent = dictionary[random_word];
        }
    }
}


nextVocabulary();

function compare() {
    if (changeBtn.value == "gerEng") {
        if (dictionary[word.textContent] == text.value) {
            nextVocabulary();
            text.value = "";
        }
    } else {
        if (random_word == text.value) {
            nextVocabulary();
            text.value = "";
        }
    }
}

compareBtn.addEventListener("click", compare)

text.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        compare();
    }
});
