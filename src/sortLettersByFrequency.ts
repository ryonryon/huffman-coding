export function sortLettersByFrequency(
  frequency: Record<string, number>
): Array<[number, string]> {
  const letters: Array<[number, string]> = [];

  for (const key of Object.keys(frequency)) {
    letters.push([frequency[key], key]);
  }
  letters.sort((a, b) => a[0] - b[0]);

  return letters;
}
