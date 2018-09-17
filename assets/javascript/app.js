$(document).ready(function () {

    var allquestions = [
        {
            question: 'What color is banana?',
            items: ['Green', 'Yellow', 'Black', 'White'],
            answer: 1,
            pic: '<iframe src="https://giphy.com/embed/RZRG7eWed3Hws" width="350" height="210" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
        },

        {
            question: 'What color is the sky?',
            items: ['Green', 'Yellow', 'Blue', 'White'],
            answer: 2,
            pic: '<iframe src="https://giphy.com/embed/VxbvpfaTTo3le" width="350" height="210" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
        },

        {
            question: 'What color is grass?',
            items: ['Green', 'Yellow', 'Blue', 'White',],
            answer: 0,
            pic: '<iframe src="https://giphy.com/embed/l2JHR3g2uCOAsnVcI" width="350" height="210" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'

        },

        {
            question: 'What color is strawberry?',
            items: ['Green', 'Yellow', 'Blue', 'Red',],
            answer: 3,
            pic: '<iframe src="https://giphy.com/embed/k5dX3BHkIQAqWRnT1H" width="350" height="210" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'

        }
    ];

    var number = 10;
    var interval;
    var running = false;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var userGuess ="";
    var qCount = allquestions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    

    $("#reset").hide();
    $("#start").on("click", function () {
        $("#start").hide();
        display();
        runTimer();
        for (var i = 0; i < allquestions.length; i++) {
            holder.push(allquestions[i]);
        }
    })

    function runTimer() {
        if (!running) {
            interval = setInterval(timeDown, 1000);
            running = true;
        }
    }

    function timeDown() {
        $("#time-left").html(number);
        number--;

        if (number === 0) {
            unanswered++;
            stop();
            $(".correctAnswer").html("<p>Time is up! The correct answer is: " + pick.items[pick.answer] + "</p>");
            correctPic();
        }
    }

    function stop() {
        running = false;
        clearInterval(interval);
    }

    function display() {
        index = Math.floor(Math.random() * allquestions.length);
        pick = allquestions[index];

        $(".question").html("<h2>"+pick.question+"</h2>");
        for (var i = 0; i < pick.items.length; i++) {
            var useritems = $("<div>");
            useritems.addClass("answeritems");
            useritems.html(pick.items[i]);
            useritems.attr("data-guessvalue", i);
            $(".correctAnswer").append(useritems);
        }
    


        $(".answeritems").on("click", function () {
            userGuess = parseInt($(this).attr("data-guessvalue"));
            if (userGuess === pick.answer) {
                stop();
                correct++;
                userGuess = "";
                $(".correctAnswer").html("<p>Correct!</p>");
                correctPic();

            } else {
                stop();
                incorrect++;
                userGuess = "";
                $(".correctAnswer").html("<p>Wrong! The correct answer is: " + pick.items[pick.answer] + "</p>");
                correctPic();
            }
        })
    }


    function correctPic() {
        $(".correctAnswer").append(pick.pic);
        newArray.push(pick);
        allquestions.splice(index, 1);

        var hidpic = setTimeout(function () {
            $(".correctAnswer").empty();
            number = 20;

            if ((incorrect + correct + unanswered) === qCount) {
                $(".question").empty();
                $(".question").html("<h3>Game Over!  Here's how you did: </h3>");
                $(".correctAnswer").append("<h4> Correct: " + correct + "</h4>");
                $(".correctAnswer").append("<h4> Incorrect: " + incorrect + "</h4>");
                $(".correctAnswer").append("<h4> Unanswered: " + unanswered + "</h4>");
                $("#reset").show();
                correct = 0;
                incorrect = 0;
                unanswered = 0;

            } else {
                runTimer();
                display();

            }
        }, 3000);


    }

    $("#reset").on("click", function () {
        $("#reset").hide();
        $(".correctAnswer").empty();
        $(".question").empty();
        for (var i = 0; i < holder.length; i++) {
            allquestions.push(holder[i]);
        }
        runTimer();
        display();

    })

})
