describe('Amazon site test', () => {
  it('Add to cart', () => {
    cy.prompt([
      "Given Page “https://www.amazon.com/” is open",
      // "When [data-action-type='DISMISS'] is clicked",
      "And A user search for 'ram ddr5 32gb'",
      "And Click search icon",
      "And User open first Results item",
      "And Click 'Add to cart' button",
      // "And If 'No thanks' button is displayed click on it",
      "Then Validate if [id='nav-cart-count'] have text '1'"
    ])

  })
})