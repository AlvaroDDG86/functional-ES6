import words from 'an-array-of-english-words'
const findAnagrams = (word, allWords) => {
    const letters = word.split('').sort().join()
    return allWords.filter(wr => wr.split('').sort().join() === letters).filter(wr => wr !== word)
}

console.log(findAnagrams('cinema', words))

/**
 * Expected 
 * ['iceman', 'anemic']
 */