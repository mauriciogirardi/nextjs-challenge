export function normalizeName(name: string | null) {
  if (!name) return ""
  const words = name.split(" ")
  const normalizedWords = words.map((word) => {
    const lowerCaseWord = word.toLowerCase()
    const firstLetterUpperCase = lowerCaseWord.charAt(0).toUpperCase()
    const restOfWord = lowerCaseWord.slice(1)
    return firstLetterUpperCase + restOfWord
  })
  return normalizedWords.join(" ")
}
