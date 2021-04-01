import Avatar from "components/Avatar";
import ContactMe from "components/ContactMe";
import Sidebar from "components/Sidebar";
import Cover from "components/Cover";
import Link from "next/link";

const Home = () => (
  <article id="home">
    <Cover minHeight="60vh" noPad className="h-card">
      <h1>
        I'm <span className="p-name">Andrew Stebenné</span>.
      </h1>
      <Sidebar
        className="centered"
        space="var(--s1)"
        contentMin="50%"
        side="right"
        noStretch>
        <div>
          <section>
            <p>
              This is my website,{" "}
              <Link href="/">
                <a className="u-url">acstb.name</a>
              </Link>
              .
            </p>
            <p>
              I'm a programmer by trade. Most of my work has been building Web
              frontends, but I take pleasure in solving interesting problems of
              any type.
            </p>
            <p>
              In most places, you can look me up at @
              <span className="p-nickname">arthropodSeven</span>. You can get in
              touch with me here:
            </p>
            <ContactMe />
          </section>
          <div>
            <Avatar className="u-photo" />
          </div>
        </div>
      </Sidebar>
    </Cover>
  </article>
);

export default Home;
