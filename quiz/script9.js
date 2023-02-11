let  quizDB = [
    {
      questions: " What is the capital of Tuvalu?",
      a: "Funafuti",
      b: "Vaiaku",
      c: "Nukufetau",
      d: "Nanumea",
      ans: "ans1" 
    },
    {
        questions: " What is the largest living species of bird by wingspan?",
        a: "Ostrich",
        b: "Andean Condor",
        c: "Bald Eagle",
        d: "Albatross",
        ans: "ans4"
    },
    {
        questions: " What is the smallest country in the world by land area?",
        a: "Vatican City",
        b: " Nauru",
        c: "Tuvalu",
        d: " San Marino ",
        ans: "ans1"
    },
    { questions: " What is the world's longest river?",
    a: " Nile",
    b: "Amazon",
    c: "Yangtze",
    d: " Congo",
    ans: "ans1" 
    },
    {
        questions: " What is the highest mountain in the solar system?",
        a: "Olympus Mons",
        b: "Mauna Loa",
        c: "Mount Everest",
        d: "Kilimanjaro",
        ans: "ans1"
    },
    {
        questions: " What is the deepest point in the ocean?",
        a: "Challenger Deep",
        b: " Mariana Trench",
        c: "Tonga Trench",
        d: "Java Trench",
        ans: "ans2"
    },
    {
        questions: " What is the smallest independent state by population?",
        a: "Nauru",
        b: "Vatican City",
        c: "San Marino",
        d: " Monaco",
        ans: "ans2"
    },
    {
        questions: " What is the longest fence in the world?",
        a: "Dingo Fence",
        b: "Great Wall of China",
        c: "Hadrian's Wall",
        d: "Snake Fence",
        ans: "ans2"
    },
    {
        questions: " What is the smallest independent state by land area?",
        a: " Nauru",
        b: "Tuvalu",
        c: "Monaco",
        d: "San Marino",
        ans: "ans4"
    },
    {
        questions: " What is the largest desert in the world by area?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Antarctic Desert",
        d: "Kalahari Desert",
        ans: "ans3"
    },
    {
        questions: " What is the longest railway line in the world?",
        a: "Trans-Siberian Railway",
        b: "Trans-Canadian Railway",
        c: "Beijing-Guangzhou Railway",
        d: "Eurasian Land Bridge",
        ans: "ans1"
    },
    {
        questions: " What is the largest lake in the world by area?",
        a: "Caspian Sea",
        b: "Superior",
        c: "Victoria",
        d: "Tanganyika",
        ans: "ans1"
    },
    {
        questions: " What is the largest country in the world by land area?",
        a: "Canada",
        b: "Russia",
        c: " China",
        d: " United States",
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
        questions: " What is the deepest canyon in the world?",
        a: "Colca Canyon",
        b: "Grand Canyon",
        c: "Indus Gorge",
        d: "Kali Gandaki Gorge",
        ans: "ans2"
    },
    {
        questions: " What is the longest coastline in the world?",
        a: "Canada",
        b: "Indonesia",
        c: "Australia",
        d: "Russia",
        ans: "ans1"
    },
    {
        questions: " What is the largest island in the world?",
        a: "Greenland",
        b: "Borneo",
        c: "Madagascar",
        d: "Honshu",
        ans: "ans1"
    },
    {
        questions: " What is the largest coral reef system in the world?",
        a: " Great Barrier Reef",
        b: "Red Sea Reef",
        c: "Mesoamerican Reef",
        d: " New Caledonian Barrier Reef",
        ans: "ans1"
    },
    {
        questions: " What is the largest rainforest in the world?",
        a: "Amazon Rainforest",
        b: " Congo Rainforest",
        c: "Daintree Rainforest ",
        d: "Sundarbans",
        ans: "ans1"
    },
    {
        questions: " What is the longest river in Asia?",
        a: " Yangtze",
        b: " Ganges",
        c: "Yellow River",
        d: "Mekong",
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
