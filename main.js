//decleration variables
let letters = 'abcdefghijklmnopqrstuvwxyz'
let lettersArr = Array.from(letters)
let letterplace = document.querySelector('.left')

//coping letters in the html page
lettersArr.forEach(letter =>{
    let span = document.createElement('span')
    span.textContent = letter;
    letterplace.appendChild(span)
})

//loop on letters
document.querySelectorAll('.left > span').forEach(span=>{
//onclick on the span
    span.addEventListener('click',()=>{

    })
})

//fetch data from json file

const data = fetch("/json.json").then(res=>{
    let data = res.json()
    return data
}).then(data =>{
    console.log(Object.keys(data))
})

console.log(data)
