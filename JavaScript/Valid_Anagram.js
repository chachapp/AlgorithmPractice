function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // string 문자를 받는다
  // 문자에서 for in 으로 char를 하나씩 꺼내서 새로운 객체에 넣는다 (2개)
  // 객체를 for in로 비교해서

  // 갯수를 비교해서 맞지 않으면 false, 공백은 true, 모두 소문자로 처음에 변경하기
  if (str1 === "" && str2 === "") return true;

  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let key of lowerStr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  for (let key of lowerStr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // 배열로 변환헤서 Object.values를 이용하고 includes로 비교하기
  // a : 2 가 맞아야함. 
  for (let key in frequencyCounter1) {
    if (!frequencyCounter1.hasOwnProperty(key)) {
        return false;
    }

    if (!frequencyCounter2.hasOwnProperty(key)) {
        return false;
    }

    

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
    }

    
    
  }

  return true;
  
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
