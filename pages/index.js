import Avatar from "components/Avatar";
import ContactMe from "components/ContactMe";
import Sidebar from "components/Sidebar";
import Cover from "components/Cover";
import Link from "next/link";

const Home = () => (
  <article id="home">
    <Cover minHeight="80vh" noPad className="h-card">
      <h1>
        I'm{" "}
        <span className="p-name">
          <span className="p-given-name">Andrew</span>{" "}
          <span className="p-family-name">Stebenné</span>
        </span>
        .
      </h1>
      <Sidebar
        className="centered"
        space="var(--s2)"
        contentMin="60%"
        side="left">
        <div className="align-items:center">
          <div>
            <Avatar className="u-photo" />
          </div>
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
              of adamant opinions about modern history.
            </p>
            <p>
              By trade I'm a programmer. I primarily build websites with
              Next.js, but I take pleasure in solving interesting problems of
              any type.{" "}
            </p>
            <p>I can be reached at any of these links:</p>
            <ContactMe />
            <p>
              <Link href="/resume">
                <a>My resume</a>
              </Link>{" "}
              is also available.
            </p>

            <p>
              Or look for me online, under{" "}
              <em>
                <span className="p-nickname">
                  @<span className="value">arthropodSeven</span>
                </span>
              </em>{" "}
              or{" "}
              <em>
                <span className="p-nickname">
                  @<span className="value">acstb</span>
                </span>
                ,
              </em>{" "}
              wherever fine nicknames are used.
            </p>
          </div>
        </div>
      </Sidebar>
      <p>There will be blog posts here soon.</p>
    </Cover>
  </article>
);

export default Home;
