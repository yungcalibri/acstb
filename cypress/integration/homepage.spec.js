context("Test Spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the nav contains a home link which points to the root", () => {
    cy.get("nav#root-nav")
      .find("a#home-link")
      .should("have.attr", "href")
      .and("eq", "/");
  });
});
