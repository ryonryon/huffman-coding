import { Huffman } from "./Huffman";

export function decode(node: Huffman, str: string): string {
  let output = "";
  let currentNode = node;

  for (let i = 0; i < str.length; i++) {
    currentNode = str[i] === "0" ? currentNode.left : currentNode.right;

    if (currentNode.char !== "") {
      output += currentNode.char;
      currentNode = node;
    }
  }

  return output;
}
