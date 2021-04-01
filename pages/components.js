import Box from "components/Box";
import Cluster from "components/Cluster";
import Reel from "components/Reel";
import Stack from "components/Stack";
import Switcher from "components/Switcher";
import { natoRange } from "util/misc";

const Components = () => {
  return (
    <article id="components">
      <h1>Components test page</h1>
      <h2>Reel with three elements</h2>
      <Reel>
        {natoRange(4).map((content) => (
          <Box key={content} padding="var(--s2)">
            <p>{content}</p>
          </Box>
        ))}
      </Reel>

      <h2>Reel with ten elements</h2>
      <Reel>
        {natoRange(10).map((content) => (
          <Box key={content} padding="var(--s2)">
            <p>{content}</p>
          </Box>
        ))}
      </Reel>

      <h2>
        Cluster with <code>justify-content: space-evenly</code>
      </h2>
      <Cluster justify="space-evenly" align="center" space="var(--s3)">
        <Box padding="var(--s1)">Alpha</Box>
        <Box>Bravo</Box>
        <Box>Charlie</Box>
        <Box>Delta</Box>
        <Box>Echo</Box>
        <Box>Foxtrot</Box>
      </Cluster>

      <h2>
        Cluster with <code>justify-content: space-around</code> and{" "}
        <code>align-items: flex-end</code>
      </h2>
      <Cluster justify="space-around" align="flex-end" space="var(--s3)">
        <Box>Alpha</Box>
        <Box>Bravo</Box>
        <Box>Charlie</Box>
        <Box padding="var(--s1)">Delta</Box>
        <Box>Echo</Box>
        <Box>Foxtrot</Box>
      </Cluster>

      <h2>Switcher with seven items</h2>
      <Switcher>
        <Box>Alpha</Box>
        <Box>Bravo</Box>
        <Box>Charlie</Box>
        <Box>Delta</Box>
        <Box>Echo</Box>
        <Box>Foxtrot</Box>
      </Switcher>

      <div>
        <Stack space="var(--s4)" asList splitAfter="3">
          <p>1</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div>
            <p>5</p>
            <p>8</p>
            <p>13</p>
          </div>
        </Stack>
      </div>
      <Box borderWidth="var(--s-2)">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        </p>
      </Box>
    </article>
  );
};

export default Components;

export async function getServerSideProps() {
  if (!process.env.NODE_ENV === "development") {
    return {
      notFound: true,
    };
  }

  return {
    notFound: !process.env.NODE_ENV === "development",
    props: {},
  };
}
