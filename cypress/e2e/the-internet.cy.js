describe('Testing examples of welcome to the-internet page', () => {

  it('checkboxes', () => {
    // cy.prompt([
    //       "Given Page “https://the-internet.herokuapp.com” is open",
    //       'When A user open ”Checkboxes" link',
    //       "And User click checkbox 1",
    //       "Then the checkbox 1 is checked",
    //       "When A user uncheck 'checkbox 2'",
    //       "Then 'checkbox 2' is unchecked"
    //     ])
    // Prompt step 1: Given Page “https://the-internet.herokuapp.com” is open
    cy.visit("https://the-internet.herokuapp.com");

    // Prompt step 2: When A user open ”Checkboxes" link
    cy.get("#content a[href=\"/checkboxes\"]").click()

    // Prompt step 3: And User click checkbox 1
    cy.get("#checkboxes input:nth-child(1)").click()

    // Prompt step 4: Then the checkbox 1 is checked
    cy.get("#checkboxes input:nth-child(1)").should("be.checked")

    // Prompt step 5: When A user uncheck 'checkbox 2'
    cy.get("#checkboxes input:nth-child(3)").uncheck()

    // Prompt step 6: Then 'checkbox 2' is unchecked
    cy.get("#checkboxes input:nth-child(3)").should("not.be.checked")
  })

  it('add_remove_elements', () => {
    cy.prompt([
          "Given Page “https://the-internet.herokuapp.com” is open",
          'When A user open ”Add/Remove Elements" link',
          "And Click Add Element button 3 times",
          "Then 3 Delete button is displayed",
          "When User click first 'Delete' button",
          "Then 2 'Delete' button is displayed"
        ])
  })

  // it('drag_and_drop', () => { //not working
  //   cy.prompt([
  //         "Given Page “https://the-internet.herokuapp.com” is open",
  //         'When A user open ”Add/Remove Elements" link',
  //         "And Click Add Element button 3 times",
  //         "Then 3 Delete button is displayed" 
  //       ])
  // })

   it('dropdown', () => {
     // cy.prompt([
     //       "Given Page “https://the-internet.herokuapp.com” is open",
     //       'When A user open ”Dropdown" link',
     //       "And Select 'Option 2' from dropdown",
     //       "Then 'Option 2' value is displayed",
     //       "When Change dropdown value to 'Option 1'",
     //       "Then 'Option 1' value is displayed"
     //     ])
     // Prompt step 1: Given Page “https://the-internet.herokuapp.com” is open
     cy.visit("https://the-internet.herokuapp.com");

     // Prompt step 2: When A user open ”Dropdown" link
     cy.get("#content a[href=\"/dropdown\"]").click()

     // Prompt step 3: And Select 'Option 2' from dropdown
     cy.get("#dropdown").select("Option 2")

     // Prompt step 4: Then 'Option 2' value is displayed
     cy.get("#dropdown").should("have.value", "2")

     // Prompt step 5: When Change dropdown value to 'Option 1'
     cy.get("#dropdown").select("Option 1")

     // Prompt step 6: Then 'Option 1' value is displayed
     cy.get("#dropdown").should("have.value", "1")
   })

  it('login', () => {
    // cy.prompt([
    //       "Given Page “https://the-internet.herokuapp.com” is open",
    //       'When A user open ”Form Authentication" link',
    //       "And Set 'Username' to {{username}} value",
    //       "And Set 'Password' field to 'testpassword'",
    //       "And click 'Login' button",
    //       "Then 'Your password is invalid!' text is displayed",
    //       "When Set 'Username' to {{username}} value",
    //       "And Set 'Password' field to {{password}}",
    //       "And click 'Login' button",
    //       "Then 'You logged into a secure area!' text is displayed",
    //       "And 'Logout' button is displayed"
    //     ],
    //   {
    //     placeholders: {
    //       username: "tomsmith",
    //       password: "SuperSecretPassword!"
    //     }
    //   })
    // Prompt step 1: Given Page “https://the-internet.herokuapp.com” is open
    cy.visit("https://the-internet.herokuapp.com");

    // Prompt step 2: When A user open ”Form Authentication" link
    cy.get("#content a[href=\"/login\"]").click()

    // Prompt step 3: And Set 'Username' to {{username}} value
    cy.get("[name=\"username\"]").type("tomsmith")

    // Prompt step 4: And Set 'Password' field to 'testpassword'
    cy.get("[name=\"password\"]").type("testpassword")

    // Prompt step 5: And click 'Login' button
    cy.get("#login button.radius").click()

    // Prompt step 6: Then 'Your password is invalid!' text is displayed
    cy.get("#flash").should("be.visible")

    // Prompt step 7: When Set 'Username' to {{username}} value
    cy.get("[name=\"username\"]").type("tomsmith")

    // Prompt step 8: And Set 'Password' field to {{password}}
    cy.get("[name=\"password\"]").type("SuperSecretPassword!")

    // Prompt step 9: And click 'Login' button
    cy.get("#login button.radius").click()

    // Prompt step 10: Then 'You logged into a secure area!' text is displayed
    cy.get("#flash").should("be.visible")

    // Prompt step 11: And 'Logout' button is displayed
    cy.get("#content a.button").should("be.visible")
  })
  
})