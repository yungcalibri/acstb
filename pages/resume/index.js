import Box from "components/Box";
import Sidebar from "components/Sidebar";
import Stack from "components/Stack";
import Head from "next/head";
import LineItem from "./components/LineItem";

const copy = {
  title: "Andrew Stebenné - Web Developer",
  summary:
    "I'm a skilled software engineer, and my forté is building websites. I care about my craft, and I go the extra mile to do it properly.",
};

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
          I have a thorough understanding of HTML, CSS, and JavaScript, and I go
          to great pains in building truly responsive websites, which maintain a
          unique and consistent voice on any device.
        </p>
      </div>

      <h2>Skills</h2>

      <h2>Experience</h2>
      <ul className="p-experience">
        <li>AEDIT 2019-2021</li>
        <li>Domio 2018-2019</li>
        <li>XOJet 2015-2018</li>
      </ul>

      <h2>Education</h2>
      <Stack space="var(--s-1)" asList className="max-width:var(--measure)">
        <LineItem
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
          <span>
            Two courses of study:{" "}
            <span className="p-name">
              Computer Science and Comparative Cultural Studies
            </span>
            .
          </span>
        </LineItem>

        <LineItem
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
          <span>
            Exchange program:{" "}
            <span className="p-name">
              Chinese Language and Culture, and Computer Science
            </span>
            .
          </span>
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
