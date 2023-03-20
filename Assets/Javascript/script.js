
    
var questionB = [
        {
            qust : "What is the name of the president of the United States?",
            choice : ["Trump" , "Obama" , "Biden", "Karzi"],
            answer : "Biden"
        },

        {
            qust : "What is the most famous city of Colorado?",
            choice : ['Aurora' , 'Denver' , 'Englewood', 'New York'],
            answer : "Denver"
        },

        {
            qust : "What is the color of milk?",
            choice : ['white' , 'yellow' , 'black', 'red'],
            answer : "white"
        },

        {
            qust : "What is the date of independance of Afghanistan?",
            choice : ['1980' , '1960' , '1919' , 'none of the above'],
            answer : "1919"
        },

        


    ]

    


var qust = document.getElementById('qTittle');
var cntr = document.getElementById('container');
var scorecard= document.getElementById('scoreBrd'); // check this...
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var next= document.querySelector('.nextbtn');
var pnts= document.getElementById('qScore');
var span= document.querySelectorAll('span');
var i=0; var score= 0;










// This is the Function which starts the Quiz.
function stQuiz() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background='none';
        
    }

    qust.innerHTML = 'Question-' + (i+1) + ": " + questionB[i].qust
    choice0.innerHTML = questionB[i].choice[0];
    choice1.innerHTML = questionB[i].choice[1];
    choice2.innerHTML = questionB[i].choice[2];
    choice3.innerHTML = questionB[i].choice[3];
    txtStmt.innerHTML = "Question"+' '+(i+1)+' '+'of'+' '+questionB.length;
}

// This is calculating the exam score.
function calcltScore(e){
    if(e.innerHTML===questionB[i].answer && score<questionB.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'yellow';
    }
    else{
        document.getElementById(e.id).style.background= 'pink';
    }
    setTimeout(set_N_Qustion,500);
}








// This is the Function which moves to the next question.
function set_N_Qustion() {
    if(i<questionB.length-1)
    {
        i = i+1;
        stQuiz();
    }
    else{
        pnts.innerHTML= score+ '/'+ questionB.length;
        cntr.style.display= 'none';
        scoreBrd.style.display= 'block'
    }
}

// Now to Click Button Events
next.addEventListener('click', set_N_Qustion)


// To return back to the Quiz
function bkToQuiz(){
    location.reload();
}




// This is the Function which checks that Answer.
function select_Answer() {
    var answerBn= document.getElementById('answerB');
    var answers= document.getElementById('qAns');
    answerBn.style.display= 'block';
    scoreBrd.style.display= 'none';

    for(var a=0; a<questionB.length; a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionB[a].answer;
        answers.appendChild(list);
    }
}

stQuiz();