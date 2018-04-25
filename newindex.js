//1 - rock 2 - paper 3 - scissors

var c = 0; //computer points
var u = 0; //user points
alert("RULES:"+"\n"+"- Rock beats Scissors"+"\n"+"- Paper beats Rock"+"\n"+"- Scissors beats Paper")

function winAlert(){
  alert("Computer chose " + computerOutput + " , YOU WIN!");
  c++;
  return c;
}
function loseAlert(){
  alert("Computer chose " + computerOutput + " , YOU LOSE!");
  u++;
  return u;
}

function randomizer(){
  var x = Math.floor((Math.random() * 3) + 1);
  console.log(x);
  return x;
}

function computerChoice(){
  if(x == 1){
    var cOutput = "rock";
  }else if(x == 2){
    var cOutput = "paper";
  }else{
    var cOutput = "scissors";
  }
  return cOutput;
}

for(var i = 0; i < 5; i++) {
  var choice = prompt("Choose your option:"+"\n"+"r = rock"+"\n"+"p = paper"+"\n"+"s = scissors");
  var x = randomizer();

  var computerOutput = computerChoice();

  var win = winAlert;

  var lose = loseAlert;

  if(choice == "r"){

    //ALERT+POINTS
    if(x == 1 || x == 2){
      loseAlert();
    }else{
      winAlert();
    }
    //ALERT+POINTS

  }else if(choice == "s"){

    //ALERT+POINTS
    if(x == 2 || x == 3){
      loseAlert();
    }else{
      winAlert();
    }
    //ALERT+POINTS
  }else if(choice == "p"){
    //ALERT+POINTS
    if(x == 1 || x == 3){
      loseAlert();
    }else{
      winAlert();
    }
    //ALERT+POINTS
  }else{
    i--;
    alert("ERROR!");
  }
}


if(u > c){
  alert("User: " + u + " Computer: " + c + " YOU WIN!");
}else{
  alert("User: " + u + " Computer: " + c + " YOU LOSE!");
}
