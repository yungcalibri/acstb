import Box from "components/Box";
import Cluster from "components/Cluster";
import Stack from "components/Stack";
import Head from "next/head";
import LineItem from "./components/LineItem";

const copy = {
  title: "Andrew Stebenné - Web Developer",
  summary: "I'm a software engineer, and my forté is building websites.",
};

const skills = [
  ["Next.js", 3],
  ["React.js", 6],
  ["JavaScript", 6],
  ["Node.js", 6],
  ["HTML", 6],
  ["CSS", 6],
  ["Project Management", 1],
  ["Continuous Integration", 2],
  ["Continuous Delivery", 1],
  ["Git", 6],
  ["GitHub", 6],
  ["Vim", 10],
];

export default function Resume() {
  return (
    <article id="resume" className="h-resume">
      <Head>
        <title>{copy.title}</title>
        <meta property="og:title" content={copy.title} key="title" />
        <meta name="description" content={copy.summary} key="description" />
      </Head>
      <h1 className="p-name">{copy.title}</h1>
      <div className="p-summary">
        <p>{copy.summary}</p>
        <p>
          I consider software engineering to be a craft. I have a thorough
          understanding of HTML, CSS, and JavaScript, and I can harness them
          effectively. I go to great pains in building <em>truly responsive</em>{" "}
          websites which maintain a unique and consistent voice{"\u2014"}on any
          device, for any reader.
        </p>
      </div>

      <h2>Skills</h2>
      <Cluster space="var(--s0)">
        {skills.map(([skill, time]) => (
          <Box
            borderWidth="var(--s-4)"
            padding="0"
            className="p-skill display:flex"
            key={skill}>
            <span style={{ padding: "var(--s-1)" }}>{skill}</span>
            {time && (
              <div className="invert" style={{ padding: "var(--s-1)" }}>
                {time}yr.
              </div>
            )}
          </Box>
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
            features throughout AEDIT's Web platform, from a new editorial blog
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
            Contributed new features and improvements to Domio's primary booking
            product, and sharpened my understanding of React.js and Web
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
            XOJet's internal Web apps, enabling the booking team to price simple
            even the most complex flights faster than ever before.
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
    </article>
  );
}

export async function getServerSideProps(context) {
  const {
    params,
    req,
    res,
    query,
    preview,
    previewData,
    resolvedUrl,
  } = context;

  console.debug(Object.keys(req.cookies));

  // const headers = new Map(Object.entries(req.cookies));
  // if (!headers.has(TICKET_HEADER)) {
  //   console.debug("missing x-acstb-ticket");
  //   res.setCookie(TICKET_HEADER, "PORCELANOSA");
  // } else {
  //   console.debug("has x-acstb-ticket");
  //   return {
  //     props: {},
  //   };
  // }

  return {
    // notFound: true,
    props: {},
  };
}
