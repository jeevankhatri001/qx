let  quizDB = [
    {
      questions: " Who wrote the play `Romeo and Juliet`?",
      a: "William Shakespeare",
      b: "Jane Austen",
      c: "Charles Dickens",
      d: "Emily Bronte",
      ans: "ans1" 
    },
    {
        questions: " What is the name of the protagonist in `To Kill a Mockingbird`?",
        a: "Scout",
        b: "Holden",
        c: "Pip",
        d: "Atticus ",
        ans: "ans1"
    },
    {
        questions: " Who wrote the novel `Moby Dick`?",
        a: "Nathaniel Hawthorne",
        b: "Edgar Allan Poe",
        c: "Mark Twain",
        d: " Herman Melville ",
        ans: "ans4"
    },
    { questions: "Who wrote `One Hundred Years of Solitude`?",
    a: "Julio Cortázar",
    b: "Gabriel Garcia Marquez",
    c: "Jorge Luis Borges",
    d: "Mario Vargas Llosa",
    ans: "ans2" 
    },
    { questions: " What is the name of the main character in the `The Great Gatsby`?",
    a: "Jay Gatsby",
    b: " Holden Caulfield",
    c: "Oliver Twist",
    d: "Huckleberry Finn",
    ans: "ans1" 
    },
    {
        questions: "Who wrote the novel 'Pride and Prejudice'?",
        a: "Jane Austen",
        b: " Charles Dickens",
        c: "William Shakespeare",
        d: "Emily Bronte",
        ans: "ans1"
    },
    {
        questions: "What is the genre of the poem 'Ode to a Nightingale'?",
        a: " Epic",
        b: "Lyric ",
        c: "Sonnet",
        d: " Elegy",
        ans: "ans2"
    },
    {
        questions: "Who wrote the play 'Hamlet'?",
        a: "William Shakespeare",
        b: "John Milton",
        c: "Christopher Marlowe",
        d: " Ben Jonson",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel 'Wuthering Heights'?",
        a: " Emily Bronte",
        b: " Jane Austen",
        c: "Charlotte Bronte",
        d: "Louisa May Alcott",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel' Great Expectations'?",
        a: "Charles Dickens",
        b: " Jane Austen",
        c: "Emily Bronte",
        d: "George Eliot",
        ans: "ans1"
    },
    {
        questions: " Who wrote the poem 'The Waste Land'?",
        a: "T.S. Eliot",
        b: "W.H. Auden",
        c: " Dylan Thomas",
        d: "Robert Frost",
        ans: "ans1"
    },
    {
        questions: "Who wrote the poem 'The Road Not Taken'?",
        a: "Robert Frost",
        b: "Walt Whitman",
        c: "VEmily Dickinson",
        d: " Percy Bysshe Shelley",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel 'To Kill a Mockingbird'? ",
        a: "Harper Lee",
        b: "Ernest Hemingway",
        c: " William Faulkner",
        d: "John Steinbeck",
        ans: "ans1"
    },
    {
        questions: "Who wrote the play 'A Midsummer Night's Dream'?",
        a: "William Shakespeare",
        b: "Christopher Marlowe",
        c: "Ben Jonson",
        d: "John Webster",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel 'Frankenstein'?",
        a: "Mary Shelley",
        b: "Charlotte Bronte",
        c: "Jane Austen",
        d: "Louisa May Alcott",
        ans: "ans1"
    },
    {
        questions: "Who wrote the poem 'Dover Beach'?",
        a: "T.S. Eliot",
        b: "W.H. Auden",
        c: "Matthew Arnold",
        d: " Robert Frost",
        ans: "ans3"
    },
    {
        questions: " Who wrote the novel 'Heart of Darkness'?",
        a: "Joseph Conrad",
        b: "Fyodor Dostoevsky",
        c: " Leo Tolstoy",
        d: "Gustave Flaubert",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel 'Wuthering Heights'?",
        a: "Jane Austen",
        b: "Charlotte Bronte",
        c: "Emily Bronte",
        d: "Anne Bronte",
        ans: "ans3"
    },
    {
        questions: " What is the title of the poem that begins with the line 'I wandered lonely as a cloud'?",
        a: "'I Wandered Lonely as a Cloud'",
        b: " 'Daffodils'",
        c: "'She Walks in Beauty'",
        d: "'To His Coy Mistress'",
        ans: "ans1"
    },
    {
        questions: "Who wrote the novel 'The Picture of Dorian Gray'?",
        a: "Oscar Wilde",
        b: "George Eliot",
        c: " Jane Austen",
        d: "Virginia Woolf",
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
