describe('User can check their BMI',() => {
    it('user can enter weight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
    
    })
    
})