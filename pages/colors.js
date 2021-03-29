import React from "react";

const Colors = (props) => {
  const { colors } = props;

  return (
    <div>
      <h2>Colors Demo</h2>
      <main>
        {colors.map((name) => (
          <React.Fragment key={name}>
            <h3>
              <code>{name}</code>
            </h3>
            <p style={{ backgroundColor: `var(--${name})` }}>
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

export async function getServerSideProps() {
  return {
    props: {
      colors: [
        "white",
        "black",
        "lighter-black",
        "blue",
        "desaturated-blue",
        "violet",
        "desaturated-violet",
      ],
    },
  };
}
