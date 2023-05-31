import React from "react";
import Head from "next/head";
import Box from "components/Box";
import Cluster from "components/Cluster";
import Stack from "components/Stack";
import Icon from "components/Icon";
import LineItem from "./components/LineItem";
import Switcher from "components/Switcher";

const copy = {
  name: "Andrew Stebenné",
  job: "Web Developer",
  title: "Andrew Stebenné - Web Developer",
  summary: "I'm a software engineer, and my forté is building websites.",
};

const skills = [
  ["Next.js", 3],
  ["React.js", 8],
  ["JavaScript", 8],
  ["CI/CD", 2],
  ["Node.js", 6],
  ["HTML", 8],
  ["CSS", 8],
  ["Git", 8],
  ["GitHub", 8],
  ["Project Mgmt.", 1],
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
      <Switcher space="var(--s-2)">
        <div>
          <h1 className="p-name margin:0">{copy.name}</h1>
          <strong className="p-category">{copy.job}</strong>
        </div>
        <div>
          <a href="mailto:arthropodSeven@pm.me">arthropodSeven@pm.me</a>
        </div>
      </Switcher>
    </header>
    <main>
      <div className="p-summary">
        <p>
          I'm a software engineer, and my <em className="glow">métier</em> is
          building websites.
        </p>
        <p>
          I go to great pains in building <em>truly responsive</em> websites
          which present a unique and consistent voice on any device, for any
          reader.
        </p>
      </div>

      {/** @todo deduplicate these skills clusters. Ideally we'd like to use
       ** the same one, whether print or screen display. */}
      <h2>Skills</h2>
      <Cluster className="print:none">
        {skills.map(([name, years]) => (
          <Box
            borderWidth="var(--s-4)"
            padding="0"
            className="skill"
            key={name}>
            <dt className="p-skill">{name}</dt>
            {years && <dd className="invert">{years}yr.</dd>}
          </Box>
        ))}
      </Cluster>
      <dl className="print-skills screen:none">
        {sortedSkills.map(([name, years]) => (
          <div key={name}>
            <dt className="p-skill">{name}</dt>
            <dd>{years}yr.</dd>
          </div>
        ))}
      </dl>

      <h2>Experience</h2>
      <Stack space="var(--s0)" asList className="max-width:var(--measure)">
        <LineItem
          start="2022"
          end="2023"
          url="https://tirrel.io/"
          mainHeading="Software Engiener at Tirrel Corp."
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">Remote</span>
              {", "}
              <span className="p-region">San Francisco</span>
              {", "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            At Tirrel Corp., I worked together with a small, tight-knit team to
            deliver features on a number of unique products, and helped build an
            upstart content company in a novel technical and social environment.
            Together we built the first payment integration in this market
            segment, and launched the&nbsp;
            <a
              href="https://tirrel.io/scene/index.html"
              target="_blank"
              rel="noopener noreferrer">
              Scene
            </a>
            &nbsp;desktop app.
          </p>
        </LineItem>
        <LineItem
          start="2021"
          end="2022"
          url="https://shortcut.com/"
          mainHeading="Software Engineer II at Shortcut (née Clubhouse)"
          location={
            <div className="p-adr h-adr">
              <span className="p-locality">Remote</span>
              {", "}
              <span className="p-region">New York</span>
              {", "}
              <span className="p-country-name">United States</span>
            </div>
          }>
          <p>
            As a frontend software engineer at Shortcut, I was blessed to work
            with a team of incredibly talented people, all dedicated to building
            task tracking software that developers and product managers love. My
            duties included updating outdated frontend code to work with
            paradigmatic, modern React, shipping new features like custom field
            types, and collaborating with an extremely talented team of Clojure
            developers to seamlessly integrate backend and frontend.
          </p>
        </LineItem>
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
            Worked one-on-one with designers and stakeholders to ship new
            features throughout AEDIT's Web presence, including a new editorial
            blog platform, updated subscriber profiles, and a full,
            HIPAA-compliant video chat system.
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
            booking product.
          </p>
        </LineItem>
        <LineItem
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
            Worked closely with a small team to update XOJet's internal Web
            apps, enabling their booking team to price even the most complex
            flights faster than ever before.
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

      <div className="p-contact h-card display:none">
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
          {", "}
          <span className="p-country-name">United States</span>
        </p>
      </div>
    </main>
  </article>
);

export default Resume;
