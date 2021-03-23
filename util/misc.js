import { range } from "lodash";
import { nato } from "constants/index";

export function natoRange(...args) {
  const inputRange = range(...args);
  const safeRange = inputRange
    .map((a) => Math.abs(a))
    .map((a) => a % 26)
    .filter(Boolean);
  return safeRange.map(nato.get);
}
