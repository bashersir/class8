//Question bank
var questionBank= [
    {
        question : '(a) River gypsies are the people who -----.',
        option : ['stay permanently at a place','travel from one place to another for pleasure','move from one place to another by boat to earn their livelihood','roam around on horse-back'],
        answer : 'move from one place to another by boat to earn their livelihood'
    },
    {
        question : 'Where does most renewable energy come from?',
        option : ['from the moon','from the sun','from the earth','from the ocean'],
        answer : 'from the sun'
    },
    {
        question : "What does the phrase 'run out' mean in the above passage?",
        option : ['finish','start','end','begin'],
        answer : 'finish'
    },
    {
        question : '---is not renewable source of energy.',
        option : ['sun','moon','hydro-carbon','sea'],
        answer : 'hydro-carbon'
    },
    {
        question : 'The burning of ---- contaminates our environment.',
        option : ['oil','coal','gas','all the options'],
        answer : 'all the options'
    },
    {
        question : 'Modern day wind turbines produce---',
        option : ['steam','vapour','flow','electrcity'],
        answer : 'electrcity'
    },
    {
        question : 'What is geothermal energy?',
        option : ['heat from deep within the earth','heat from deep within the sky','flows downhill','hydroelectric energy'],
        answer : 'heat from deep within the earth'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();