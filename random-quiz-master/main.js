var questions = [
/*questions01*/
    {
        question: "いつ使いたい？",
        images: {
            1: "google.com",
            2: "24j.co.jp",
            3: "test"
        },
        choices: {
            1: "オフィスなど普段使いで",
            2: "友人と過ごす休日に",
            3: "特別な人とのデートに"
        },
        
    },
    /*questions02*/
    {
        question: "言われて嬉しいのは？",
         images: {
            1: "vnexpress.vn",
            2: "txt",
            3: "aaaa"
        },
        choices: {
            1: "可愛い",
            2: "綺麗"
        },
        
    },

    /*questions03*/
    {
        question: "なりたい雰囲気は？",
        choices: {
            1: "可憐で甘い雰囲気",
            2: "自然体で抜け感のある雰囲気",
            3: "洗練された大人な雰囲気"
        },
        
    },
    /*questions04*/
    {
        question: "あなたのヘアスタイルは？",
        choices: {
            1: "ショート",
            2: "ミディアム",
            3: "ロング"
        },
        
    },
    /*questions05*/
    {
        question: "よく身に着ける色は？",
        choices: {
            1: "モノトーン",
            2: "パステル"
        },
        
    }
];


function quiz(){
    // stores HTML output
    var output = [];

    // build HTML for each question
    questions.forEach((currentQuestion, questionNumber) => { 
        // store list of answer choices
        var choices = [];
        var choicesImg= [];

        // for each answer
        for(letter in currentQuestion.choices) {

            // add HTML radio button
            choices.push(
                // template literals
                `<label><input type="radio" name="question${questionNumber}" value="${letter}">
                    <span class="customRadio"></span>
                        ${letter} :
                        ${currentQuestion.choices[letter]}
                </label>`

            );

        }

        for(imagesNum in currentQuestion.images){
            choicesImg.push(
                `<div>
                    ${currentQuestion.images[imagesNum]}
                </div>`
            )
        }

        // add this question and answer to output
        output.push(
            `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="choicesImg">${choicesImg.join("")}</div>
                <div class="choices">
                    ${choices.join("")}
                </div>

            </div>`
             // 'join' expression takes list of answers and puts them together in one string
        );
    });
    // combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
}

function results(){

    var arrayChecked = [];
    // fresh ル シェーブルフォイユ
    var product01 = ['11111','11112','11121','11122','11211','11221',
                    '12111','12111','12232','21211','21212',
                    '21221','21222','31211','31212','31222'];
    
    //relax ラ エルブ
    var product02 = ['11131','11132','11212','11222','11231',
                    '11232','12121','12122','12131','12132','12212','12222','21231',
                    '21232','21232','22211','22211','22221','22222','31221',
                    '31231','31232','32112','32122','32132','32211','32212',
                    '32221','32222','32231','32232'];

    //cool ル トレーフル
    var product03 = ['12211','12221','12231','12311',
                    '12312','12321','12322','12331','12332',
                    '22311','22321','22331']

    //sweet ラ　フレーズ
    var product04 = ['21111','21112','21121','21122','21131',
                    '21132','31111','31112','31121','31122','31131','31132']

    //elegant ラ ローズ ブランシュ
    var product05 = ['22111','22112','22121','22122','22131','22132',
                    '22231','22232','22312','22322','22332','32111',
                    '32121','32131','32311','32312','32321','32322','32331']

    //sexy ラ レーヴル
    var product06 = ['32332']

    
    //gather answer containers from quiz
    var answerContainers = quizContainer.querySelectorAll(".choices");

    // keep track of user's answers
    var numCorrect = 0;

    // for each question 
    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer 
        var answerContainer = answerContainers[questionNumber];
        // selects which radio button has been checked
        var selector = `input[name=question${questionNumber}]:checked`;
        // userAnswer is which button has been checked
        // {} empty object for if user didn't select answer
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        /*console.log(userAnswer);*/
        arrayChecked.push(userAnswer)

        var dataChecked = arrayChecked;

        var dataCheckedJoin = dataChecked.join('')
        //console.log(dataCheckedJoin);

        /*if(dataCheckedJoin === '11111'){
            console.log('aaa');
        }*/

        // product 01
        $.each(product01,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult01').show()
                $('#productResult02').hide()
                $('#productResult03').hide()
                $('#productResult04').hide()
                $('#productResult05').hide()
                $('#productResult06').hide()
            }

        })
        // product 02
        $.each(product02,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult02').show()
                $('#productResult01').hide()
                $('#productResult03').hide()
                $('#productResult04').hide()
                $('#productResult05').hide()
                $('#productResult06').hide()
            }
        })

        // product 03
        $.each(product03,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult03').show()
                $('#productResult01').hide()
                $('#productResult02').hide()
                $('#productResult04').hide()
                $('#productResult05').hide()
                $('#productResult06').hide()
            }
        })

        // product 04
        $.each(product04,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult04').show()
                $('#productResult01').hide()
                $('#productResult03').hide()
                $('#productResult02').hide()
                $('#productResult05').hide()
                $('#productResult06').hide()
            }
        })

        // product 05
        $.each(product05,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult05').show()
                $('#productResult01').hide()
                $('#productResult03').hide()
                $('#productResult04').hide()
                $('#productResult02').hide()
                $('#productResult06').hide()
            }
        })

        // product 06
        $.each(product06,function(index,value){
            if(dataCheckedJoin === value){
                $('#productResult06').show()
                $('#productResult01').hide()
                $('#productResult03').hide()
                $('#productResult04').hide()
                $('#productResult05').hide()
                $('#productResult02').hide()
            }
        })

        // if answer is correct
        if(userAnswer === currentQuestion.answer) {
            // add to number of correct answers
            numCorrect++;

            // green when correct
            /*answerContainers[questionNumber].style.color = "rgb(0, 88, 4)";*/
        } else {   
            // red when incorrect
            /*answerContainers[questionNumber].style.color = "rgb(141, 0, 0)";*/
        }
    });

    // show number of correct answers out of total
  /*  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;*/
}

function showSlide(n) {
    // Hide all slides by removing "active-slide" class from all questions
    slides[currentSlide].classList.remove("active-slide");
    // Show new slide by adding "active-slide" class to current question
    slides[n].classList.add("active-slide");
    // Update the current slide number
    currentSlide = n;

    // First slide - hide previous button - Else show previous button
    if(currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    // Last slide - hide next button and show submit button - Else show next button and hide submit button
    if(currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

$( document ).ready(function() {

    if ($('input').is(':not(:checked)')){
        $('input[value="1"]').attr('checked','checked');
    }

})

function nextSlide() {
    showSlide(currentSlide + 1);
    progressPercent += 25;
    progressBar.style.width = progressPercent +  "%";
}

function previousSlide() {
    showSlide(currentSlide - 1);
    progressPercent -= 25;
    progressBar.style.width = progressPercent + "%";
}

var progressBar = document.getElementById("progress-bar");
var progressPercent = 0;

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

//display quiz 
quiz();

var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Display Slides
showSlide(0);

// click submit, show results
submitButton.addEventListener("click", results);

// Click to show next or previous slides
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

