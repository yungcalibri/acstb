/**
 * @typedef {Object} IconProps
 * @prop {boolean=} head - Whether to render the icon before its children. Applies `dir
 * @prop {boolean=} focusable
 * @prop {string} iconId - The ID of the SVG to reference in the icons file
 * @prop {string=} label - Applied `aria-label`. When applied, the icon will also get `role="img"`.
 * @prop {boolean=} lower - Use `true` if the icon appears next to a fully lowercase string. Applies `vertical-align: middle`.
 */

/**
 * An SVG icon, with accompanying text as children. The SVG is displayed after children (or before, if `head` is applied). The `iconId` prop indicates the id of the SVG to reference in `/public/images/icons.svg`.
 * @param {IconProps} props
 */
const Icon = (props) => {
  const {
    children,
    className = "",
    head,
    iconId,
    label,
    lower,
    ...rest
  } = props;
  if (!iconId) {
    throw new Error("Icon element requires iconId prop");
  }
  const myClass = [
    "icon-container",
    head ? "reverse" : "",
    lower ? "v-middle" : "",
    className,
  ].join(" ");
  const myUrl = `/images/icons.svg#${iconId}`;

  return (
    <span
      className={myClass}
      role={label ? "img" : ""}
      aria-label={label || ""}
      {...rest}>
      {children}{" "}
      <svg className="icon">
        <use xlinkHref={myUrl}></use>
      </svg>
    </span>
  );
};

export default Icon;
