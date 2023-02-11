let  quizDB = [
    {
      questions: "What was the main cause of World War I?",
      a: "Economic competition between nations",
      b: "Nationalism",
      c: "The assassination of Archduke Franz Ferdinand",
      d: "Technological advancements in military",
      ans: "ans3" 
    },
    {
        questions: "What was the main outcome of the Battle of Gettysburg in the American Civil War?",
        a: "Union victory",
        b: "Confederate victory",
        c: "Draw",
        d: " No clear outcome",
        ans: "ans1"
    },
    {
        questions: "Who was the leader of the Soviet Union during World War II?",
        a: "Stalin",
        b: "Churchill",
        c: "Roosevelt",
        d: " Hitler",
        ans: "ans1"
    },
    { questions: "What was the main cause of the Spanish-American War in 1898?",
    a: " Competition for colonial territories",
    b: "Economic tensions",
    c: "Religious differences",
    d: "The sinking of the USS Maine",
    ans: "ans4" 
    },
    { questions: "Who was the leader of Germany during World War II?",
    a: " Churchill",
    b: "Roosevelt",
    c: "Hitler",
    d: "Stalin",
    ans: "ans3" 
    },
    {
        questions: "What was the outcome of the Battle of Waterloo in 1815?",
        a: "Napoleon victory",
        b: "British victory",
        c: "Draw",
        d: "French victory",
        ans: "ans2"
    },
    {
        questions: "Who led the American army in the Battle of Saratoga in 1777?",
        a: " George Washington",
        b: "Nathan Hale",
        c: "Horatio Gates",
        d: "Benedict Arnold",
        ans: "ans3"
    },
    {
        questions: "Who led the British army in the Battle of Bunker Hill in 1775?",
        a: "General Cornwallis",
        b: "General Howe",
        c: "General Washington",
        d: "General Gage",
        ans: "ans4"
    },
    {
        questions: "What was the main outcome of the Battle of Leipzig in 1813?",
        a: "French victory",
        b: "Russian victory",
        c: " Allied victory",
        d: " Draw",
        ans: "ans3"
    },
    {
        questions: "Who was the leader of the Confederacy during the American Civil War?",
        a: "Abraham Lincoln",
        b: "Ulysses S. Grant",
        c: "Jefferson Davis",
        d: "Robert E. Lee",
        ans: "ans3"
    },
    {
        questions: "What was the main cause of World War II?",
        a: "Competition for colonial territories ",
        b: "The Treaty of Versailles",
        c: "The invasion of Poland by Germany",
        d: "Technological advancements in military",
        ans: "ans3"
    },
    {
        questions: " Who was the leader of the United States during the Gulf War in 1991",
        a: "George H.W. Bush",
        b: "Bill Clinton",
        c: "George W. Bush",
        d: "Barack Obama",
        ans: "ans1"
    },
    {
        questions: "What was the main outcome of the Battle of Austerlitz in 1805?",
        a: "French victory",
        b: "Russian victory",
        c: "Austrian victory",
        d: "Draw",
        ans: "ans1"
    },
    {
        questions: "Who led the Confederate army in the Battle of Antietam in 1862?",
        a: "Robert E. Lee",
        b: "George B. McClellan",
        c: "Ulysses S. Grant",
        d: "William T. Sherman",
        ans: "ans1"
    },
    {
        questions: "What was the earliest civilization in Mesopotamia?",
        a: "Egyptian",
        b: "Indus Valley",
        c: " Sumerian",
        d: "Akkadian",
        ans: "ans3"
    },
    {
        questions: "Who founded the city of Rome?",
        a: "Augustus",
        b: "Julius Caesar",
        c: "Romulus and Remus",
        d: "Nero",
        ans: "ans2"
    },
    {
        questions: "Which civilization was known for their advanced system of writing?",
        a: " Mayan",
        b: "Greek",
        c: " Egyptian",
        d: "Mesopotamian",
        ans: "ans1"
    },
    {
        questions: "Which civilization is known for inventing gunpowder?",
        a: "Chinese",
        b: "Indian",
        c: "Greek",
        d: "Roman",
        ans: "ans1"
    },
    {
        questions: "Who was the first Pharaoh of Ancient Egypt?",
        a: "Cleopatra",
        b: "Tutankhamun",
        c: "Ramesses II",
        d: "Menes",
        ans: "ans4"
    },
    {
        questions: "Who was the founder of Buddhism",
        a: "Siddhartha Gautama",
        b: "Confucius",
        c: "Lao Tzu",
        d: "Sun Tzu",
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
