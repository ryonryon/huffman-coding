export class Huffman {
  char: string;
  frequency: number;

  left: Huffman | null;
  right: Huffman | null;

  constructor({ char, frequency }: { char: string; frequency: number }) {
    this.char = char;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}
