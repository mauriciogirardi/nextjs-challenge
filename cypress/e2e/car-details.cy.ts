describe('Car Details Page', () => {
  beforeEach(() => {
    cy.viewport(1300, 720)
    cy.visit('/')
  })

  it('should be able to visit page', () => {
    cy.get('a[href^="/car-details"]').first().click()
    cy.url().should('include', '/car-details')
    cy.contains(/mitsubishi/i).should('exist')
    cy.contains('2002').should('exist')
  })

  it('should be able to back home page', () => {
    cy.visit('/car-details/1')
    cy.contains(/voltar/i).click();
    cy.url().should('include', '/')
  })
})
