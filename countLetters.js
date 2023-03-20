const countLetters = function(sentence) {
  let result = {};
  
  for (let letter of sentence) {
    if (letter.trim().length > 0) {
      if (!result[letter]) 
        result[letter] = 0;
      result[letter]++;
    }
  }
  return result;
};

module.exports = countLetters;
