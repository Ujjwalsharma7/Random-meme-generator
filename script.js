const generateMemebtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage =  document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeAuthor = document.querySelector("meme-generator .meme-author")

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
};

generateMemebtn.addEventListener("click", generateMeme)