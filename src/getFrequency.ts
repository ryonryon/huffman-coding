export function getFrequency(str: string): Record<string, number> {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    frequency[char] = (frequency[char] ?? 0) + 1;
  }

  return frequency;
}
