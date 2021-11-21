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
        side="left"
        alignItems="center">
        <div>
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
              My friends know me as a man possessed of great hair and of adamant
              opinions about modern history. My wife, an incredible{" "}
              <em className="glow">ingénue</em> to whom I am profoundly
              indebted, knows me mainly as a nuisance{`\u2014`}and sometimes,
              hopefully, as a helpful presence around the house. ♒️ ♒️
            </p>
            <p>
              By trade I'm a programmer. I primarily build websites with
              Next.js, but I take pleasure in solving interesting problems of
              any type.{" "}
              <Link href="/resume">
                <a>My resume</a>
              </Link>{" "}
              is available.
            </p>
            <p>I can be reached at any of these links:</p>
            <ContactMe />
            <p></p>

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
      <p>
        I'm still working out what I'd be interested in blogging about here, but
        for the one person who's paying attention, trust that it's still on my
        mind. 🙂
      </p>
    </Cover>
  </article>
);

export default Home;
