// 01_returnFunction
function returnFunction() {
    // TODO: 여기에 코드를 작성합니다.
    return function () {
        return 'Hello HoF!';
    }
}


// 02_functionParameter
function functionParameter(func, num) {
    // TODO: 여기에 코드를 작성합니다.
    return func(num);
}


// 03_applyTwice
function applyTwice(func, num) {
    // TODO: 여기에 코드를 작성합니다.
    return func(func(num));
}


// 04_compose
function compose(func1, func2, num) {
    // TODO: 여기에 코드를 작성합니다.
    return func1(func2(num));
}


// 05_compose2
function compose2(func1, func2) {
    // TODO: 여기에 코드를 작성합니다.
    return function(num) {
        return func1(func2(num));
    };
}


// 06_pipe
function pipe(...funcs) {
    // TODO: 여기에 코드를 작성합니다.
    return function(num) {
        let result = num;
        for (let i = 0; i < funcs.length; i++) {
            result = funcs[i](result);
        }
        return result;
    }
}


// 07_callbackOnly
function callbackOnly(callback, response) {
    // TODO: 여기에 코드를 작성합니다.
    if (response["status"] === 'fail') {
        return 'Something went wrong!';
    }
    else {
        return callback(response["data"])
    }
}


// 08_mapCallback
function mapCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]); 
    }
    return arr;
}


// 09_filterCallback
function filterCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let new_arr = [];
    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}


// 10_removeElement
function removeElement(arr, discarder) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter(function(x) {
        if (x !== discarder) {
            return true;
        }
        return false;
    });
}


// 11_keep
function keep(arr, keeper) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter((x) => {
        if (x === keeper) {
            return true;
        }
        return false;
    })
}


// 12_filterOddLengthWords
function filterOddLengthWords(words) {
    // TODO: 여기에 코드를 작성합니다.
    return words.filter((x) => {
        if (x.length % 2 === 1) {
            return true;
        }
      // return false;
    })
}


// 13_getIndex
function getIndex(arr, num) {
    return arr.filter((x) => x < num).length;
}


// 14_getElementsLessThan100AtProperty
function lessThan100(number) {
    if (typeof(number) === "number") {
        return number < 100;
    }
    else {
        return "";
    }
}

function getElementsLessThan100AtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[property])) {
        return obj[property].filter(lessThan100);
    }
    else {
        return [];
    }
}


// 15_getDoubledElements
function getDoubledElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => x * 2);
}


// 16_getLengthOfElements
function getLengthOfElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => x.length);
}


// 17_checkEvenOrNot
function checkEvenOrNot(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => {
        if (x % 2 === 0 && x !== 0) {
            return 'ok';
        }
        else {
            return 'no';
        }
    })
}


// 18_getOnlyNames
function getOnlyNames(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => x["name"])
}


// 19_getFullNames
function getFullNames(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => x.firstName + " " + x.lastName);
}


// 20_getSquaredElementsAtProperty
function square(number) {
    return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[property])) {
        return obj[property].map(square);
    }
    else {
        return [];
    }
}


// 21_getOnlyAllowedToDrink
function getOnlyAllowedToDrink(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return [];
    }
    return arr.map((x) => {
        if (x.age >= 18) {
            return x['name'];
        }
    }).filter(x => x)
}


// 22_classicMovies
function classicMovies(arr, year) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((x) => {
        if (x.year < year) {
            return x.title + " by " + x.director;
        }
    }).filter((x) => x);
}


// 23_computeSumOfAllElements
function computeSumOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((arr, cur) => arr + cur);
}


// 24_computeProductOfAllElements
function computeProductOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 1;
    }
    return arr.reduce((acc, cur) => acc * cur);
}


// 25_computeAverageOfNumbers
function computeAverageOfNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
}


// 26_calculateScore
function calculateScore(records, value) {
    // TODO: Your code here!
    // if (records.length === 0) {
    //   return 0;
    // }
    // let new_records = records.filter((x) => x['animal'] === value);
    // new_records = new_records.map((x) => x.score);
    // if (new_records.length === 0) {
    //   return 0;
    // }
    // return new_records.reduce((acc, cur) => acc + cur);
    return records.reduce((acc, cur) => {
        if (cur.animal === value) {
            return acc + cur.score;
        }
        else {
            return acc;
        }
    }, 0)
}


// 28_getLengthOfLongestElement
function getLengthOfLongestElement(arr) {
    // 여기에 코드를 입력하세요
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(...arr.map((x) => x.length));
}


// 29_joinArrayOfArrays
function joinArrayOfArrays(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.reduce((acc, cur) => acc.concat(cur), [])
}


// 30_findShortestWord
function findShortestWord(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr = arr.filter((x) => {
        if (typeof(x) === 'string') {
            return true;
        }
    });
    if (arr.length === 0) {
        return "";
    }
    // let new_arr = arr.map((x) => x.length);
    // let min_length = Math.min(...new_arr);
    // return arr[new_arr.indexOf(min_length)];
    return arr.reduce((acc, cur) => {
        if (acc.length > cur.length) {;
            return cur;
        }
        else {
            return acc;
        }
    })
}


// 31_studentReports
function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    let female_students = students.filter((x) => x.gender === 'female');
    return female_students.map((x) => {
        x["grades"] = x["grades"].reduce((acc, cur) => acc + cur) / x["grades"].length;
        return x;
    })
}


// 32_sumOfArraysInArray
function sumOfArraysInArray(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr = arr.reduce((acc, cur) => {
        return acc.concat(cur);
    }).filter((x) => typeof(x) === 'number');
    
    if (arr.length === 0) {
        return 0;
    }

    return arr.reduce((acc, cur) => acc + cur);
}