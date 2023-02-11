let  quizDB = [
    {
      questions: " Who is the all-time leading scorer in the NBA?",
      a: "Michael Jordan",
      b: "LeBron James",
      c: "Kobe Bryant",
      d: "Kareem Abdul-Jabbar",
      ans: "ans4" 
    },
    {
        questions: " Who has the record for the most home runs in a single season in Major League Baseball?",
        a: "Babe Ruth",
        b: "Barry Bonds",
        c: "Hank Aaron",
        d: "Mark McGwire",
        ans: "ans2"
    },
    {
        questions: " Who is the fastest sprinter in the history of the Olympic Games?",
        a: "Usain Bolt",
        b: "Carl Lewis",
        c: " Maurice Greene",
        d: "Tommie Smith",
        ans: "ans1"
    },
    { questions: "Who is the youngest Grand Slam winner in tennis history?",
    a: "Monica Seles",
    b: "Martina Hingis",
    c: "Tracy Austin",
    d: " Michael Chang",
    ans: "ans4" 
    },
    { questions: "Who won the most gold medals in a single Summer Olympics?",
    a: "Carl Lewis",
    b: "Michael Phelps",
    c: "Paavo Nurmi",
    d: "Mark Spitz",
    ans: "ans2" 
    },
    {
        questions: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        a: "Pele",
        b: "Miroslav Klose",
        c: "Just Fontaine",
        d: "Gerd Muller",
        ans: "ans4"
    },
    {
        questions: "Who has the most Grand Slam titles in women's tennis?",
        a: "Margaret Court",
        b: "Chris Evert",
        c: "Martina Navratilova",
        d: " Serena Williams",
        ans: "ans4"
    },
    {
        questions: "Who won the first ever Masters golf tournament?",
        a: "Sam Snead",
        b: "Arnold Palme",
        c: "Byron Nelson",
        d: "Horton Smith",
        ans: "ans4"
    },
    {
        questions: "Who is the only player to have won six Super Bowls as a starting quarterback?",
        a: "Tom Brady",
        b: "Joe Montana",
        c: " Terry Bradshaw",
        d: "Brett Favre",
        ans: "ans1"
    },
    {
        questions: "Who is the only team to have won the World Cup three times in a row?",
        a: "Brazil",
        b: "Germany",
        c: "Italy",
        d: " Uruguay",
        ans: "ans1"
    },
    {
        questions: "Who holds the record for the most gold medals won in a single Summer Olympics by a country?",
        a: "USA",
        b: "Soviet Union",
        c: " Germany",
        d: "Great Britain",
        ans: "ans1"
    },
    {
        questions: "Who won the first ever FIFA World Cup?",
        a: "Brazil",
        b: " Uruguay",
        c: "Argentina",
        d: "Italy",
        ans: "ans2"
    },
    {
        questions: "Who holds the record for the most Grand Slam singles titles in tennis?",
        a: "Canada",
        b: "Russia",
        c: " China",
        d: " United States",
        ans: "ans2"
    },
    {
        questions: " Who holds the record for the most Grand Slam singles titles in tennis?",
        a: "Roger Federer",
        b: "Pete Sampras",
        c: " Rafael Nadal",
        d: "Novak Djokovic",
        ans: "ans3"
    },
    {
        questions: " Who holds the record for the most wins in a single NASCAR Cup Series season?",
        a: " Richard Petty",
        b: "Dale Earnhardt Sr.",
        c: "Jimmie Johnson",
        d: "Jeff Gordon",
        ans: "ans1"
    },
    {
        questions: "Who was the first female to win an Olympic medal in a sport other than figure skating or gymnastics?",
        a: "Babe Didrikson Zaharias",
        b: "Fanny Blankers-Koen",
        c: "Althea Gibson",
        d: "Nadia Comăneci",
        ans: "ans4"
    },
    {
        questions: " Who was the first African-American to win the Tour de France?",
        a: "Greg LeMond",
        b: "Miguel Indurain",
        c: "Eddy Merckx",
        d: "Yohann Gene",
        ans: "ans4"
    },
    {
        questions: " What was the first sport to be included in the Summer Olympics in 1896?",
        a: "Marathon",
        b: "Swimming",
        c: "Tennis",
        d: "Archery",
        ans: "ans1"
    },
    {
        questions: " Who was the first person to run a mile in under 4 minutes?",
        a: "Roger Bannister",
        b: "  Steve Prefontaine",
        c: "Emil Zatopek ",
        d: "Paavo Nurmi",
        ans: "ans1"
    },
    {
        questions: "What is the maximum number of sets in a professional tennis match",
        a: " 3",
        b: " 5",
        c: "7",
        d: "9 ",
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
