// Write a function which takes two numbers and returns their sum

// 1. 문제를 내 방식대로 이해할 수 있는가?
// 두 숫자로 합계를 구하기

// 2. 문제의 입력값은 무엇인가?
// two numbers

// 3. 문제를 해결했을때 출력값은 무엇이어야 할까?
// one number sum

// 4. 문제를 해결하기에 충분한 정보가 있는가?

// 5. 데이터를 어떻게 라벨링을 할 것인가?

// Write a function which takes in a string and returns counts of each charater in the string.
charCount("aaaa") // return {a : 4} // 객체가 반환되어야 한다를 알 수 있다.
charCount("hello") // {h:1, e:1, l:2, o:1 }
charCount("") // 입력값이 공백이면 무엇을 반환해야할까?

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character... 
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
            result[char]++;
        if (result[char] > 0) {
            result[char] = 1;
        } 
        
    }
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if character is something else (space, period, etc..) don't do anything
    // return object at end
    return result;
}

console.log(charCount("hello"));