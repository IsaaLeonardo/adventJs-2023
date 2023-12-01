export function findFirstRepeated(gifts) {
  const registeredIds = []
  let giftRepeated = -1

  for (const gift of gifts) {
    // Evaluate
    if (registeredIds.includes(gift)) {
      giftRepeated = gift
      break
    }
    
    // Remember
    registeredIds.push(gift)
  }

  return giftRepeated
}
