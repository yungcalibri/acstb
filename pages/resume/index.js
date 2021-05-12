import Head from "next/head";
import Box from "components/Box";
import Cluster from "components/Cluster";
import Stack from "components/Stack";
import Icon from "components/Icon";
import LineItem from "./components/LineItem";
import Skill from "./components/Skill";

const copy = {
  name: "Andrew Stebenné",
  job: "Web Developer",
  title: "Andrew Stebenné - Web Developer",
  summary: "I'm a software engineer, and my forté is building websites.",
};

const skills = [
  ["Next.js", 3],
  ["React.js", 6],
  ["JavaScript", 6],
  ["CI/CD", 2],
  ["Node.js", 6],
  ["HTML", 6],
  ["CSS", 6],
  ["Git", 6],
  ["GitHub", 6],
  ["Project Management", 1],
  ["Vim", 10],
  ["REST APIs", 6],
  ["GraphQL", 1],
];
const sortedSkills = skills.sort(([_0, y0], [_1, y1]) => y1 - y0);

const Resume = () => (
  <article id="resume" className="h-resume">
    <Head>
      <title>{copy.title}</title>
      <meta name="description" content={copy.summary} key="description" />
      <link rel="canonical" href="https://acstb.name/resume" key="canonical" />
      <meta property="og:title" content={copy.title} key="og:title" />
      <meta property="og:type" content="profile" key="og:type" />
      <meta
        property="og:url"
        content="https://acstb.name/resume"
        key="og:url"
      />
    </Head>
    <header>
      <h1 className="p-name">{copy.name}</h1>
      <strong className="p-category">{copy.job}</strong>
    </header>
    <main>
      <div className="p-summary">
        <p>{copy.summary}</p>
        <p>
          I consider software engineering to be a craft. I have a thorough
          understanding of HTML, CSS, and JavaScript, and I can harness them
          effectively. I go to great pains in building <em>truly responsive</em>{" "}
          websites which present a unique and consistent voice{"\u2014"}on any
          device, for any reader.
        </p>
      </div>

      <h2>Skills</h2>
      <Cluster space="var(--s0)">
        {skills.map(([name, years]) => (
          <Skill name={name} years={years} key={name} />
        ))}
      </Cluster>

      <h2>Experience</h2>
      <Stack space="var(--s1)" asList className="max-width:var(--measure)">
        <LineItem
          start="2019"
          end="2021"
          url="https://aedit.com/"
          mainHeading="Senior Software Engineer at AEDIT"
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">New York</span>
              {", "}
              <span className="p-region">New York</span>
              {", "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            Worked one-on-one with designers and stakeholders to implement new
            features throughout AEDIT's Web presence, from a new editorial blog
            platform to a full person-to-person video chat app.
          </p>
        </LineItem>
        <LineItem
          start="2018"
          end="2019"
          url="https://domio.com/"
          mainHeading="Software Engineer at Domio"
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">New York</span>
              {", "}
              <span className="p-region">New York</span>
              {", "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            Contributed new features and improvements to Domio's primary hotel
            booking Web app, and sharpened my understanding of React.js and Web
            fundamentals.
          </p>
        </LineItem>
        <LineItem
          className="p-experience"
          start="2015"
          end="2018"
          url="https://xojet.com/"
          mainHeading="Software Engineer at XOJet"
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">Sacramento</span>
              {", "}
              <span className="p-region">California</span>
              {", "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            As a member of a small tech team, contributed major features to
            XOJet's internal Web apps, enabling their booking team to price even
            the most complex flights faster than ever before.
          </p>
        </LineItem>
      </Stack>

      <h2>Education</h2>
      <Stack space="var(--s1)" asList className="max-width:var(--measure)">
        <LineItem
          className="p-education"
          start="2012"
          end="2017"
          url="https://nau.edu/"
          mainHeading="Northern Arizona University"
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">Flagstaff</span>,{" "}
              <span className="p-region">Arizona</span>,{" "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            Two courses of study:{" "}
            <span className="p-name">
              Computer Science and Comparative Cultural Studies
            </span>
            .
          </p>
        </LineItem>

        <LineItem
          className="p-education"
          start="2015"
          end="2016"
          url="http://english.cqupt.edu.cn/"
          mainHeading="Chongqing University of Posts and Telecommunications "
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">Nanshan</span>,{" "}
              <span className="p-region">Chongqing</span>,{" "}
              <span className="p-country-name">China</span>
            </div>
          }>
          <p>
            Exchange program:{" "}
            <span className="p-name">
              Chinese Language and Culture, and Computer Science
            </span>
            .
          </p>
        </LineItem>
      </Stack>

      <div className="p-contact h-card">
        <h2>Contact Me</h2>
        <p className="p-name display:none">
          <span className="p-given-name">Andrew</span>
          <span className="p-family-name"> Stebenné</span>
        </p>
        <p className="p-category display:none">{copy.job}</p>
        <a className="u-url u-uid display:none" href="https://acstb.name/">
          https://acstb.name
        </a>
        <a href="mailto:arthropodSeven@pm.me">
          <Icon iconId="envelope">
            <span className="u-email">arthropodSeven@pm.me</span>
          </Icon>
        </a>
        <p className="p-adr h-adr display:none">
          <span className="p-locality">Highland Park</span>
          {", "}
          <span className="p-region">New Jersey</span>
          <span className="p-country-name">United States</span>
        </p>
      </div>
    </main>
  </article>
);

export default Resume;
