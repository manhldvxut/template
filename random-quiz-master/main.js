var questions = [
/*questions01*/
    {
        question: "いつ使いたい？",
        choices: {
            1: "オフィスなど普段使いで",
            2: "友人と過ごす休日に",
            3: "特別な人とのデートに"
        },
    },
    /*questions02*/
    {
        question: "言われて嬉しいのは？",
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
                //
                `<label><input type="radio" name="question${questionNumber}" value="${letter}">
                    <span class="customRadio"></span>
                        ${letter} :
                        ${currentQuestion.choices[letter]}
                </label>`

            );
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
             //
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

        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        /*console.log(userAnswer);*/
        arrayChecked.push(userAnswer)

        var dataChecked = arrayChecked;

        var dataCheckedJoin = dataChecked.join('')

         // product 01
        $.each(product01,function(index,value){
            if(dataCheckedJoin === value){
                $('.res_product.carousel__cell:nth-child(2)').addClass('fadeInUp');
                $('.res_product.carousel__cell:nth-child(1), .res_product.carousel__cell:nth-child(3), .res_product.carousel__cell:nth-child(4), .res_product.carousel__cell:nth-child(5), .res_product.carousel__cell:nth-child(6)').removeClass('fadeInUp');
                
            }

        })
        // product 02
        $.each(product02,function(index,value){
            if(dataCheckedJoin === value){
                $('.res_product.carousel__cell:nth-child(3)').addClass('fadeInUp');
                $('.res_product.carousel__cell:nth-child(1), .res_product.carousel__cell:nth-child(2), .res_product.carousel__cell:nth-child(4), .res_product.carousel__cell:nth-child(5), .res_product.carousel__cell:nth-child(6)').removeClass('fadeInUp');
              
            }
        })// product 03
        $.each(product03,function(index,value){
            if(dataCheckedJoin === value){
              $('.res_product.carousel__cell:nth-child(5)').addClass('fadeInUp');
              $('.res_product.carousel__cell:nth-child(1), .res_product.carousel__cell:nth-child(2), .res_product.carousel__cell:nth-child(3), .res_product.carousel__cell:nth-child(4), .res_product.carousel__cell:nth-child(6)').removeClass('fadeInUp');
            }
        })

        // product 04
        $.each(product04,function(index,value){
            if(dataCheckedJoin === value){
              $('.res_product.carousel__cell:nth-child(4)').addClass('fadeInUp');
             $('.res_product.carousel__cell:nth-child(1), .res_product.carousel__cell:nth-child(2), .res_product.carousel__cell:nth-child(3), .res_product.carousel__cell:nth-child(5), .res_product.carousel__cell:nth-child(6)').removeClass('fadeInUp');
            }
        })

        // product 05
        $.each(product05,function(index,value){
            if(dataCheckedJoin === value){
              $('.res_product.carousel__cell:nth-child(6)').addClass('fadeInUp');
              $('.res_product.carousel__cell:nth-child(1), .res_product.carousel__cell:nth-child(2), .res_product.carousel__cell:nth-child(3), .res_product.carousel__cell:nth-child(4), .res_product.carousel__cell:nth-child(5)').removeClass('fadeInUp');
            }
        })

        // product 06
        $.each(product06,function(index,value){
            if(dataCheckedJoin === value){
               $('.res_product.carousel__cell:nth-child(1)').addClass('fadeInUp');
                $('.res_product.carousel__cell:nth-child(2), .res_product.carousel__cell:nth-child(3), .res_product.carousel__cell:nth-child(4), .res_product.carousel__cell:nth-child(5), .res_product.carousel__cell:nth-child(6)').removeClass('fadeInUp');
               
            }
        })
    });

}

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if(currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

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

    findClass();
    $('#next').click(function(){
        findClass();
    })
})

function findClass(){
    $('.slide').each(function(){
        if($(this).is('.active-slide')){
            $(this).css('display', 'inline-flex-')
        }
    });
}


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

