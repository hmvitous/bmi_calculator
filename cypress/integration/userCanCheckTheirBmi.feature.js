describe('User can check their BMI', () => {
    it('user can enter weight and height',() => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('72')
        cy.get('#height').type('185')
        cy.get('#calculate').click()
     })
     it('displays a BMI value of 21.04', () => {
         cy.get('#results').should('contain', '21.04')
     })
     it('displays a message if you are Healthy', () => {
         cy.get('#results').should('contain', 'Healthy')
     })
    
})