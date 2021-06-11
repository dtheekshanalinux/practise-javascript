//age in day 
function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var ageInDaysMult = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDaysMult + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
  
  }
  function reset(){
    document.getElementById("ageInDays").remove();
  }
  //lion generator
  function generatelion() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-lion-gen');
    image.src = "images/lion.jpg";
    image. style. width = '30%';
    div.appendChild(image);
    image.setAttribute("id", "generatelion");

  }
  function resetlion(){
    document.getElementById("generatelion").remove();
  }


  //Rock paper scissor
  function rpsGame(yourChoice){ // 'yourchoice' is basicially mean input 
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randTorpsInt());
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

  }
  function randTorpsInt(){
    return Math.floor(Math.random() * 3);
  }
  function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
  }
  function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
      'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
      'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
      'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
  }
  function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
      return {'message': 'you lost','color': 'red'}
    } else if (yourScore === 0.5){
      return {'message': 'you tied','color': 'yellow'}
    } else {
      return {'message': 'you won','color': 'green'}
    }
  }
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
  var imagesDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
  // remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humandiv = document.createElement('div');
  var botdiv = document.createElement('div');
  var messagediv = document.createElement('div');

  humandiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 0px 59px -4px rgb(2, 12, 97)'>";
  messagediv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + ";font-size: 60px; padding: 30px; '>" + finalMessage['message'] + '</h1>'
  botdiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 0px 59px -4px rgb(177, 13, 13)'>";
  
  document.getElementById('flex-box-rps-div').append(humandiv);
  document.getElementById('flex-box-rps-div').append(messagediv);
  document.getElementById('flex-box-rps-div').append(botdiv);

}
//change the color of all of buttons
var all_button = document.getElementsByTagName('button'); //get all tags name 'buttons'

var copyAllButton = [];
for (let i=0; i<all_button.length; i++){// we take classList[1] because it will take second class of button tag
  copyAllButton.push(all_button[i].classList[1]);// push is used to add item to list
}

function buttonColorChange(buttonThingy){
  if (buttonThingy.value === "red"){
    buttonsRed();
  } else if (buttonThingy.value === "green"){
    buttonsGreen();
  } else if (buttonThingy.value === "reset"){
    buttonsReset();
  } else if (buttonThingy.value === "random"){
    randomColors();
  }
}

function buttonsRed(){
  for (let i = 0; i < all_button.length; i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for (let i = 0; i < all_button.length; i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-success');
  }
}

function buttonsReset(){
  for (let i = 0; i < all_button.length; i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyAllButton[i]);
  }
}

function randomColors(){
  let choices = ['btn-primary','btn-danger','btn-success','btn-warning']
  for (let i = 0; i < all_button.length; i++){
    let randomNumber = Math.floor(Math.random() * 4); // This kept in for loop because it generate a new number in every time
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[randomNumber]);
  }
}