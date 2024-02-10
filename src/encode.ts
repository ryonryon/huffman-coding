export function encode(str: string, codes: Record<string, string>): string {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += codes[str[i]];
  }

  return output;
}
