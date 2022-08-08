let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

const germanWord = document.querySelector(".ger");
const englishWord = document.querySelector(".eng");
const addBtn = document.querySelector(".addBtn");
const vocList = document.querySelector(".listvoc")

const word = document.querySelector(".word");


addBtn.addEventListener("click", addVocabulary)

function addVocabulary() {
    if (germanWord.value == "" || englishWord.value == "") return;
    dictionary[germanWord.value] = englishWord.value
    germanWord.value = "";
    englishWord.value = "";
    listVoc();
    localStorage.setItem("dictionary", JSON.stringify(dictionary))
}

function listVoc() {
    vocList.innerHTML = "";
    for (let key in dictionary) {
        vocList.innerHTML += `<li>${key} - ${dictionary[key]}<button class="deleteBtn" value="${key}">Delete</button</li> `
    }
    deleteWord();
}

listVoc();


function deleteWord() {
    const deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((element) => {
        element.addEventListener("click", () => {
            delete dictionary[element.value];
            listVoc();
        })
    })
    localStorage.setItem("dictionary", JSON.stringify(dictionary))
}





