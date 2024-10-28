describe('test todo', () => {
  it('delete all is visible', () => {
    cy.visit('http://localhost:3000/');
    // cy.get('[data-testid="cypress-deleteAllButton"]').should("have.text", "Delete All")
    cy.get('[data-testid="cypress-deleteAllButton"]').should("exist")
  }),
  it('todo is addind', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="cypress-input"]').type("AAA");
    cy.get('[data-testid="cypress-addButton"]').click();
    cy.get('[data-testid="cypress-cardContainer"]').children().children().first().should("have.text", "AAA")
  })
})