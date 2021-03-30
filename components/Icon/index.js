/**
 * @typedef {Object} IconProps
 * @prop {boolean=} head - Whether to render the icon before its children. Applies `dir
 * @prop {boolean=} focusable
 * @prop {string} iconId - The ID of the SVG to reference in the icons file
 * @prop {string=} label - Applied `aria-label`. When applied, the icon will also get `role="img"`.
 */

/**
 * An SVG icon, with accompanying text as children. The SVG is displayed after children (or before, if `head` is applied). The `iconId` prop indicates the id of the SVG to reference in `/public/images/icons.svg`.
 * @param {IconProps} props
 */
const Icon = (props) => {
  const { children, className = "", head, iconId, label, ...rest } = props;
  if (!iconId) {
    throw new Error("Icon element requires iconId prop");
  }
  const myClass = `icon-container ${head ? "reverse" : ""} ${className}`;
  const myUrl = `/images/icons.svg#${iconId}`;

  return (
    <div
      className={myClass}
      role={label ? "img" : ""}
      aria-label={label || ""}
      {...rest}>
      {children}
      <svg className="icon" style={{ color: "currentColor" }}>
        <use xlinkHref={myUrl}></use>
      </svg>
    </div>
  );
};

export default Icon;
