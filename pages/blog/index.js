import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

/**
 * Lists all available blog entries.
 * @todo import metadata/frontmatter from entries and show post title in link body
 * @todo test during deployment to validate that each entry is made visible on this page
 */
const BlogIndex = ({ entryPaths }) => {
  return (
    <article id="blog-index">
      <h1>Blog Entries Index</h1>
      <ul>
        {/*   {entryPaths.map((path) => ( */}
        {/*     <li key={path}> */}
        {/*       <Link href={path}> */}
        {/*         <a>{path}</a> */}
        {/*       </Link> */}
        {/*     </li> */}
        {/*   ))} */}
      </ul>
      <p>There's nothing here yet!</p>
    </article>
  );
};

export default BlogIndex;

const validFileTypes = /\.(js|jsx|mdx)$/;
export async function getStaticProps() {
  const blogPath = path.join(process.cwd(), "pages/blog");
  const pathContents = await fs.readdir(blogPath);

  const entryPaths = pathContents
    .filter((filename) => !/^index/.test(filename))
    .filter((filename) => validFileTypes.test(filename))
    .map((filename) => filename.replace(validFileTypes, ""))
    .map((filename) => `/blog/${filename}`);

  return {
    props: {
      entryPaths,
    },
  };
}
