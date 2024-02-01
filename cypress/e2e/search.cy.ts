describe("Car Details Page", () => {
  beforeEach(() => {
    cy.viewport(1300, 720)
    cy.visit("/")
  })

  it("should be able to filter by car", () => {
    cy.get("input[name=car]").type("jeep")
    cy.contains(/filtrar/i).click()
    cy.contains(/Resultado pra: Marca jeep/i).should("exist")
    cy.contains(/jeep/i).should("exist")
    cy.url().should("include", "/search?car=jeep")
  })

  it("should be able to filter by model", () => {
    cy.get("input[name=model]").type("compass")
    cy.contains(/filtrar/i).click()
    cy.contains(/Resultado pra: modelo compass/i).should("exist")
    cy.contains(/compass/i).should("exist")
    cy.url().should("include", "/search?model=compass")
  })

  it("should be able to filter by model and car", () => {
    cy.get("input[name=car]").type("jeep")
    cy.get("input[name=model]").type("compass")
    cy.contains(/filtrar/i).click()
    cy.contains(/Resultado pra: marca jeep e modelo compass/i).should("exist")
    cy.contains(/compass/i).should("exist")
    cy.contains(/jeep/i).should("exist")
    cy.url().should("include", "/search?car=jeep&model=compass")
  })

  it("should be able to visit search page without a search query", () => {
    cy.on("uncaught:exception", () => false)
    cy.visit("/search")
    cy.location("pathname").should("equal", "/")
  })
})
