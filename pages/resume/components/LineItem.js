import Box from "components/Box";

const LineItem = (props) => {
  const {
    children,
    className = "",
    start,
    startDisplay,
    end,
    endDisplay,
    toPresent = false,
    url,
    mainHeading,
    location,
  } = props;

  return (
    <div className={`${className} line-item h-event display:flex`}>
      <div className="invert">
        {toPresent ? (
          <Live />
        ) : (
          <small>
            <strong>
              <time className="dt-end" dateTime={end}>
                {endDisplay || end}
              </time>
            </strong>
          </small>
        )}
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
        {children}
      </Box>
    </div>
  );
};

const Live = () => (
  <>
    <div className="live">
      <div className="live-icon"></div>
    </div>
    <small className="live-text">
      <strong>Now</strong>
    </small>
  </>
);

export default LineItem;
