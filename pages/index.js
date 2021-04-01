import Avatar from "components/Avatar";
import ContactMe from "components/ContactMe";
import Sidebar from "components/Sidebar";
import Cover from "components/Cover";

const Home = () => (
  <article id="home">
    <Cover minHeight="60vh" noPad>
      <h1>I'm Andrew Stebenné.</h1>
      <Sidebar
        className="centered"
        space="var(--s1)"
        contentMin="50%"
        side="right"
        noStretch>
        <div>
          <section>
            <p>
              I'm a programmer by trade. Most of my work has been building Web
              frontends, but I take pleasure in solving interesting problems of
              any type.
            </p>
            <p>You can get in touch with me here:</p>
            <ContactMe />
          </section>
          <div>
            <Avatar />
          </div>
        </div>
      </Sidebar>
    </Cover>
  </article>
);

export default Home;
