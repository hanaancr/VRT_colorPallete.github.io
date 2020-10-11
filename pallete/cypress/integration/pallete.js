context('image', () => {

    it('compare', () => {
        cy.visit('https://takezo316.github.io/colorchange.github.io/')
        cy.wait(2000)
        cy.screenshot();
        cy.wait(2000)

        cy.get('button[id="generate_palette"]').click()
        cy.screenshot();
        cy.wait(2000)
  
        cy.get('button[id="generate_palette"]').click()
        cy.screenshot();
        cy.wait(2000)
  
      })
  });