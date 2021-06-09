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

    it("has only one <h1>", () => {
      cy.get("#__next").debug();
      cy.get("h1");
    });

    it("includes my email", () => {
      cy.get("a[href^='mailto']")
        .should("have.attr", "href")
        .and("include", "arthropodSeven@pm.me");
    });
  });
});
