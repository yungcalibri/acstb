import Cover from "components/Cover";

export default function Error500() {
  return (
    <Cover minHeight="80vh">
      <div className="centered">
        <h1>Error 500</h1>
        <p>
          The server encountered an error while attempting to show you this
          page. Please try again later.
        </p>
      </div>
    </Cover>
  );
}
