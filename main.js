
//decleration variables
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArr = Array.from(letters);
let letterplace = document.querySelector(".left");
let letterGuessPlace = document.querySelector(".guess-letters");
let wrongAttempts = 0;


//decleration hangman variables
let stand = document.querySelector(".stand");
let theHang = document.querySelector(".right .the-hang");
let drawHead = document.querySelector(".right .draw-head");
let drawBody = document.querySelector("right .draw-body");
let hands = document.querySelector(".right .hands");
let legs = document.querySelector(".right .legs");


//coping letters in the html page
lettersArr.forEach((letter) => {
  let span = document.createElement("span");
  span.textContent = letter;
  letterplace.appendChild(span);
});

//fetch data from json file

fetch("/json.json")
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((data) => {
    //all keys number
    let allKeys = Object.keys(data);
    //random category
    let randomNumber = Math.floor(Math.random() * allKeys.length);
    let randomProp = data[randomNumber];
    let randompropName = Object.keys(randomProp);

    //Random word from random category
    let randomWord =
      randomProp[randompropName][
        Math.floor(Math.random() * randomProp[randompropName].length)
      ];

    //get the name of the category
    document.querySelector(".game-info .category span").textContent =
      randompropName + " " + randomWord;

    //loop on the Random world
    randomWord.split("").forEach((word, index) => {
      //span creation
      let span = document.createElement("span");
      //if the world contain a space
      if (word === " ") {
        //adding class space on span if there is space
        span.className = "space";
      }
      letterGuessPlace.appendChild(span);
    });
      //loop on letters
      document.querySelectorAll(".left > span").forEach((span) => {
        
        //onclick on the span
        span.addEventListener("click", (e) => {
          //when target clicked 
          e.target.classList.add("display");
          let found = false
          //loop on the random words
          randomWord.split("").forEach((word,index)=>{
        
            //if the clicked span = letter from work condition
        if (span.textContent.toLocaleLowerCase() == word.toLocaleLowerCase()) {
        document.querySelectorAll(".guess-letters span")[index].textContent = span.textContent.toLocaleUpperCase();
        found = true;
      }
          })
          //if the word not found 
        if(!found && wrongAttempts < 6){
          wrongAttempts++
          //add class worng on the drawsection
          document.querySelector('.right .the-draw').classList.add(`wrong-${wrongAttempts}`)
        }
        //if you ranout all attemps
        if(wrongAttempts == 6){
          letterplace.classList.add('finished')
          console.log("you run out all attempts")
          gameOver()
        }
    });
    });
    function gameOver(){
      Swal.fire(`You Ranout All Attempts And The world is ${randomWord}`);
      setInterval(()=>{
        window.location.reload()
      },1000)
    
    }
});
