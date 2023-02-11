let  quizDB = [
    {
      questions: "What is the name of the Greek god of the sky and thunder?",
      a: "Hades",
      b: "Zeus",
      c: "Apollo",
      d: "Hermes",
      ans: "ans2" 
    },
    {
        questions: "Who is the Norse god of war and death?",
        a: "Thor",
        b: "Odin",
        c: "Loki",
        d: "Baldur",
        ans: "ans2"
    },
    {
        questions: "What is the name of Lord Vishnu's mount",
        a: "Garuda",
        b: "Mandhata",
        c: "Kamadhenu",
        d: " Uchai",
        ans: "ans1"
    },
    { questions: "Who is considered to be the Hindu God of creation?",
    a: " Brahma",
    b: "Vishnu",
    c: "Shiva",
    d: "Parvati",
    ans: "ans1" 
    },
    { questions: "Who is considered to be the Hindu God of destruction?",
    a: "Brahma",
    b: "Vishnu",
    c: "Shiva",
    d: " Parvati",
    ans: "ans3" 
    },
    {
        questions: "Which Hindu Goddess is known as the consort of Lord Vishnu?",
        a: "Kali",
        b: "Durga",
        c: "Saraswati",
        d: "Lakshmi",
        ans: "ans4"
    },
    {
        questions: "Who is considered as the Hindu God of wealth and prosperity?",
        a: "Brahma",
        b: "Vishnu",
        c: "Shiva",
        d: "Kubera",
        ans: "ans2"
    },
    {
        questions: "What is the name of Lord Rama's bow?",
        a: "Gada",
        b: "Dhanush",
        c: "Trishula",
        d: "Sudarshana Chakra",
        ans: "ans2"
    },
    {
        questions: "Who is the Hindu God of love and passion?",
        a: "Kama",
        b: "Kali",
        c: " Ganesha",
        d: "Hanuman",
        ans: "ans1"
    },
    {
        questions: "Who is the Hindu God of knowledge and wisdom?",
        a: "Saraswati",
        b: "Lakshmi",
        c: "Parvati",
        d: "Kali",
        ans: "ans1"
    },
    {
        questions: "What is the name of Lord Shiva's wife?",
        a: "Parvati",
        b: "Kali",
        c: "Durga",
        d: " Lakshmi",
        ans: "ans1"
    },
    {
        questions: "What is the name of Lord Vishnu's sword?",
        a: "Trishula",
        b: "Sudarshana Chakra",
        c: "Gada",
        d: "Nandaka",
        ans: "ans4"
    },
    {
        questions: "Who is the Hindu God of fire?",
        a: "Agni",
        b: "Surya",
        c: "Varuna",
        d: " Shiva",
        ans: "ans1"
    },
    {
        questions: "Who is the Egyptian goddess of motherhood and fertility?",
        a: "Bastet",
        b: " Isis",
        c: "Hathor",
        d: "Neith",
        ans: "ans2"
    },
    {
        questions: "What is the name of the Greek god of the underworld and the dead?",
        a: "Hermes",
        b: "Zeus",
        c: "Hades",
        d: "Poseidon",
        ans: "ans3"
    },
    {
        questions: " Who is the Norse god of mischief and trickery?",
        a: "Odin",
        b: "Loki",
        c: "Thor",
        d: "Baldur",
        ans: "ans2"
    },
    {
        questions: "What is the name of the Roman goddess of the moon and magic?",
        a: "Juno",
        b: "Venus",
        c: "Diana",
        d: "Ceres",
        ans: "ans3"
    },
    {
        questions: "Who is the Egyptian god of the sun and light?",
        a: "Anubis",
        b: "Horus",
        c: "Ra",
        d: "Set",
        ans: "ans3"
    },
    {
        questions: "Who is the Greek goddess of wisdom and warfare?",
        a: "Athena",
        b: "Aphrodite",
        c: "Hera",
        d: "Demeter",
        ans: "ans1"
    },
    {
        questions: "Who is the Egyptian goddess of death and the afterlife?",
        a: "Nephthys",
        b: "Set",
        c: "Anubis",
        d: " Isis",
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
