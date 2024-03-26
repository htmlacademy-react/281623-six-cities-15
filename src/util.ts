export function getRatingStars(rating: number, maxRating: number) {
  return Math.round(rating / maxRating * 100);
}

