// 1번: getProperty
function getProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (property in obj) {
        return obj[property];
    }
    else {
        return undefined;
    }
}


// 2번: addProperty
function addProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    obj[property] = true;
}


// 3번: addPropertyAndValue
function addPropertyAndValue(obj, property, value) {
    // TODO: 여기에 코드를 작성합니다.
    obj[property] = value;
}


// 4번: addObjectProperty
function addObjectProperty(obj1, property, obj2) {
    // 여기에 코드를 작성합니다
    obj1[property] = obj2;
}


// 5번: removeProperty
function removeProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    delete obj[property];
}


// 6번: removeNumberValues
function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i in obj) {
        if (typeof(obj[i]) === "number") {
            delete obj[i];
        }
    }
}


// 7번: removeArrayValues
function removeArrayValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i in obj) {
        if (Array.isArray(obj[i])) {
            delete obj[i];
        }
    }
}


// 8번: removeOddValues
function removeOddValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i in obj) {
        if (obj[i] % 2 !== 0 && typeof(obj[i]) === "number") {
            delete obj[i];
        }
    }
}


// 9번: isPersonOldEnoughToVote
function isPersonOldEnoughToVote(person) {
    // TODO: 여기에 코드를 작성합니다.
    return (person["age"] >= 18);
}


// 10번: addFullNameProperty
function addFullNameProperty(obj) {
    // TODO: 여기에 코드를 작성합니다.
    obj["fullName"] = `${obj["firstName"]} ${obj["lastName"]}`;
}


// 11번: removeNumbersLargerThan
function removeNumbersLargerThan(num, obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i in obj) {
        if (typeof(obj[i]) === "number" && obj[i] > num) {
            delete obj[i];
        }
    }
}


// 12번: countNumberOfKeys
function countNumberOfKeys(obj) {
    // TODO: 여기에 코드를 작성합니다.
    return (Object.keys(obj)).length;
}


// 13번: printObject
function printObject(obj) {
    // TODO: 여기에 코드를 작성합니다.
    let obj_arr = [];
    for (let i in obj) {
        obj_arr.push(`${i}: ${obj[i]}`);
    }
    if (obj_arr.length === 0) {
        return '';
    }
    else {
        return obj_arr.join("\n") + '\n';
    }
}


// 14번: getElementOfArrayProperty
function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[key])) {
        return (obj[key])[index];
    }
    else {
        return undefined;
    }
}


// 15번: select
function select(arr, obj) {
    // TODO: 여기에 코드를 작성합니다.
    let new_obj = {};
    for (let i of arr) {
        if (i in obj) {
        new_obj[i] = obj[i];
        }
    }
    return new_obj;
}


// 16번: getLastElementOfProperty
function getLastElementOfProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[property])) {
        return (obj[property])[obj[property].length - 1];
    }
    else {
        return undefined;
    }
}


// 17번: getValueOfNthElement
function getValueOfNthElement(arr, num) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 'no name';
    }
    else if (arr.length <= num) {
        return arr[arr.length - 1]['name']; 
    }
    return arr[num]['name'];
}


// 18번: getAllButLastElementOfProperty
function getAllButLastElementOfProperty(obj, key) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[key]) && obj[key].length !== 0) {
        return obj[key].slice(0, -1);
    }
    else {
        return [];
    }
}


// 19번: extend
function extend(obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i in obj2) {
        if (i in obj1 === false) {
            obj1[i] = obj2[i];
    }
    }
}


// 20번: countAllCharacters
function countAllCharacters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let str_obj = {};
    for (let i of str) {
        str_obj[i] = [...str].filter(x => x === i).length;
    }
    return str_obj;
}


// 21번: mostFrequentCharacter
function mostFrequentCharacter(str) {
    str = [...str].filter (x => x !== " ");
    let count_obj = {most_count: 0, most_al: ""};

    if (str.length === 0) {
        return "";
    }

    for (let i of str) {
        if (count_obj[i] === undefined) {
            count_obj[i] = 1;
        } 
        else if (count_obj[i]) {
            count_obj[i] += 1;
        }
        if (count_obj[i] > count_obj['most_count']) {
            count_obj['most_count'] = count_obj[i];   
            count_obj['most_al'] = i;
        }
    }
    return count_obj['most_al'];
}