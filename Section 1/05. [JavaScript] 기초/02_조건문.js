// 1번: isOldEnoughToDrink
function isOldEnoughToDrink(age) {
    // TODO: 여기에 코드를 작성합니다.
    if (age < 18) {
        return false
    }
    else {
        return true
    }
}


// 2번: fizzBuzz
function fizzBuzz(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return "FizzBuzz";
        }
        else {
            return "Fizz";
        }
    }
    else if(num % 5 === 0) {
        if (num % 3 === 0) {
            return "FizzBuzz";
        }
        else {
            return "Buzz";
        }
    }
    else {
        return "No FizzBuzz";
    }
}


// 3번: miniCalculator
function miniCalculator(num1, num2, operator) {
    // TODO: 여기에 코드를 작성합니다.
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
}


// 4번: convertScoreToGrade
function convertScoreToGrade(score) {
    // TODO: 여기에 코드를 작성합니다.
    if (score <= 59 && score >= 0) {
        return 'F';
    }
    else if (score <= 69 && score >= 60) {
        return 'D';
    }
    else if (score <= 79 && score >= 70) {
        return 'C';
    }
    else if (score <= 89 && score >= 80) {
        return 'B';
    }
    else if (score <= 100 && score >= 90){
        return 'A';
    }
    else {
        return "INVALID SCORE";
    }
}


// 5번: checkAge
function checkAge(name, age) {
    // TODO: 여기에 코드를 작성합니다.
    if (age < 21) {
        return `Go home, ${name}!`;
    }
    else {
        return `Welcome, ${name}!`;
    }
}


// 6번: convertScoreToGradeWithPlusAndMinus
function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    if (score >= 0 && score < 60) {
        return 'F';
    }
    else if (score >= 60 && score < 70) {
        if (score <= 62) {
            return 'D-';
        }
        else if (score >= 68) {
            return 'D+';
        }
        else {
            return 'D';
        } 
    }
    else if (score >= 70 && score < 80) {
        if (score <= 72) {
            return 'C-';
        }
        else if (score >= 78) {
            return 'C+';
        }
        else {
            return 'C';
        }  
    }
    else if (score >= 80 && score < 90) {
        if (score <= 82) {
            return 'B-';
        }
        else if (score >= 88) {
            return 'B+'
        }
        else {
            return 'B';
        }
    }
    else if (score >= 90 && score <= 100) {
        if (score <= 92) {
            return 'A-';
        }
        else if (score >= 98) {
            return 'A+';
        }
        else {
            return 'A';
        }
    }
    else {
        return 'INVALID SCORE';
    }
}


// 7번: addOneSecond
function addOneSecond(hour, minute, second) {
    // TODO: 여기에 코드를 작성합니다.
    if (second === 59) {
        if (minute === 59) {
            if (hour === 23) {
                second = 0;
                minute = 0;
                hour = 0;
            }
            else {
                second = 0;
                minute = 0;
                hour += 1;
            }
        }
        else {
            second = 0;
            minute += 1;
        }
    }
    else {
        second += 1;
    }
    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}


// 8번: findShortestOfThreeWords
function findShortestOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    if (word1.length <= word2.length) {
        if (word1.length <= word3.length) {
            return word1;
        }
        else {
            return word3;
        }
    }
    else if (word1.length > word2.length) {
        if (word2.length <= word3.length) {
            return word2;
        }
        else {
            return word3;
        }
    }
}


// 9번: makeLastSeenMsg
function makeLastSeenMsg(name, period) {
    // TODO: 여기에 코드를 작성합니다.
    if (period <= 59) {
        return `${name}: ${period}분 전에 접속함`;
    }
    else if (period >= 60 && period < 24 * 60) {
        return `${name}: ${Math.floor(period / 60)}시간 전에 접속함`;
    }
    else {
        return `${name}: ${Math.floor(period / (24 * 60))}일 전에 접속함`;
    }
}