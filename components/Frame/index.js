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
