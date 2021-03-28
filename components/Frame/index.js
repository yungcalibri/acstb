import { propStyles } from "util/style";

const separators = /[/:]/;
const getRatioValues = (raw) => {
  if (!raw) {
    return [undefined, undefined];
  }
  const ratioSplit = raw.split(separators);
  if (ratioSplit.length !== 2) {
    throw new Error(`Ratio ${raw} is invalid for Frame`);
  }
  return ratioSplit.map(Number);
};

/**
 * @typedef {Object} FrameProps
 * @prop {string=} ratio - Aspect ratio for the frame, e.g.: "4:3", "13/7". Defaults to "16:9".
 */

/**
 * Creates a box with a specified aspect ratio, and crops content to fit. Cropping is destructive, so don't use this for critical content.
 * @param {FrameProps} props
 */
const Frame = (props) => {
  const { children, ratio: rawRatio } = props;

  const [numerator, denominator] = getRatioValues(rawRatio);

  return (
    <div>
      {children}
      <style jsx>{`
        .frame {
          ${propStyles(
            [numerator, "--aspect-numerator"],
            [denominator, "--aspect-denominator"]
          )}
        }
      `}</style>
    </div>
  );
};

export default Frame;
