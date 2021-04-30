const Test = (props) => {
  const { className = "", ...rest } = props;

  return (
    <div id="test" className={className} {...rest}>
      <h1>This is my test page</h1>
    </div>
  );
};

export default Test;

export async function getStaticProps() {
  if (process.env.VERCEL_ENV === "development") {
    return { props: {} };
  }
  return { notFound: true };
}
