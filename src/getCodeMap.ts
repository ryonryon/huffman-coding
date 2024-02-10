import { Huffman } from "./Huffman";

export function getCodeMap(tree: Huffman): Record<string, string> {
  const codes: Record<string, string> = {};

  function assignCodes(node: Huffman | null, pat = ""): void {
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {
      codes[node.char] = pat;

      return;
    }

    assignCodes(node.left, `${pat}0`);
    assignCodes(node.right, `${pat}1`);
  }

  assignCodes(tree);

  return codes;
}
