let letters = 'abcdefghijklmnopqrstuvwxyz'
let lettersArr = Array.from(letters)
let letterplace = document.querySelector('.left')
lettersArr.forEach(letter =>{
    let span = document.createElement('span')
    span.textContent = letter;
    letterplace.appendChild(span)
})