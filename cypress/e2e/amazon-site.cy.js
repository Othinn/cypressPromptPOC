describe('Amazon site test', () => {
  it('Add to cart', () => {
    cy.prompt([
      "Given Page “https://www.amazon.com” is open",
      "And A user search for 'ram ddr5 32gb'",
      "And Click search icon",
      "And User open first Results item",
      "And Click 'Add to cart' button",
      "And Click 'No thanks' button",
      "Then Validate if [id='nav-cart-count'] have text '1'"
    ])

  })
})