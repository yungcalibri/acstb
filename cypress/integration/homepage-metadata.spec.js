context("Validate Metadata", () => {
  before(() => {
    cy.visit("/");
  });

  context("meta tags", () => {
    it("has the standard meta tags and content", () => {
      cy.get("meta[charset]").should("have.attr", "charset").and("eq", "utf-8");

      cy.get("meta[name=author]")
        .should("have.attr", "content")
        .and("eq", "Andrew Stebenné");

      cy.get("meta[name=description]")
        .should("have.attr", "content")
        .and("not.be.empty");
    });

    it("has OpenGraph meta tags and content", () => {
      cy.get("meta[property='og:title']")
        .should("have.attr", "content")
        .and("not.be.empty");

      cy.get("meta[property='og:image']")
        .should("have.attr", "content")
        .and("not.be.empty");

      cy.get("meta[property='og:type']")
        .should("have.attr", "content")
        .and("eq", "website");

      cy.get("meta[property='og:site_name']")
        .should("have.attr", "content")
        .and("eq", "acstb.name");
    });
  });

  context("link tags", () => {
    it("has a manifest.json", () => {
      cy.get("link[rel=manifest]")
        .should("have.attr", "href")
        .and("include", "manifest.json");
    });

    it("has favicons", () => {
      cy.get("link[rel=icon]")
        .should("have.attr", "href")
        .and("include", "favicon.ico");

      cy.get("link[rel='apple-touch-icon-precomposed']")
        .should("have.attr", "href")
        .and("include", "apple-touch-icon.png");
    });

    it("has a webmention backlink", () => {
      cy.get("link[rel=webmention]")
        .should("have.attr", "href")
        .and("include", "acstb.name");
    });
  });
});

/** @todo Validate h-card microdata */
// context("Validate Microformats", () => {
//   it("has an h-card", () => {
//     cy.get(".h-card");
//   })
// });
