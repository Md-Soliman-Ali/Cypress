/// <reference types="Cypress"/>
import 'cypress-file-upload';

describe("File Upload", () => {
    it("Single File Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile("fileUpload.txt")
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it("File Upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile({
            filePath: "fileUpload.txt",
            fileName: "txtUpload.txt"
        })
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it("File Upload - Drag & Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile("fileUpload.txt", {
            subjectType: "drag-n-drop"
        })
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("fileUpload.txt")
    })

    it("Multiple Files Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get("#filesToUpload").attachFile(["fileUpload.txt", "txtUpload.txt"])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should("contain.text", "Files You Selected:")
    })

    it("File Upload - Shadow Dom", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        cy.get(".smart-browse-input", {
            includeShadowDom: true
        }).attachFile("fileUpload.txt")
        cy.wait(5000)
        cy.get(".smart-item-name", {
            includeShadowDom: true
        }).contains("fileUpload.txt")
    })
})