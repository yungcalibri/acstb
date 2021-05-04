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
        <meta
          property="og:title"
          content={`acstb.name - ${copy.title}`}
          key="title"
        />
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
        <li>alfa 20XX-20XX</li>
        <li>bravo 20XX-20XX</li>
        <li>charley 20XX-20XX</li>
        <li>delta 20XX-20XX</li>
      </ul>
      <h2>Education</h2>
      <ul className="p-education">
        <li className="h-event">
          <h3 className="p-name">Northern Arizona University</h3>{" "}
          <h4>
            <time className="dt-start" dateTime="2012">
              2012
            </time>{" "}
            -{" "}
            <time className="dt-end" dateTime="2017">
              2017
            </time>
          </h4>
          Computer Science and Comparative Cultural Studies.
        </li>
        <li className="h-event">
          <h3>
            <span className="p-name">
              Chongqing University of Posts and Telecommunications
            </span>{" "}
            <span className="p-name">(重庆邮电大学)</span>{" "}
          </h3>{" "}
          <h4>
            <time className="dt-start" dateTime="2012">
              2015
            </time>{" "}
            -{" "}
            <time className="dt-end" dateTime="2017">
              2016
            </time>
          </h4>
          Foreign exchange program.
        </li>
      </ul>
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
