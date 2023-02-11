let  quizDB = [
    {
      questions: "What is the name of the main character in the game 'The Legend of Zelda'?",
      a: "Link",
      b: "Mario",
      c: "Sonic",
      d: "Pikachu",
      ans: "ans1" 
    },
    {
        questions: "What was the first video game ever created?",
        a: "Pong",
        b: "Space Invaders",
        c: "Donkey Kong",
        d: "Pac-Man",
        ans: "ans1"
    },
    {
        questions: " What was the first video game console?",
        a: "Magnavox Odyssey",
        b: "Atari 2600",
        c: "ColecoVision",
        d: "Intellivision",
        ans: "ans1"
    },
    { questions: " What is the name of the protagonist in the game 'Half-Life'?",
    a: "Master Chief",
    b: "Gordon Freeman",
    c: "Marcus Fenix",
    d: "Solid Snake",
    ans: "ans2" 
    },
    { questions: "What is the name of the enemy in the game 'Tetris'?",
    a: " Blocks",
    b: "Ghosts",
    c: "Asteroids",
    d: "Goombas",
    ans: "ans1" 
    },
    {
        questions: " What is the name of the main character in the game 'Super Mario Bros'?",
        a: "Mario",
        b: " Sonic",
        c: "Link",
        d: " Pikachu",
        ans: "ans1"
    },
    {
        questions: "Who created the character Mario?",
        a: "Shigeru Miyamoto",
        b: " Hideo Kojima",
        c: "Yuji Naka",
        d: "Hideki Kamiya",
        ans: "ans1"
    },
    {
        questions: " What is the name of the enemy in the game 'Pac-Man'?",
        a: "Ghosts",
        b: "Goombas",
        c: "Bloopers",
        d: " Kirby",
        ans: "ans1"
    },
    {
        questions: "What is the name of the main character in the game 'Halo'?",
        a: "Master Chief",
        b: "Marcus Fenix",
        c: "Solid Snake",
        d: "Nathan Drake",
        ans: "ans1"
    },
    {
        questions: "What is the name of the main character in the game 'Final Fantasy'?",
        a: "Cloud",
        b: "Link",
        c: " Mario",
        d: "Pikachu",
        ans: "ans1"
    },
    {
        questions: " What is the name of the main character in the game 'Metal Gear Solid'? ",
        a: "Solid Snake",
        b: "Marcus Fenix",
        c: "Nathan Drake",
        d: "Lara Croft",
        ans: "ans1"
    },
    {
        questions: "What is the name of the main character in the game 'Tomb Raider'?",
        a: "Lara Croft",
        b: " Nathan Drake",
        c: "Marcus Fenix",
        d: "Solid Snake",
        ans: "ans1"
    },
    {
        questions: "What is the name of the main character in the game 'Resident Evil'?",
        a: "Leon S. Kennedy",
        b: "Jill Valentine",
        c: " Chris Redfield",
        d: "  Solid Snake",
        ans: "ans1"
    },
    {
        questions: "What is the name of the main character in the game 'Assassin's Creed'?",
        a: "Connor Kenway",
        b: "Altair",
        c: "Ezio Auditore",
        d: "Aiden Pearce",
        ans: "ans5"
    },
    {
        questions: "What is the name of the main character in the game 'The Witcher'?",
        a: "Kratos",
        b: "Geralt of Rivia",
        c: "Nathan Drake",
        d: "Solid Snake",
        ans: "ans2"
    },
    {
        questions: "What is the name of the main character in the game 'God of War'?",
        a: "Ezio Auditore",
        b: " Nathan Drake",
        c: "Solid Snake",
        d: "Kratos",
        ans: "ans4"
    },
    {
        questions: "What is the main protagonist in the game Grand Theft Auto?",
        a: "Tommy Vercetti",
        b: "CJ",
        c: "Niko Bellic",
        d: " Franklin Clinton",
        ans: "ans2"
    },
    {
        questions: "What year was the popular game Fortnite released?",
        a: " 2017",
        b: "2016",
        c: "2018",
        d: "2015",  
        ans: "ans1"
    },
    {
        questions: "What is the name of the villain in the game Bioshock?",
        a: "Atlas",
        b: "Jack",
        c: "Ryan",
        d: "Fontaine",
        ans: "ans3"
    },
    {
        questions: " Who is the main protagonist in the game 'The Last of Us'?",
        a: "Joel",
        b: "Ellie",
        c: "Tess",
        d: "Sam",
        ans: "ans1"
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
