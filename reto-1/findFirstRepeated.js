function findFirstRepeated(gifts) {
  const registeredIds = []

  for (const gift of gifts) {
    // Evaluate
    if (registeredIds.includes(gift)) {
      return gift
    }
    
    // Remember
    registeredIds.push(gift)
  }

  return -1
}
