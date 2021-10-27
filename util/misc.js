import range from "lodash/range";
import { nato } from "constants/index";

export function natoRange(...args) {
  const inputRange = range(...args);
  const safeRange = inputRange
    .map((a) => Math.abs(a))
    .map((a) => a % 26)
    .filter(Boolean);
  return safeRange.map((val) => {
    return nato.get(val);
  });
}
