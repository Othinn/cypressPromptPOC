describe('Amazon site test', () => {
  it('Add to cart', () => {
    cy.prompt([
      "Given Page “https://www.amazon.com/” is open",
      // "When [data-action-type='DISMISS'] is clicked",
      "And A user search for 'ram ddr5 32gb' and choose first result",
      "And User open first item",
      "And Click 'Add to cart' button",
      "And Click 'No thanks' button",
      "Then Validate if [id='nav-cart-count'] have text '1'"
    ])
    // // Prompt step 1: Given Page “https://www.amazon.com/” is open
    // cy.visit("https://www.amazon.com/");

    // // Prompt step 2: When [data-action-type='DISMISS'] is clicked
    // cy.get("[data-action-type='DISMISS']").click()

    // // Prompt step 3: And A user search for 'ram ddr5 32gb'
    // cy.get("[name=\"field-keywords\"]").type("ram ddr5 32gb")
    // cy.get("[name=\"site-search\"]").submit()

    // // Prompt step 4: And User open first item
    // cy.get("span[data-csa-c-item-id=\"amzn1.asin.B0BPHRGLSH\"] [data-cy=\"image-container\"] div:nth-child(1) span.rush-component a.a-link-normal").click()

    // // Prompt step 5: And Click 'Add to cart' button
    // cy.get("[name=\"submit.add-to-cart\"]").click()

    // // Prompt step 6: Then Validate if [id='nav-cart-count'] have text '1'
    // cy.get("[id='nav-cart-count']").should("have.text", "1")
  })
})