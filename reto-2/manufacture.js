export function manufacture(gifts, materials) {
  return gifts.filter(
    gift => gift.split('').every(character => materials.includes(character))
  );
}
