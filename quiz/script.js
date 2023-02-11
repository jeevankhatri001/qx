let  quizDB = [
    {
      questions: " What is the average temperature on the surface of Venus?",
      a: "450°C",
      b: "470°C",
      c: "500°C",
      d: "370°C",
      ans: "ans2" 
    },
    {
        questions: " Which planet has the shortest day?",
        a: "Venus",
        b: "Mars",
        c: "Mercury",
        d: "Uranus",
        ans: "ans3"
    },
    {
        questions: " What is the largest moon in our solar system?",
        a: "Earth's moon",
        b: "Saturn's moon, Titan",
        c: "Jupiter's moon, Ganymede",
        d: "Neptune's moon, Triton ",
        ans: "ans3"
    },
    { questions: " How many known dwarf planets are in our solar system?",
    a: "1",
    b: "2",
    c: "5",
    d: "7",
    ans: "ans3" 
    },
    {
        questions: " What is the name of the closest known star to our sun?",
        a: " Proxima Centauri",
        b: "Alpha Centauri",
        c: "Sirius",
        d: "Vega",
        ans: "ans1"
    },
    {
        questions: " What is the name of the black hole in the center of the Milky Way galaxy?",
        a: "Cygnus X-1",
        b: " Sagittarius A",
        c: "V616 Monocerotis",
        d: "GRB 090423",
        ans: "ans2"
    },
    {
        questions: " What is the most abundant gas in the universe?",
        a: "Oxygen",
        b: "Carbon dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "ans4"
    },
    {
        questions: " What is the name of the first human-made object to leave our solar system?",
        a: "Voyager 1",
        b: "Pioneer 10",
        c: "New Horizons",
        d: "Rosetta",
        ans: "ans1"
    },
    {
        questions: " How many planets in our solar system have rings?",
        a: " 0",
        b: "1",
        c: "2",
        d: "4",
        ans: "ans4"
    },
    {
        questions: " What is the name of the largest volcano in our solar system?",
        a: "Olympus Mons",
        b: "Mauna Loa",
        c: "Tamu Massif",
        d: "Kilauea",
        ans: "ans1"
    },
    {
        questions: " What is the name of the most distant known object in our solar system?",
        a: "Eris",
        b: "Sedna",
        c: "2012 VP113",
        d: "Makemake",
        ans: "ans2"
    },
    {
        questions: " What is the name of the first space shuttle that was retired from service?",
        a: "Challenger",
        b: "Atlantis",
        c: "Discovery",
        d: "Endeavour",
        ans: "ans2"
    },
    {
        questions: " What is the name of the first country to launch a satellite into space?",
        a: "United States",
        b: "Soviet Union",
        c: " China",
        d: " Japan",
        ans: "ans2"
    },
    {
        questions: " How many moons does Mars have?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        ans: "ans3"
    },
    {
        questions: " What causes the moon to appear larger when it is near the horizon?",
        a: "The moon is closer to the Earth",
        b: "he Earth's atmosphere magnifies it",
        c: "The moon is farther away from the Earth",
        d: " It is an optical illusion",
        ans: "ans2"
    },
    {
        questions: " What is the  known largest  structure in the universe?",
        a: "The Local Cluster",
        b: "The Hercules-Corona Borealis Great Wall",
        c: " The Sloan Great Wall",
        d: "The Milky Way Galaxy",
        ans: "ans2"
    },
    {
        questions: " What was the first human-made object to reach interplanetary space?",
        a: "The Moon lander",
        b: "The Space Shuttle",
        c: "The Viking 1 probe",
        d: "The Sputnik satellite",
        ans: "ans4"
    },
    {
        questions: " What is the Kuiper Belt?",
        a: "A region of asteroids surrounding the Earth",
        b: "A field of dark matter surrounding the Milky Way",
        c: "A region of comets surrounding the Sun",
        d: "A cluster of stars in the Local Grou",
        ans: "ans3"
    },
    {
        questions: " What is a black hole?",
        a: "An object with an extremely strong magnetic field",
        b: "An area of space where gravity is so strong that nothing can escape",
        c: "A planet made of dark matter",
        d: "A highly luminous star",
        ans: "ans2"
    },
    {
        questions: " What is the name of the first human to walk on the moon?",
        a: "  Neil Armstrong",
        b: " Buzz Aldrin",
        c: "Michael Collins",
        d: "Fred Haise",
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
