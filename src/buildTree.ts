import { Huffman } from "./Huffman";
import { PriorityQueue } from "./PriorityQueue";

export function buildTree(letters: Array<[number, string]>): Huffman {
  const huffmanList = letters.map(
    (l) =>
      new Huffman({
        char: l[1],
        frequency: l[0],
      })
  );
  const minHeap = new PriorityQueue<Huffman>(
    huffmanList,
    (huffman1, huffman2) => huffman1.frequency < huffman2.frequency
  );

  while (1 < minHeap.size()) {
    const first = minHeap.pop()!;
    const second = minHeap.pop()!;

    const combined = new Huffman({
      char: "",
      frequency: first.frequency + second.frequency,
    });

    combined.left = first;
    combined.right = second;
    minHeap.add(combined);
  }

  return minHeap.pop()!;
}
