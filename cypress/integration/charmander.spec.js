describe('Pokedex', function() {
    it('charmander can be navigated', function() {
      cy.visit('http://localhost:5000')
      cy.contains('charmander').click
      cy.contains('blaze')
      cy.contains('solar power')
    })
  })