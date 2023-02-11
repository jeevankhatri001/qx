let quizDB = [
    {
        questions: "What is the smallest particle that makes up an element?",
        a: "Neutron",
        b: "Proton",
        c: "Electron",
        d: "Quark",
        ans: "ans3"
    },
    {
        questions: " What is the study of the behavior and interactions of matter and energy?",
        a: "Chemistry",
        b: "Physics",
        c: "Biology",
        d: "Geology",
        ans: "ans2"
    },
    {
        questions: " What is the process by which cells divide and replicate?",
        a: "Fermentation",
        b: "Mitosis",
        c: "Photosynthesis",
        d: "Respiration",
        ans: "ans2"
    },
    {
        questions: "What is the study of living things and their relationships with each other and their environment?",
        a: "Chemistry",
        b: "Physics",
        c: "Biology",
        d: "Geology",
        ans: "ans3"
    },
    {
        questions: "What is the process by which cells release energy from glucose?",
        a: " Photosynthesis",
        b: "Fermentation",
        c: "Mitosis",
        d: "Respiration",
        ans: "ans4"
    },
    {
        questions: "What is the study of the Earth's physical structure, composition, and processes?",
        a: "Chemistry",
        b: "Physics",
        c: "Biology",
        d: "Geology",
        ans: "ans4"
    },
    {
        questions: " What is the branch of science that deals with the study of chemicals and their interactions?",
        a: "Chemistry",
        b: "Physics",
        c: "Biology",
        d: "Geology",
        ans: "ans1"
    },
    {
        questions: " What is the process by which plants and some bacteria convert light energy into chemical energy?",
        a: " Photosynthesis",
        b: "Fermentation",
        c: "Mitosis",
        d: "Respiration",
        ans: "ans1"
    },
    {
        questions: "What is the study of the universe and its structure and behavior?",
        a: " Astronomy",
        b: "Physics",
        c: "Biology",
        d: " Geology",
        ans: "ans1"
    },
    {
        questions: " What is the process by which cells produce energy through anaerobic respiration?",
        a: " Photosynthesis",
        b: "Fermentation",
        c: "Mitosis",
        d: "Respiration",
        ans: "ans2"
    },
    {
        questions: "What is the study of the living organisms and their interactions with each other and their environment?",
        a: "Ecology",
        b: "Physics",
        c: "Biology",
        d: " Geology",
        ans: "ans1"
    },
    {
        questions: " What is the main component of air?",
        a: "Nitrogen",
        b: "Carbon",
        c: "Oxygen",
        d: "Hydrogen",
        ans: "ans1"
    },
    {
        questions: " What is the process that powers the sun?",
        a: "Nuclear Fusion",
        b: "Nuclear Fission",
        c: " Solar Energy",
        d: " Solar Power",
        ans: "ans1"
    },
    {
        questions: " What is the name of the longest bone in the human body?",
        a: "Thighbone",
        b: "Shinbone",
        c: "Fibula",
        d: "Femur",
        ans: "ans4"
    },
    {
        questions: " What is the term for the study of fossils?",
        a: "Geology",
        b: "Paleontology",
        c: "Archaeology",
        d: "Zoology",
        ans: "ans2"
    },
    {
        questions: " What is the smallest unit of matter?",
        a: "Atom",
        b: "Molecule",
        c: "Cell",
        d: "Proton",
        ans: "ans1"
    },
    {
        questions: " What is the name of the first person to orbit the Earth?",
        a: "Neil Armstrong",
        b: "Yuri Gagarin",
        c: "Buzz Aldrin",
        d: "Sally Ride",
        ans: "ans2"
    },
    {
        questions: " What was the first species of dinosaurs to be named and described scientifically?",
        a: "Tyrannosaurus rex",
        b: "Stegosaurus",
        c: "Megalosaurus",
        d: "Iguanodon",
        ans: "ans3"
    },
    {
        questions: "What is the process by which bones become fossils?",
        a: "Mummification",
        b: "Erosion",
        c: "Permineralization",
        d: "Decomposition",
        ans: "ans3"
    },
    {
        questions: "What is the primary function of ribosomes in a cell?",
        a: " To store DNA",
        b: " To produce energy ",
        c: "To synthesize proteins",
        d: "To regulate the cell cycle",
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

    let questionList = newQuizDBCopy[questionCount];

    questions.innerHTML = questionList.questions;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



}



loadQuestion();

let getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
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

    if (checkedAnswer === newQuizDBCopy[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < newQuizDBCopy.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `
        <h3>You Scored ${score}/${newQuizDBCopy.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

})
