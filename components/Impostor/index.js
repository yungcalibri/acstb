import Icon from "components/Icon";
import { propStyles } from "util/style";

/**
 * @typedef {Object} ImpostorProps
 * @prop {string=} borderWidth - Impostor box's border width. Set to "0" to disable the border.
 * @prop {boolean=} breakout - Whether the Impostor is allowed to break out of its container
 * @prop {boolean=} fixed - Whether to position the Impostor relative to the viewport
 * @prop {string=} margin - Space between the Impostor's outer edge and the inner edge of its container. Only applicable when `breakout` is not applied
 * @prop {string=} padding - Padding for the Impostor box. Defaults to `var(--s0)`.
 */

/**
 * Used to overlay something atop other content, as in e.g. a dialog box.
 * @todo Ensure the Impostor meets the relevant WCAG standard for accessible dialogs: https://www.w3.org/TR/wai-aria-practices/#dialog_modal
 * @param {ImpostorProps} props
 */
const Impostor = (props) => {
  const {
    borderWidth,
    breakout,
    children,
    className = "",
    fixed,
    margin,
    padding,
    role = "dialog",
    ...rest
  } = props;

  validateRole(role);

  const myClass = `impostor ${!breakout ? "contain" : ""} ${className}`;

  return (
    <div className={myClass} role={role} {...rest}>
      <div className="display:flex flex-direction:row-reverse">
        <button name="close-dialog">
          <Icon iconId="close">Close</Icon>
        </button>
      </div>
      {children}
      <style jsx>{`
        .impostor {
          ${propStyles(
            [margin, "--margin"],
            [fixed, "position: fixed"],
            [borderWidth, "--border-width"],
            [padding, "--padding"]
          )}
        }
      `}</style>
    </div>
  );
};

export default Impostor;

function validateRole(role) {
  if (role === "dialog" || role === "alertdialog") {
    return;
  }
  throw new Error("Impostor's role must be 'dialog' or 'alertdialog'");
}
