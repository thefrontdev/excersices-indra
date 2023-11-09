(() => {
  console.log(reverseWords('Swift Coding Challenges'));
  console.log(reverseWords('The quick brown fox'));
})();

function reverseWords(words) {
  const wordsArray = words.split(' ');
  const reversedWordsArray = wordsArray.map(word => {
    const charArray = [... word];
    return charArray.reverse().join('');
  });
  return reversedWordsArray.join(' ');
}