let quizDB = [
    {
        questions: " What is the name of the traditional music and dance of Nepal?",
        a: "Bhangra",
        b: "Dandiya",
        c: "Dohori",
        d: "Ghoomar",
        ans: "ans3"
    },
    {
        questions: " What is the name of the traditional sport played in Nepal using bamboo sticks? ",
        a: "Polo",
        b: "Dandi biyo",
        c: "Archery",
        d: "Jangchung",
        ans: "ans2"
    },
    {
        questions: " What is the name of the traditional festival celebrated in Nepal during the full moon day in September or October?",
        a: "Dashain",
        b: "Tihar",
        c: "Teej",
        d: "Holi",
        ans: "ans1"
    },
    {
        questions: " What is the name of the traditional New Year celebrated in Nepal?",
        a: "Bikram Sambat",
        b: "AD",
        c: "Maghi",
        d: "Baishakhi",
        ans: "ans4"
    },
   
    {
        questions: " What is the name of the famous temple in Nepal dedicated to the Hindu god, Lord Shiva?",
        a: "Jagannath Temple",
        b: " Meenakshi Temple",
        c: "Pashupatinath Temple",
        d: " Muktinath Temple",
        ans: "ans3"
    },
    {
        questions: "What is the name of the traditional woven cloth made in Nepal?",
        a: "Banarasi Silk",
        b: "Pashmina",
        c: "Patola",
        d: "Dhaka ",
        ans: "ans4"
    },
    {
        questions: " What is the name of the famous lake located in Nepal near Mount Everest?",
        a: "Mansarovar Lake",
        b: "Phewa Lake",
        c: "Rara Lake",
        d: "Tilicho Lakei",
        ans: "ans4"
    },
    {
        questions: " What is the name of the national park in Nepal famous for one-horned rhinoceros?",
        a: "Chitwan National Park",
        b: "Langtang National Park",
        c: "Sagarmatha National Park",
        d: " Shey Phoksundo National Park",
        ans: "ans1"
    },
    {
        questions: "when was gautama buddha born?",
        a: "556 BC",
        b: "546 BC",
        c: " 564 BC",
        d: "544 BC",
        ans: "ans3"
    },
    {
        questions: " What is the name of the traditional dance form of Nepal performed during festivals and celebrations?",
        a: " Bhangra",
        b: "Gauna ",
        c: "Garba",
        d: "Ghoomar",
        ans: "ans2"
    },
    {
        questions: " What is the name of the traditional Nepalese festival celebrated to mark the end of the harvest season?",
        a: "Tihar",
        b: "Dashain",
        c: "Maghe Sankranti",
        d: "Holi  ",
        ans: "ans3"
    },
    {
        questions: " Which river is the major river in Nepal? ",
        a: "Ganges",
        b: "Indus",
        c: "Brahmaputra",
        d: " Yangtze",
        ans: "ans1"
    },
    {
        questions: " What is the name of the traditional Nepalese festival celebrated in honor of Hindu goddess Durga?",
        a: "Teej",
        b: " Dashain",
        c: "Tihar",
        d: "Janai Purnima",
        ans: "ans2"
    },
    {
        questions: " Which Nepalese king was responsible for the unification of modern-day Nepal?",
        a: "Prithvi Narayan Shah",
        b: "Birendra Bir Bikram Shah",
        c: "Gyanendra Bir Bikram Shah",
        d: "Mahendra Bir Bikram Shah",
        ans: "ans1"
    },
    {
        questions: " What is the name of the traditional dress worn by women in Nepal?",
        a: " Sari",
        b: "Lengha",
        c: "Kurta",
        d: "Daura Suruwal",
        ans: "ans1"
    },
    {
        questions: " What is the name of the traditional musical instrument widely used in Nepal?",
        a: " Sitar",
        b: "Tabla",
        c: " Sarod",
        d: "Madal",
        ans: "ans4"
    },
    {
        questions: " What is the main export product of Nepal?",
        a: "Rice",
        b: " Tea",
        c: "Carpets",
        d: "Apples",
        ans: "ans3"
    },
    {
        questions: "Which of the following is a famous trekking route in Nepal?",
        a: "Annapurna Trek",
        b: "Great Himalayan Trail",
        c: "Everest Base Camp Trek",
        d: "Zanskar Valley Trek",
        ans: "ans3"
    },
    {
        questions: " What type of government does Nepal have?",
        a: "Monarchy",
        b: "Republic",
        c: "Federal Democratic Republic",
        d: "Theocracy",
        ans: "ans3"
    },
    {
        questions: " What is the main industry in Nepal?",
        a: " Agriculture",
        b: " Manufacturing",
        c: "Tourism",
        d: "IT",
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
