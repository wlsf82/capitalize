function capitalize(word) {
  // Step 1: Convert the word into an array of letters
  const letters = Array.from(word)

  // Step 2: Extract the head (first letter) and tail (rest of the letters)
  const [head, ...tail] = letters

  // Step 3: Uppercase head and lowercase tail
  const capitalizedHead = head.toUpperCase()
  const lowercasedTail = tail.join('').toLowerCase()

  // Step 4: Combine head and tail into a single string
  return capitalizedHead + lowercasedTail
}

console.log(capitalize('hello')) // Output: 'Hello'

console.log(capitalize('World'))  // Output: 'World'

console.log(capitalize('wALmYr')) // Output: 'Walmyr'

function separateWords(...words) {
  return words.join(' ').split(' ')
}

const words = separateWords('walmyr lima e silva filho')

capitalizedWords = words.map(word => {
  return capitalize(word)
})

const combinedStrings = capitalizedWords.join(' ')

console.log(combinedStrings) // Output: 'Walmyr Lima E Silva Filho'
