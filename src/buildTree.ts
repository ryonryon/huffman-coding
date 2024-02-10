import { Huffman } from "./Huffman";
import { PriorityQueue } from "./PriorityQueue";

export function buildTree(frequencies: Record<string, number>): Huffman {
  const huffmanArr = [];
  for (const char of Object.keys(frequencies)) {
    huffmanArr.push(
      new Huffman({
        char,
        frequency: frequencies[char],
      })
    );
  }

  const pq = new PriorityQueue<Huffman>(
    huffmanArr,
    (a, b) => a.frequency < b.frequency
  );

  while (pq.size() > 1) {
    const first = pq.pop();
    const second = pq.pop();

    const node = new Huffman({
      char: "",
      frequency: first.frequency + second.frequency,
    });
    node.left = first;
    node.right = second;

    pq.add(node);
  }

  return pq.pop()!;
}
