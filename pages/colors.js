import React from "react";

const COLORS = [
  "white",
  "gray",
  "black",
  "lighter-black",
  "blue",
  "desaturated-blue",
  "violet",
  "desaturated-violet",
];

const Colors = () => {
  return (
    <div>
      <h2>Colors Demo</h2>
      <main>
        {COLORS.map((name) => (
          <React.Fragment key={name}>
            <h3>
              <code>{name}</code>
            </h3>
            <p
              style={{
                color: "transparent",
                backgroundColor: `var(--${name})`,
              }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
          </React.Fragment>
        ))}
      </main>
    </div>
  );
};

export default Colors;
