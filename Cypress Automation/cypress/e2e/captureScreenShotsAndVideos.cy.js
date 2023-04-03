 /// <reference types="Cypress"/>

 describe("mysuite", () => {
     it("capture screenshots", () => {
         cy.visit("http://demo.opencart.com")

         cy.screenshot("homePage")
         cy.get("img[title='Your Store']").screenshot("logo")
     })

     it("capture screenshots & videos", () => {
         cy.visit("http://demo.opencart.com")

         // Automatically Capture Screenshot & Video on Failure - Only When on Execute Through CLI
         cy.get("li:nth-child(7) a:nth-child(1)").click(); // Camera
         cy.get("div[id='content'] h2").should("have.text", "Tablets")
     })
 })