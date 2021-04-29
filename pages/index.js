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
            <p className="p-note">
              My friends know me as a quiet person, possessed of great hair and
              adamant opinions about modern history.
            </p>
            <p>
              By trade I'm a programmer, mostly building Web frontends with
              React, but I take pleasure in solving interesting problems of any
              type.
            </p>
            <p>Contact:</p>
            <ContactMe />
            <p>
              Or look for{" "}
              <em>
                <span className="p-nickname">arthropodSeven</span>
              </em>{" "}
              wherever fine nicknames are used.
            </p>
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
