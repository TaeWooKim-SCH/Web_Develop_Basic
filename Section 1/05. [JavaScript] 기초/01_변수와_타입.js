// 1번: 변수 선언하기
    // TODO : 키워드 let을 사용하여 변수 course_1을 선언하세요.
let course_1;


// 2번: 변수에 값 할당하기
let course; // TODO : 선언되어 있는 변수 course에 문자열 'code states'를 할당하세요.
course = 'code states';


// 3번: 값의 표현
let num1, num2, result;
// TODO : 변수 num1에 숫자 5를 할당하고, 변수 num2에 숫자 7을 할당한 후, 변수 result에 숫자가 할당된 변수 num1과 num2의 곱을 할당합니다.
num1 = 5;
num2= 7;
result = num1 * num2;


// 4번: getRunCatDistance
function getRunCatDistance(speed, time) {
    let distance;
    // TODO: 속력(speed), 시간(time)이 숫자로 주어졌을 때, 이동한 거리를 변수 distance에 할당하여 리턴하는
    // getRunCatDistance 함수를 작성하세요.
    distance = speed * time;
    return distance;
}


// 5번: 함수의 선언
function multiplyBy2(input) {
    input = input * 2;
    return input;
}
  // TODO : 첫 번째 인자에 2를 곱하는 함수 multiplyBy2와 비슷하게
  // 첫 번째 인자를 2로 나누는 함수 divideBy2를 선언하세요.
function divideBy2(input) {
    input = input / 2;
    return input;
}


// 6번: computeAverageLengthOfWords2
function computeAverageLengthOfWords2(word1, word2) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.floor((word1.length + word2.length) / 2);
}


// 7번: isPythagorean
function isPythagorean(side1, side2, side3) {
    // TODO: 여기에 코드를 작성합니다.
    const a = side1 **2;   
    const b = Math.pow(side2, 2);   
    const c = side3 * side3   
    return (a === b + c || b === a + c || c === a + b);
}


// 8번: takeLetters
function takeLetters(num, str) {
    // TODO: 여기에 코드를 작성합니다.
    return str.slice(0, num);
}


// 9번: compareOnlyAlphabet
function compareOnlyAlphabet(str1, str2) {
    // TODO: 여기에 코드를 작성합니다.
    return str1.toUpperCase() === str2.toUpperCase();
}


// 10번: showTime
function showTime(hour, min, sec) {
    // TODO: 여기에 코드를 작성합니다.
    return(`현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`)
}