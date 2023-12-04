export function manufacture(gifts, materials) {
  const result = []

  for (const gift of gifts) {
    for (const characterIndex in gift) {
      // Don't add it to result
      if (!materials.includes(gift[characterIndex]))
        break
      
      // Keep evaluating
      if (characterIndex != gift.length - 1)
        continue

      // Add it to result
      result.push(gift)
    }
  }

  return result
}
