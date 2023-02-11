let  quizDB = [
    {
      questions: "Who invented the first practical petrol-powered automobile?",
      a: "Karl Benz",
      b: "Henry Ford",
      c: "Gottlieb Daimler",
      d: " Nikolaus Otto",
      ans: "ans1" 
    },
    {
        questions: "Who invented the hoverboard?",
        a: "Dean Kamen",
        b: "Mark Cuban",
        c: "Tony Stark (Iron Man)",
        d: "Shane Chen",
        ans: "ans4"
    },
    {
        questions: " Who invented the first practical color photograph?",
        a: "Louis Daguerre",
        b: " William Henry Fox Talbot",
        c: "John Herschel",
        d: " James Clerk Maxwell",
        ans: "ans4"
    },
    { questions: "Who is credited with inventing the first digital computer?",
    a: "John Atanasoff",
    b: "Konrad Zuse",
    c: "Alan Turing",
    d: "John Mauchly and J. Presper Eckert",
    ans: "ans4" 
    },
    { questions: "Who invented the first solid-state laser?",
    a: " Theodore Maiman",
    b: " Charles H. Townes",
    c: "Gordon Gould",
    d: "Ali Javan",
    ans: "ans1" 
    },
    {
        questions: "Who is credited with inventing the first successful airplane?",
        a: "Orville and Wilbur Wright",
        b: " Glenn Curtiss",
        c: "Samuel Langley",
        d: "Alberto Santos-Dumont",
        ans: "ans1"
    },
    {
        questions: "Who invented the first practical gas turbine engine for aircraft?",
        a: "Hans von Ohain",
        b: "Frank Whittle",
        c: " Vladimir K. Zworykin",
        d: " John Logie Baird",
        ans: "ans2"
    },
    {
        questions: " Who is credited with inventing the barometer?",
        a: "Blaise Pascal",
        b: "Galileo Galilei",
        c: " Isaac Newton",
        d: "Albert Einstein",
        ans: "ans1"
    },
    {
        questions: "Who invented the first digital computer?",
        a: "Ada Lovelace",
        b: "Charles Babbage",
        c: " John Atanasoff and Clifford Berry",
        d: "Alan Turing",
        ans: "ans3"
    },
    {
        questions: "What was the first product to be mass-produced using an assembly line?",
        a: "Automobile",
        b: "Refrigerator",
        c: "Television",
        d: "Air conditioner",
        ans: "ans1"
    },
    {
        questions: "Who is credited with inventing the motion picture camera?",
        a: "Louis Lumière",
        b: "Thomas Edison",
        c: "Alexander Graham Bell",
        d: "Guglielmo Marconi",
        ans: "ans1"
    },
    {
        questions: "What was the first successful portable video game console?",
        a: "Game Boy",
        b: "Atari Lynx",
        c: "Sega Game Gear",
        d: "TurboExpress",
        ans: "ans1"
    },
    {
        questions: "Who invented the first air conditioning system?",
        a: "Alexander Graham Bell",
        b: "Willis Carrier",
        c: " Nikola Tesla",
        d: " Thomas Edison",
        ans: "ans2"
    },
    {
        questions: " What is the smallest country in the world by population?",
        a: "Nauru",
        b: "Tuvalu",
        c: " San Marino",
        d: "Monaco",
        ans: "ans2"
    },
    {
        questions: " Who invented the first successful powered flight?",
        a: "Orville and Wilbur Wright",
        b: "The Wright Brothers ",
        c: "Alexander Graham Bell",
        d: "Thomas Edison",
        ans: "ans1"
    },
    {
        questions: " Who invented the television remote control?",
        a: " Robert Adler",
        b: "Eugene Polley",
        c: "Philo Taylor Farnsworth",
        d: "John Logie Baird",
        ans: "ans2"
    },
    {
        questions: "What was the first consumer electronic device to use solid-state transistors?",
        a: "Television",
        b: "Radio",
        c: "Computer",
        d: "Telephone",
        ans: "ans2"
    },
    {
        questions: "Who invented the first successful electric car?",
        a: "Thomas Parker",
        b: "Thomas Davenport",
        c: "Henry Ford",
        d: "Charles Duryea",
        ans: "ans1"
    },
    {
        questions: "Who is credited with inventing the first successful continuous ink jet printing system?",
        a: " John J. Danz",
        b: " Irving Galloway",
        c: " Trevor K. Wadsworth ",
        d: "Willem Roentgen",
        ans: "ans1"
    },
    {
        questions: " What was the first digital music player?",
        a: "  iPod",
        b: " Walkman",
        c: " Discman",
        d: "Zune",
        ans: "ans3"
    },
];

let newQuizDBCopy = _.shuffle(quizDB)

console.log('newQuizDBCopy', 'newQuizDBCopy')

let questions = document.querySelector('.questions');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

let answers = document.querySelectorAll('.answer');

let showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;



let loadQuestion = () => {
     
    let questionList =newQuizDBCopy[questionCount];

    questions.innerHTML=  questionList.questions;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



}



loadQuestion();
 
let getCheckAnswer = () => {
    let answer;
     
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer =curAnsElem.id; 
        }
    });

    return answer

};

let deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    let checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === newQuizDBCopy[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < newQuizDBCopy.length){
        loadQuestion();
    }else{

        showScore.innerHTML =`
        <h3>You Scored ${score}/${newQuizDBCopy.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

})
