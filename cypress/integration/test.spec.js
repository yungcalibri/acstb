context("Test Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("the nav contains a home link", () => {
    cy.get("nav#root-nav").find("a#home-link");
  });
  it("the home link should point to the root", () => {
    cy.get("nav#root-nav")
      .find("a#home-link")
      .should("have.attr", "href")
      .and("eq", "/");
  });
});
