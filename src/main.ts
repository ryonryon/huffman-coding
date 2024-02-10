import { getFrequency } from "./getFrequency";
import { sortLettersByFrequency } from "./sortLettersByFrequency";
import { buildTree } from "./buildTree";
import { getCodeMap } from "./getCodeMap";
import { encode } from "./encode";
import { decode } from "./decode";

(function () {
  const testString = "hello world";
  const freq = getFrequency(testString);
  const sorted = sortLettersByFrequency(freq);
  const tree = buildTree(sorted);
  const codeMap = getCodeMap(tree);

  const encoded = encode(testString, codeMap);
  const decoded = decode(tree, encoded);

  console.log("tree", JSON.stringify(tree));
  // console.log("encoded", encoded);
  // console.log("decoded", decoded);
})();
