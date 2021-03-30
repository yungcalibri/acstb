import { propStyles } from "util/style";

/**
 * @typedef {Object} ImopstorProps
 * @prop {boolean=} breakout - Whether the Impostor is allowed to break out of its container
 * @prop {boolean=} fixed - Whether to position the Impostor relative to the viewport
 * @prop {string=} margin - Space between the Impostor's outer edge and the inner edge of its container. Only applicable when `breakout` is not applied
 */

/**
 * Used to overlay something atop other content, as in e.g. a dialog box.
 * @todo Ensure the Impostor meets the relevant WCAG standard for accessible dialogs: https://www.w3.org/TR/wai-aria-practices/#dialog_modal
 * @param {ImpostorProps} props
 */
const Impostor = (props) => {
  const { breakout, children, className = "", fixed, margin, ...rest } = props;

  const myClass = `impostor ${!breakout ? "contain" : ""} ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .impostor {
          ${propStyles([margin, "--margin"], [fixed, "position: fixed"])}
        }
      `}</style>
    </div>
  );
};

export default Impostor;
