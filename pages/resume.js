import Box from "components/Box";
import Sidebar from "components/Sidebar";
import Stack from "components/Stack";
import Head from "next/head";

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
      <p className="p-summary">{copy.summary}</p>
      <h2>Skills</h2>
      <p>
        I'm an expert at{" "}
        <span className="p-skill">
          building scalable and maintainable React apps with Next.js
        </span>
        . I have a{" "}
        <span className="p-skill">
          thorough understanding of HTML, CSS, and JavaScript
        </span>
        , and I go to great pains in{" "}
        <span className="p-skill">
          building truly responsive websites, which maintain a unique and
          consistent voice on any device
        </span>
        .
      </p>
      <h2>Experience</h2>
      <ul className="p-experience">
        <li>AEDIT 2019-2021</li>
        <li>Domio 2018-2019</li>
        <li>XOJet 2015-2018</li>
      </ul>
      <h2>Education</h2>
      <Stack space="var(--s-1)" asList className="max-width:var(--measure)">
        <Box borderWidth="var(--s-4)" padding="var(--s0)">
          <Sidebar contentMin="75%" space="var(--s-1)">
            <div className="p-education h-event">
              <div className="text-align:center">
                <time className="dt-start" dateTime="2012">
                  2012
                </time>
                {" - "}
                <time className="dt-end" dateTime="2017">
                  2017
                </time>
                <hr />
              </div>
              <div style={{ paddingInline: "var(--s0)" }}>
                <div className="p-location h-card">
                  <a className="u-url" href="https://nau.edu/">
                    <strong className="p-name">
                      Northern Arizona University
                    </strong>
                  </a>{" "}
                  <small>
                    <div className="p-adr h-adr">
                      <span className="p-locality">Flagstaff</span>,{" "}
                      <span className="p-region">Arizona</span>,{" "}
                      <span className="p-country-name">United States</span>
                    </div>
                  </small>
                </div>
                <p>
                  Two courses of study:{" "}
                  <span className="p-name">
                    Computer Science and Comparative Cultural Studies
                  </span>
                  .
                </p>
              </div>
            </div>
          </Sidebar>
        </Box>
        <Box borderWidth="var(--s-4)" padding="var(--s0)">
          <Sidebar contentMin="75%" space="var(--s-1)">
            <div className="p-education h-event">
              <div className="text-align:center">
                <time className="dt-start" dateTime="2015">
                  2015
                </time>
                {" - "}
                <time className="dt-end" dateTime="2016">
                  2016
                </time>
                <hr />
              </div>
              <div style={{ paddingInline: "var(--s0)" }}>
                <div className="p-location h-card">
                  <a className="u-url" href="http://english.cqupt.edu.cn">
                    <strong className="p-name">
                      Chongqing University of Posts and Telecommunications
                    </strong>
                  </a>
                  <div>
                    (<span className="p-name">重庆邮电大学</span>)
                  </div>
                  <small>
                    <div className="p-adr h-adr">
                      <span className="p-locality">Nanshan</span>,{" "}
                      <span className="p-region">Chongqing</span>,{" "}
                      <span className="p-country-name">China</span>
                    </div>
                  </small>
                </div>
                <p>
                  Exchange program:{" "}
                  <span className="p-name">
                    Chinese Language and Culture, and Computer Science
                  </span>
                  .
                </p>
              </div>
            </div>
          </Sidebar>
        </Box>
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
