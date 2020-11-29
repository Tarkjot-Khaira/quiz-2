var chalk=require("chalk")
var readline=require("readline-sync")

var userName=readline.question("May I have your Name? ")
console.log(chalk.cyan("Welcome "+userName+" !! to how much do you know about Punjab?\n"))

console.log("Let's Start")

var questionList=[
  {
    question:"What is the mother tongue of Punjab? \na.Hindi \nb.Punjabi\nc.Urdu\n",
    answer: "b"
  },
  {
    question:"What is the official language of Punjab? \na.Hindi \nb.Punjabi\nc.Urdu\n",
    answer: "b"
  },
  {
    question:"What is the folk dance(Male) of Punjab? \na.Bhangra \nb.Garba\n",
    answer: "a"
  },
  {
    question:"What is the folk dance(Female) of Punjab? \na.Giddha \nb.Ghumar\nc.Kathak\n",
    answer: "a"
  },
  {
    question:"Which of these is the tourism place in Punjab? \na.India Gate \nb.Golden Temple\n",
    answer: "b"
  }
  ];


var score=0;
var highScores=[
  first={
    name:"Tark",
    score:5
  },
  second={
    name:"Priya",
    score:4
  },
  third={
    name:"Samiksha",
    score:3
  }
]


function game(question,answer)
{
  var userAnswer=readline.question(chalk.red(question))
  if(userAnswer.toLowerCase()===answer)
  {
    score=score+1;
    console.log(chalk.green("correct"))
    console.log("Your score is "+score)
    
  }
  else{
    console.log(chalk.yellow("wrong"))
    console.log("Your score is "+score)
  }
}


for(i=0;i<questionList.length;i++)
{
  game(questionList[i].question,questionList[i].answer)
  console.log("----------------------")
}

console.log("Game Over!!")
console.log("Your Total score : "+score)
console.log("--------------------------------------")
console.log(chalk.white.bgCyan.bold("High Score Leader Board"))
console.log("--------------------------------------")

//printing highscores
for(i=0;i<highScores.length;i++)
{
  console.log(chalk.cyan((i+1)+" Name : "+highScores[i].name+",  Score : "+highScores[i].score))
}

console.log("------------------------------------")
//checking if current user has made high score
for(i=0;i<highScores.length;i++)
{
  if(score>=highScores[i].score)
  {
    console.log(chalk.green("Congratulations!! You have beaten "+highScores[i].name));
    console.log("Send screenshot of your high score");
    break;
  }
}


