describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });
  it("Should run home and click button", () => {
    cy.visit("/");
    console.log("CYPRESS TEST CASES ======>    ENV SECS ARE .. ", Cypress.env("base_url"), Cypress.env("auth0_username"), Cypress.env("auth0_password"));
    cy.get('[data-cy="click-btn"]').click();
    cy.get('[data-cy="baseUrlInput"]').type(Cypress.env("base_url"));
  });
});
