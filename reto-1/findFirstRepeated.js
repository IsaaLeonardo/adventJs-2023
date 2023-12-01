export function findFirstRepeated(gifts) {
  const registeredIds = new Set()

  for (const gift of gifts) {
    // Evaluate
    if (registeredIds.has(gift)) {
      return gift
    }
    
    // Remember
    registeredIds.add(gift)
  }

  return -1
}
