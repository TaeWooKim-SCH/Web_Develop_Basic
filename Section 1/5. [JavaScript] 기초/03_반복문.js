// 1번: sum
function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.
    answer = 0;
    for (let i = 0; i <= num; i++) {
        answer += i;
    }
    return answer;
}


// 2번: makeDigits
function makeDigits(num) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '';
    for (let i = 1; i <= num; i++) {
        answer += String(i);
    }
    return answer;
}


// 3번: makeDigits2
function makeDigits2(num) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = "1";
    let i = 2;
    while (i <= num) {
        answer += `-${i}`;
        i++;
    }
    return answer;
}


// 4번: makeMultiplesOfDigit
function makeMultiplesOfDigit(num) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = "";
    for (let i = 3; i <= num; i += 3) {
        answer += String(i);
    }
    return answer;
}


// 5번: countCharacter
function countCharacter(str, letter) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
        answer += 1;
        }
    }
    return answer;
}


// 6번: getMaxNumberFromString
function getMaxNumberFromString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = "0";
    for (let i = 0; i < str.length; i++) {
        if (Number(answer) < Number(str[i])) {
            answer = str[i];
        }
    }
    return answer;
}


// 7번: replaceAll
function replaceAll(str, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    answer = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === from) {
            answer += to;
        }
        else {
            answer += str[i];
        }
    }
    return answer;
}


// 8번: getSumOfFactors
function getSumOfFactors(num) {
    // TODO: 여기에 코드를 작성합니다.
    let factor_sum = 0;
    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            factor_sum += i;
        }
    }
    return factor_sum;
}


// 9번: isPrime
function isPrime(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 초기설정
    let arr = new Array(num + 1);
    arr.fill(true, 0, num + 1);

    // 0과 1제외시키기
    arr[0] = false;
    arr[1] = false;

    // 배수 제거하기
    for (let i = 2; i ** 2 <= num + 1; i++) {
        if (arr[i]) {
            for (let j = i ** 2; j <= num + 1; j += i) {
                arr[j] = false;
            }
        }
    }
    return arr[num];
}


// 10번: isPrimes
function listPrimes(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 에라토스테네스의 체
        // 빈 배열 생성
    let prime_arr = new Array(num + 1); // num을 포함한 수까지의 소수들을 리턴해야 하기 때문에 1을 더함
    prime_arr.fill(true, 0, num + 1);
    
        // 0과 1은 제외시키기
    prime_arr[0] = false;
    prime_arr[1] = false;

        // 배수 제거하기
    for (let i = 2; i * i <= num; i++) {
        if (prime_arr[i]) {
            // i의 배수를 제거하기 위해 i씩 더해나가며 제거함
            for (j = i * i; j <= num; j += i) {
                prime_arr[j] = false;
            }
        }
    }

    // 소수 추출하기
    let answer = "" // 출력을 빈 문자열 형태로 해야 하기 때문에 빈 문자열 생성
    for (let k = 2; k <= num; k++) {
        if (prime_arr[k]) {
            answer += `-${k}`;
        }
    }
    return answer.substring(1);
}


// 11번: makePermutations
function makePermutations(str) {
    // TODO: 여기에 코드를 작성합니다.
    let letter = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            letter += `,${str[i]}${str[j]}`;
        }
    }
    return letter.substring(1);
}


// 12번: (advanced)hasRepeatedCharacter
function hasRepeatedCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let duplicate = false; // 초기값 false로 설정
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j) { // 같은 인덱스면 비교하는 의미가 없음
                if (str[i] === str[j]) { // 문자가 같으면
                    duplicate = true; // true로 변환
                }
            }
        }
    }
    return duplicate;
}

console.log(hasRepeatedCharacter('abcdefg'));