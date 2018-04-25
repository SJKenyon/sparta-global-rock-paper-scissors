//alert("Test")

//KEY
//1 - rock
//2 - paper
//3 - scissors

var c = 0;
var u = 0;
alert("RULES:"+"\n"+"- Rock beats Scissors"+"\n"+"- Paper beats Rock"+"\n"+"- Scissors beats Paper")

for(var i = 0; i < 5; i++) {
  var choice = prompt("Choose your option:"+"\n"+"r = rock"+"\n"+"p = paper"+"\n"+"s = scissors");

  if(choice == "r"){
    //RANDOMIZER
    var x = Math.floor((Math.random() * 3) + 1);
    console.log(x);
    //RANDOMIZER

    //ALERT+POINTS
    if(x == 1){
      alert("Computer chose rock, YOU LOSE!");
      c++;
    }else if(x == 2){
      alert("Computer chose paper, YOU LOSE!");
      c++;
    }else{
      alert("Computer chose scissors, YOU WIN!");
      u++;
    }
    //ALERT+POINTS

  }else if(choice == "s"){

    //RANDOMIZER
    var x = Math.floor((Math.random() * 3) + 1);
    console.log(x);
    //RANDOMIZER

    //ALERT+POINTS
    if(x == 1){
      alert("Computer chose rock, YOU LOSE!");
      c++;
    }else if(x == 2){
      alert("Computer chose paper, YOU WIN!");
      u++;
    }else{
      alert("Computer chose scissors, YOU LOSE!");
      c++;
    }
    //ALERT+POINTS

  }else if(choice == "p"){

    //RANDOMIZER
    var x = Math.floor((Math.random() * 3) + 1);
    console.log(x);
    //RANDOMIZER

    //ALERT+POINTS
    if(x == 1){
      alert("Computer chose rock, YOU WIN!");
      u++;
    }else if(x == 2){
      alert("Computer chose paper, YOU LOSE!");
      c++;
    }else{
      alert("Computer chose scissors, YOU LOSE!");
      c++;
    }
    //ALERT+POINTS

  }else{
    alert("ERROR!");
  }
}


if(u > c){
  alert("User: " + u + " Computer: " + c + " YOU WIN!");
}else{
  alert("User: " + u + " Computer: " + c + " YOU LOSE!");
}
