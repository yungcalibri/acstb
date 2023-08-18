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
  summary: "I'm a software engineer, and my métier is building websites.",
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
          I take great pride in building <em className="glow">truly responsive</em> websites which present a
          unique and consistent voice on any device, for any reader.
        </p>
      </div>

      {/** @todo deduplicate these skills clusters. Ideally we'd like to use
       ** the same one, whether print or screen display. */}
      <h2>Skills</h2>
      <p>
        I've worked extensively with React.js, Node, Git, and Next.js throughout my
        career, delivering value for modern web applications in many different
        verticals. REST APIs are second nature; my thoughts are well-formed HTML, and
        I'll defend CSS till my dying breath, however ugly it is.
      </p>
      <p>
        Lately, I've been using my free time to learn&nbsp;
        <a href="https://htmx.org" target="_blank" rel="noopener noreferrer">
          HTMX
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://developers.urbit.org/overview/hoon"
          target="_blank"
          rel="noopener noreferrer">
          Hoon
        </a>, and have found both of these extremely rewarding.
      </p>

      <h2>Experience</h2>
      <Stack space="var(--s0)" asList>
        <LineItem
          start="2022"
          end="2023"
          url="https://tirrel.io/"
          mainHeading="Software Engineer at Tirrel Corp."
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
            ship the first bank-card payment integration in the emerging Urbit ecosystem,
            which we used to accept payment for merchandise at the Assembly Miami
            conference in October of 2022. We also created the Scene desktop app, a new
            and convenient interface for Urbit users with tight integration with Tirrel's
            Urbit hosting service, driving a 20% increase in hosting subscriptions.
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
            task tracking software that developers and product managers love.
            I helped modernize an aging data visualization system, giving subscribers
            clearer insight into the resources being dedicated to specific initiatives
            and projects. I replaced outdated frontend code with paradigmatic, modern
            React, collaborating closely with a world-class team of Clojure backend
            engineers, to dramatically improve customer experience and client retention.
          </p>
        </LineItem>
        <LineItem
          start="2018"
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
            At AEDIT I worked one-on-one with designers and stakeholders to architect,
            implement, and ship new features throughout the company's Web presence.
            I implemented a top-to-bottom redesign of the company's editorial blog
            platform, driving a 2-fold increase in search-inbound client traffic.
            Improved Web profiles for subscribed providers helped AEDIT's clients to speak
            authoritatively about their practices, share customer testimonials, and drive
            bookings in a competitive market. And a full-featured, HIPAA-compliant video
            chat app put those providers in direct contact with prospective patients,
            all helping to make the brand a marquee name in the cosmetic surgery industry.
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
            I worked closely with XOJet's Revenue Management team to update a suite of
            internal Web apps. These changes significantly multiplied the RM team's
            productivity, expediting the quoting and confirmation of complex flight
            itineraries and leading to a 15% increase in flight revenue.
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
