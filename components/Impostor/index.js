import Icon from "components/Icon";
import { useEffect } from "react";
import { propStyles } from "util/style";

/**
 * @typedef {Object} ImpostorProps
 * @prop {string=} borderWidth - Impostor box's border width. Set to "0" to disable the border.
 * @prop {boolean=} breakout - Whether the Impostor is allowed to break out of its container
 * @prop {boolean=} fixed - Whether to position the Impostor relative to the viewport
 * @prop {boolean=} isOpen - Whether the Impostor is currently visible
 * @prop {string=} margin - Space between the Impostor's outer edge and the inner edge of its container. Only applicable when `breakout` is not applied
 * @prop {function} onRequestClose - Function to call when the user tries to close the Impostor. Mandatory.
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
    isOpen,
    fixed,
    margin,
    onRequestClose,
    padding,
    role = "dialog",
    ...rest
  } = props;

  validateOnRequestClose(onRequestClose);
  validateRole(role);

  useEffect(() => {
    if (!isOpen) {
      return () => undefined;
    }

    function closeOnEscape(kd) {
      if (kd.key === "Escape") {
        onRequestClose();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onRequestClose]);

  const myClass = `impostor ${!breakout ? "contain" : ""} ${className}`;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={myClass} role={role} {...rest}>
      <div className="display:flex flex-direction:row-reverse">
        <button name="close-dialog" onClick={onRequestClose}>
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

function validateOnRequestClose(orc) {
  if (orc instanceof Function) {
    return;
  }
  throw new Error(
    "Impostor's onRequestClose prop must be provided, and must be a function"
  );
}

function validateRole(role) {
  if (role === "dialog" || role === "alertdialog") {
    return;
  }
  throw new Error("Impostor's role must be 'dialog' or 'alertdialog'");
}
