function transformString(str) {
  const length = str.length;

  if (length % 15 === 0) {
      // Divisible by 15: Reverse the string and then replace each character with its ASCII code
      const reversedStr = str.split('').reverse().join('');
      const asciiStr = reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
      return asciiStr;
  } else if (length % 5 === 0) {
      // Divisible by 5: Replace each character with its ASCII code
      return str.split('').map(char => char.charCodeAt(0)).join(' ');
  } else if (length % 3 === 0) {
      // Divisible by 3: Reverse the string
      return str.split('').reverse().join('');
  } else {
      // None of the conditions met: Return the string as is
      return str;
  }
}
console.log(transformString("Hamburger")); 
