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
    <div className={`${className} line-item h-event display:flex`}>
      <div className="invert-title">
        <small>
          <strong>
            <time className="dt-end" dateTime={end}>
              {endDisplay || end}
            </time>
          </strong>
        </small>
        <b className="dotted-line" />
        <small>
          <strong>
            <time className="dt-start" dateTime={start}>
              {startDisplay || start}
            </time>
          </strong>
        </small>
      </div>
      <Box padding="var(--s-1)" borderWidth="var(--s-4)">
        <div className="p-location h-card">
          <a className="u-url p-name" href={url}>
            <strong>{mainHeading}</strong>
          </a>{" "}
          <small>{location}</small>
        </div>
        <p>{children}</p>
      </Box>
    </div>
  );
};

export default LineItem;
