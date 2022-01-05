var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ['application','programming','interface','wizard','caliph','walkway','megahertz'];
var selectedWords = words[Math.floor(Math.random() * words.length)];
console.log(selectedWords);
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
var correctWord = [];
var wrongWord = [];
var selectedImg = ['img1.jpg','img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];
//function for displaying correct word
function displayWord(){
  screen.innerHTML = `
  ${selectedWords
  .split('')
  .map(
      key =>`
      <span class="letter">
      ${correctWord.includes(key) ? key : ''}
      </span>
      `
  )
  .join('')}
  `;
  const innerWord = screen.innerText.replace(/\n/g, '');
  if(innerWord === selectedWords){
    finalMessage.innerText = 'Congratulations! You won!';
    popup.style.display = 'flex';
  }
}
//header tag
var headTag = document.createElement("h2");
headTag.style.textAlign = "center";
headTag.innerText = "Hangman Words";
document.body.appendChild(headTag);

var myDiv = document.createElement("div");
myDiv.style.marginLeft = "600px";
document.body.appendChild(myDiv);
//picture tag
var img = document.createElement("img");
img.setAttribute("src", "img1.jpg");
myDiv.appendChild(img);
//function for uptating wrong letters
function updateWrongWord(){
  var count = wrongWord.length
  img.setAttribute("src",selectedImg[count])
  if(wrongWord.length === selectedImg.length-1){
    finalMessage.innerText = 'Sorry! You lose!';
    popup.style.display = 'flex';
  }
}
//displaying correct words to be entered
var screen = document.createElement("div");
screen.style.display = "flex";
screen.style.justifyContent = "center";
 screen.style.alignItems = "center";
document.body.appendChild(screen);
//key board container
var board = document.createElement("div");
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";
board.style.marginLeft = "450px";
board.style.width = "425px";
board.style.justifyContent = "center";
document.body.appendChild(board);
//letter keys
for (let i = 0; i < alphabets.length; i++) {
  var button = document.createElement("button");
  button.innerText = alphabets[i];
  button.style.backgroundColor = "#3b4eb7";
  button.style.border = "1px solid #3b4eb7";
  button.style.borderRadius = "5px";
  button.style.marginLeft = "5px";
  button.style.marginTop = "5px";
  button.style.color = "white";
  button.style.width = "40px";
  button.style.height = "40px";
  button.addEventListener('click', () => {
    var key = alphabets[i];
    if (selectedWords.includes(key)) {
      if (!correctWord.includes(key)) {
        correctWord.push(key);
        displayWord();
      }
    } else {
      if (!wrongWord.includes(key)) {
        wrongWord.push(key);
        updateWrongWord()
      }
    }
  })
  board.appendChild(button);
}
//reset button on popup message
playAgainBtn.addEventListener('click',()=>{
  correctWord.splice(0);
  wrongWord.splice(0);
  selectedWords = words[Math.floor(Math.random()*words.length)];
  displayWord();
  updateWrongWord();
  popup.style.display = 'none';
});
displayWord();