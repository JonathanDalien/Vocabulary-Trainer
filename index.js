let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
const word = document.querySelector(".word");
const compareBtn = document.querySelector(".btn")
const text = document.querySelector(".textfield");


function nextVocabulary() {
    let words = Object.keys(dictionary);
    let random_word = words[Math.floor(Math.random() * words.length)];
    if (Object.keys(dictionary).length == 0) {
        word.textContent = "Füge Vokabeln hinzu!"
        text.disabled = true;
        compareBtn.disabled = true;
    } else {
        word.textContent = random_word;
    }
}

nextVocabulary();

function compare() {
    if (dictionary[word.textContent] == text.value) {
        nextVocabulary();
        text.value = "";
    }
}

compareBtn.addEventListener("click", compare)
