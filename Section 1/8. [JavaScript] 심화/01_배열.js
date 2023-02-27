// 1번: getType
function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(anything)) {
        return "array";
    }
    if (anything === null) {
        return "null";
    }
    else {
        return typeof anything;
    }
}


// 2번: getFirstElement
function getFirstElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr === []) {
        return undefined;
    }
    else {
        return arr[0];
    }
}


// 3번: getLastElement
function getLastElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr === []) {
        return undefined;
    }
    else {
        return arr[arr.length - 1];
    }
}


// 4번: getNthElement
function getNthElement(arr, index) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0 ) {
        return undefined;
    }
    else if (index >= arr.length) {
        return 'out of index range';
    }
    else {
        return arr[index];
    }
}


// 5번: computeSumOfAllElements
function computeSumOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 0
    }
    return arr.reduce(
        (arr, cur) => arr + cur
    );
}


// 6번: getAllWords
function getAllWords(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str === "") {
        return [];
    }
    return str.split(" ");
}


// 7번: getAllLetters
function getAllLetters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = [];
    for (let i of str) {
        arr.push(i);
    }
    return arr;
}


// 8번: getLargestElement
function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.max(...arr);
}


// 9번: getLongestWord
function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let str_arr = str.split(" "); // 문자열을 공백 기준으로 나눠 배열로 생성
    let str_length_arr = str_arr.map(x => x.length) // 각 element의 길이로 배열을 생성
    return str_arr[str_length_arr.indexOf(Math.max(...str_length_arr))]; // 문자열의 길이로 구성된 배열에서 최댓값을 구해 indexOf로 인덱스를 뽑아서 인덱싱으로 최종 답 리턴
}


// 10번: getEvenNumbers
function getEvenNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter((x) => {
        if (x % 2 === 0) {
            return x;
        }
    })
}


// 11번: addToFront
function addToFront(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    arr.unshift(el);
    return arr;
}


// 12번: addToBack
function addToBack(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    arr.push(el);
    return arr;
}


// 13번: mergeArrays
function mergeArrays(arr1, arr2) {
    // TODO: 여기에 코드를 작성합니다.
    return arr1.concat(arr2);
}


// 14번: getElementsAfter
function getElementsAfter(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.slice(n + 1);
}


// 15번: getElementsUpTo
function getElementsUpTo(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    if (n >= arr.length || n === 0) {
        return [];
    }
    return arr.slice(0, -1);
}


// 16번: getAllElementsButFirst
function getAllElementsButFirst(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return [];
    }
    arr.shift();
    return arr;
}


// 17번: getAllElementsButLast
function getAllElementsButLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return [];
    }
    arr.pop();
    return arr;
}


// 18번: removeFromFront
function removeFromFront(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.shift();
    return arr;
}


// 19번: removeFromBack
function removeFromBack(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.pop();
    return arr;
}


// 20번: removeFromBackOfNew
function removeFromBackOfNew(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.slice(0, -1);
}


// 21번: addToBackOfNew
function addToBackOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.concat([el]);
}


// 22번: addToFrontOfNew
function addToFrontOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    return [el].concat(arr);
}


// 23번: getAllElementsButNth
function getAllElementsButNth(arr, n) {
    // TODO: 여기에 코드를 작성합니다.\
    return arr.filter(x => {
        if (arr[n] !== x) {
            return x
        }
    })
}


// 24번: createPhoneNumber
function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length !== 8) {
        let front = arr.slice(0, 3);
        front = front.join("");
        
        let middle = arr.slice(3, 7);
        middle = middle.join("");
        
        let end = arr.slice(7);
        end = end.join("");
        
        return `(${front})${middle}-${end}`;
    }
    else {
        let middle = arr.slice(0, 4);
        middle = middle.join("");
    
        let end = arr.slice(4);
        end = end.join("");
    
        return `(010)${middle}-${end}`;
    }
}


// 25번: fibonacci
function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력: n
    // 출력: 0, 1, 1, 2, 3, 5, 8 ....
    let fibo_arr = [];
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            fibo_arr.push(i);
        }
        else if (i === 1) {
            fibo_arr.push(1);
        }
        else{
            fibo_arr.push((fibo_arr[i - 1] + fibo_arr[i - 2]));
        }
    }
    return fibo_arr;
}