describe("Home Page", () => {
  it("should be able to turn on the main car listing screen.", () => {
    cy.viewport(1300, 720)
    cy.visit("http://localhost:3000")
    cy.contains("Carros").should("exist")
    cy.contains("Filtros").should("exist")
    cy.get("a").should("have.length", 24)
  })
})
