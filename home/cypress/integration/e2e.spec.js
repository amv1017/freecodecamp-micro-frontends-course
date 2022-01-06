describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get('.mx-auto').click();
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('#addtocart_1').click();
    cy.get('#cart').click();
    cy.get('#clearcart').click();
    cy.get('a:nth-child(1)').click();
    cy.get('#addtocart_7').click();
    cy.get('#addtocart_8').click();
    cy.get('#addtocart_9').click();
    cy.get('#addtocart_10').click();
    cy.get('#cart').click();
    cy.get("#grand_total").should("contain", "$35.96")
  })
})
