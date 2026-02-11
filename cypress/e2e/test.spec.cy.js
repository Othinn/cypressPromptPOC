describe('Saucedemo test', () => {

  it('AddToCart', function() {
    // cy.prompt([
    //   "Visit https://www.saucedemo.com/",
    //       "Log to the site using name standard_user and password  secret_sauce",
    //   "Add to cart Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red)",
    //   "Go to Cart and click Checkout button",
    //   "Set First Name to Mike, Last Name to test and Zip/Postal Code to 33-333",
    //   "Click Continue button",
    //   "Validate if Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red) is displayed"
    // ])
    // Prompt step 1: Visit https://www.saucedemo.com/
    cy.visit("https://www.saucedemo.com/");

    // Prompt step 2: Log to the site using name standard_user and password  secret_sauce
    cy.get("[data-test=\"username\"]").type("standard_user")
    cy.get("[data-test=\"password\"]").type("secret_sauce")
    cy.get("[data-test=\"login-button\"]").click()

    // Prompt step 3: Add to cart Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red)
    cy.get("[data-test=\"add-to-cart-sauce-labs-onesie\"]").click()
    cy.get("[data-test=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]").click()

    // Prompt step 4: Go to Cart and click Checkout button
    cy.get("[data-test=\"shopping-cart-badge\"]").click()
    cy.get("[data-test=\"checkout\"]").click()

    // Prompt step 5: Set First Name to Mike, Last Name to test and Zip/Postal Code to 33-333
    cy.get("[data-test=\"firstName\"]").type("Mike")
    cy.get("[data-test=\"lastName\"]").type("test")
    cy.get("[data-test=\"postalCode\"]").type("33-333")

    // Prompt step 6: Click Continue button
    cy.get("[data-test=\"continue\"]").click()

    // Prompt step 7: Validate if Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red) is displayed
    cy.get("[data-test=\"item-2-title-link\"]").should("be.visible")
    cy.get("[data-test=\"item-3-title-link\"]").should("be.visible")
  });

  it('removeElementFromCart', function() {
  // cy.prompt([
  //   "Visit https://www.saucedemo.com/",
  //   "Log to the site using name standard_user and password  secret_sauce",
  //   "Add to cart Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red)",
  //   "Go to Cart, remove Sauce Labs Onesie",
  //   "Click Continue Shopping button",
  //   "Check is Sauce Labs Onesie have Add to cart button instead of Remove",
  //   "Go to Cart and Click Checkout button",
  //   "Set First Name to Mike, Last Name to test and Zip/Postal Code to 33-333",
  //   "Click Continue button, validate if only one element is displayed",
  //   "CLick Finish button, and validate if Thank for your order! text is displayed"
  // ])
  // Prompt step 1: Visit https://www.saucedemo.com/
  cy.visit("https://www.saucedemo.com/");

  // Prompt step 2: Log to the site using name standard_user and password  secret_sauce
  cy.get("[data-test=\"username\"]").type("standard_user")
  cy.get("[data-test=\"password\"]").type("secret_sauce")
  cy.get("[data-test=\"login-button\"]").click()

  // Prompt step 3: Add to cart Sauce Labs Onesie and Test.allTheThings() T-Shirt (Red)
  cy.get("[data-test=\"add-to-cart-sauce-labs-onesie\"]").click()
  cy.get("[data-test=\"add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)\"]").click()

  // Prompt step 4: Go to Cart, remove Sauce Labs Onesie
  cy.get(".shopping_cart_link").click()
  cy.get("[data-test=\"remove-sauce-labs-onesie\"]").click()

  // Prompt step 5: Click Continue Shopping button
  cy.get("[data-test=\"continue-shopping\"]").click()

  // Prompt step 6: Check is Sauce Labs Onesie have Add to cart button instead of Remove
  cy.get("[data-test=\"add-to-cart-sauce-labs-onesie\"]").should("be.visible")

  // Prompt step 7: Go to Cart and Click Checkout button
  cy.get(".shopping_cart_link").click()
  cy.get("[data-test=\"checkout\"]").click()

  // Prompt step 8: Set First Name to Mike, Last Name to test and Zip/Postal Code to 33-333
  cy.get("[data-test=\"firstName\"]").type("Mike")
  cy.get("[data-test=\"lastName\"]").type("test")
  cy.get("[data-test=\"postalCode\"]").type("33-333")

  // Prompt step 9: Click Continue button, validate if only one element is displayed
  cy.get("[data-test=\"continue\"]").click()
  cy.get(".cart_list").should("have.descendants", ".cart_item")

  // Prompt step 10: CLick Finish button, and validate if Thank for your order! text is displayed
  cy.get("[data-test=\"finish\"]").click()
  cy.get(".complete-header").should("have.text", "Thank you for your order!")
});
});

