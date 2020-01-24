describe('User can check their BMI',() => {
    it('user can enter weight and height',() => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('90')
        cy.get('#height').type('186')
        cy.get('#calculate').click()
     })
     it('displays a BMI value of 26.01', () => {
         cy.get('#results').should('contain', '26.01')
     })
    
})