import Avatar from "components/Avatar";
import ContactMe from "components/ContactMe";
import Sidebar from "components/Sidebar";
import Cover from "components/Cover";
import Link from "next/link";

const Home = () => (
  <article id="home">
    <Cover minHeight="80vh" noPad className="h-card">
      <h1>
        I'm <span className="p-name">Andrew Stebenné</span>.
      </h1>
      <Sidebar
        className="centered"
        space="var(--s1)"
        contentMin="50%"
        side="right">
        <div className="align-items:center">
          <div>
            <p>
              This is my website,{" "}
              <Link href="/">
                <a className="u-url">acstb.name</a>
              </Link>
              .
            </p>
            <p>
              I'm a programmer by trade. My experience centers on building Web
              frontends with React, but I take pleasure in solving interesting
              problems of any type.
            </p>
            <p>
              In most places, you can look me up at @
              <span className="p-nickname">arthropodSeven</span>. Get in touch
              here:
            </p>
            <ContactMe />
          </div>
          <div>
            <Avatar className="u-photo" />
          </div>
        </div>
      </Sidebar>
      <p>There will be blog posts here soon.</p>
    </Cover>
  </article>
);

export default Home;
