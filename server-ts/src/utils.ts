/**
 * generate number in range of min to max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}
