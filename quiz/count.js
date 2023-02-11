let questionNumber = document.querySelector(".question-number")


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];


function setAvailableQuestions(){
  const totalQuestion = quizDB.length;
  for(let i=0; i<totalQuestion; i++){
      availableQuestions.push(quizDB[i])
     

  }

}

function getNewQuestion(){
     questionNumber.innerHTML = "Question" + (questionCounter+1) + " of " + quizDB.length;
    const questionIndex = availableQuestions[Math.floor(Math.random()* availableQuestions.length)]
     
    console.log(questionIndex)
   questionCounter++
}

function next(){
    if(questionCounter === quizDB.length){
        console.log("quiz over")
    }
    else{
        getNewQuestion();
    }
}


window.onload = function(){
  
    setAvailableQuestions();
    getNewQuestion();

}