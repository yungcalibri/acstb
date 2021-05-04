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
      <ul className="p-experience"></ul>
      <h2>Education</h2>
      <ul className="p-education"></ul>
    </article>
  );
}
