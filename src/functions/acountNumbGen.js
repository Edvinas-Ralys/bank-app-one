import rand from "./rand";
function acountNumbGen() {
  return `LT${rand(30, 80)} ${rand(1000, 9999)} ${rand(1000, 9999)} ${rand(
    1000,
    9999
  )} ${rand(1000, 9999)}`;
}

export default acountNumbGen;
