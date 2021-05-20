import Cover from "components/Cover";

export default function Error404() {
  return (
    <Cover minHeight="80vh">
      <div className="centered">
        <h1>Error 404</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </Cover>
  );
}
