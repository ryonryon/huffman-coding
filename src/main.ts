import { getFrequency } from "./getFrequency";
import { buildTree } from "./buildTree";
import { getCodeMap } from "./getCodeMap";
import { encode } from "./encode";
import { decode } from "./decode";

(function () {
  const testString = "hello world";
  const freq = getFrequency(testString);
  const tree = buildTree(freq);
  const codeMap = getCodeMap(tree);
  const encoded = encode(testString, codeMap);
  const decoded = decode(tree, encoded);

  console.log("encoded", encoded);
  console.log("decoded", decoded);
})();
