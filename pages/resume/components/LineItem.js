import Box from "components/Box";

const LineItem = (props) => {
  const {
    children,
    className = "",
    start,
    startDisplay,
    end,
    endDisplay,
    url,
    mainHeading,
    location,
  } = props;

  return (
    <Box
      borderWidth="var(--s-4)"
      padding="0"
      className={`${className} line-item h-event display:flex`}>
      <div className="invert-title" style={{ padding: "var(--s-1)" }}>
        <strong>
          <time className="dt-start" dateTime={start}>
            {startDisplay || start}
          </time>
          {" - "}
          <time className="dt-end" dateTime={end}>
            {endDisplay || end}
          </time>
        </strong>
      </div>
      <div
        style={{
          padding: "var(--s-1)",
        }}>
        <div className="p-location h-card">
          <a className="u-url p-name" href={url}>
            <strong>{mainHeading}</strong>
          </a>{" "}
          <small>{location}</small>
        </div>
        <p>{children}</p>
      </div>
    </Box>
  );
};

export default LineItem;
