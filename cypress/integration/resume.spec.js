context("Resume", () => {
  context("Homepage", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("links to the resume page", () => {
      cy.get("a[href='/resume']").should("exist");
    });
  });

  context("Resume Page", () => {
    before(() => {
      cy.visit("/resume");
    });

    it("has an <article> with the appropriate id", () => {
      cy.get("article").should("have.attr", "id").and("eq", "resume");
    });

    it("has a single <main> as a child of the <article>", () => {
      cy.get("main").should("have.length", 1);
      cy.get("article main").should("have.length", 1);
    });

    it("has only one <h1>", () => {
      cy.get("#__next").debug();
      cy.get("h1");
    });

    it("includes my email", () => {
      cy.get("a[href^='mailto']")
        .should("have.attr", "href")
        .and("include", "arthropodSeven@pm.me");
    });

    it("includes a list of skills", () => {
      cy.get("h2")
        .contains("Skills")
        .next()
        .should("be.visible")
        .find(".skill")
        .should("have.length.gte", 1);
    });

    it("includes my work history", () => {
      cy.get("h2")
        .contains("Experience")
        .next()
        .should("be.visible")
        .children()
        .should("have.class", "h-event");
    });

    it("includes my education history", () => {
      cy.get("h2")
        .contains("Education")
        .next()
        .should("be.visible")
        .children()
        .should("have.class", "p-education")
        .and("have.class", "h-event");
    });
  });
});
