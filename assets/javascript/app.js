$(document).ready(function () {
    var number = 10;
    var next = 3;
    var interval;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var q1 = {
        question: 'What color is banana?',
        answer: [
            'A. Green', 'B. Yellow', 'C. Black', 'D. White',
        ]
    }

    var q2 = {
        question: 'What color is the sky?',
        answer: [
            'A. Green', 'B. Yellow', 'C. Blue', 'D. White',
        ]
    }

    var q3 = {
        question: 'What color is grass?',
        answer: [
            'A. Green', 'B. Yellow', 'C. Blue', 'D. White',
        ]
    }

    var q4 = {
        question: 'What color is strawberry?',
        answer: [
            'A. Green', 'B. Yellow', 'C. Blue', 'D. Red',
        ]
    }

    console.log(q4.answer[1])
    $('.question').html(q1.question);
    $('.choice1').html(q1.answer[0]);
    $('.choice2').html(q1.answer[1]);
    $('.choice3').html(q1.answer[2]);
    $('.choice4').html(q1.answer[3]);
    $(this).click(function(){
        console.log($(this).value());
    })

    function initGame() {
        $('.allThings').hide();
        $('.start').click(function () {
            hideStart();
            start();
        });
    }

    function hideStart() {
        $('.start').hide();
        $('.allThings').show();
    }

    function start() {
        $("#time-left").html("<h2>" + number + "</h2>");
        clearInterval(interval);
        interval = setInterval(timeDown, 1000);
    }

    function timeDown() {
        number--;
        $("#time-left").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
            $("#time-left").append("<h2>Too Late!</h2>");
            nextQuestion();
        };
    }

    function stop() {
        clearInterval(interval);
    }

    function nextQuestion() {
        clearInterval(interval);
        interval = setInterval(nextItem, 1000);
    }

    function nextItem() {
        next--;
        console.log(next)
        if (next === 0) {
            stop();
            $("#time-left h2").last().remove();

        }

    }

    function reset() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }
    initGame();



});