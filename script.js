$(document).ready(function(){
    var score = 0;

    $("#js1").one("click", function() {
        var input = window.prompt("JavaScript for $100:\nTrue or False: JavaScript is an untyped language.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 100;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#js2").one("click", function() {
        var input = window.prompt("JavaScript for $200:\nWhat index is the third element in an array?");
        if(input == "2") {
            score += 200;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#js3").one("click", function() {
        var input = window.prompt("JavaScript for $300:\nIn what year was JavaScript created?");
        if(input == "1995") {
            score += 300;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#jq1").one("click", function() {
        var input = window.prompt("jQuery for $100:\nTrue or False: jQuery is a JavaScript library.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 100;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#jq2").one("click", function() {
        var input = window.prompt("jQuery for $200:\nWho originally released jQuery?");
        if(input == "John Resig" || input == "john resig") {
            score += 200;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#jq3").one("click", function() {
        var input = window.prompt("jQuery for $300: In what year was jQuery created?");
        if(input == "2006") {
            score += 300;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#bs1").one("click", function() {
        var input = window.prompt("Bootstrap for $100:\nTrue or False: Bootstrap is a free and open-source front-end web framework.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 100;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#bs2").one("click", function() {
        var input = window.prompt("Bootstrap for $200:\nTrue or False: Bootstrap 4 is the most current version.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 200;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });

    $("#bs3").one("click", function() {
        var input = window.prompt("Bootstrap for $300:\nIn what year did Bootstrap originally release?");
        if(input == "2011") {
            score += 300;
            alert("Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Sorry, incorrect.");
        }
        $(this).css( {"background-color" : "gray"});
    });
});