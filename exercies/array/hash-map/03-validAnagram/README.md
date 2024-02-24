An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false



  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const word1 = str1[i];
    const word2 = str2[i];

    if (!objStr1[word1]) {
      objStr1[word1] = 1;
    } else {
      ++objStr1[word1];
    }

    if (!objStr2[word2]) {
      objStr2[word2] = 1;
    } else {
      ++objStr2[word2];
    }
  }

  for (const key in objStr1) {
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
  }
  return true;