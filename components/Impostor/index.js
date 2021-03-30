import { propStyles } from "util/style";

/**
 * @typedef {Object} ImopstorProps
 * @prop {boolean=} fixed - Whether to position the Impostor relative to the viewport
 * @prop {string=} margin - Space between the Impostor's outer edge and the inner edge of its container
 */

/**
 * Used to overlay something atop other content, as in e.g. a dialog box.
 * @todo Ensure the Impostor meets the relevant WCAG standard for accessible dialogs: https://www.w3.org/TR/wai-aria-practices/#dialog_modal
 * @param {ImpostorProps} props
 */
const Impostor = (props) => {
  const { children, className = "", fixed, margin, ...rest } = props;

  const myClass = `impostor ${margin ? "contain" : ""} ${className}`;

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
