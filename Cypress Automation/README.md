How To Run
----------
``
 npx cypress run    (Run All e2e Folder)
``

Install Following Package
-------------------------
``
 npm install @4tw/cypress-drag-drop
``

``
npm i cypress-mochawesome-reporter
``

Change Cypress Reporter & Setup Hooks
-------------------------------------
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

Update support/e2e.js
---------------------
``
import 'cypress-mochawesome-reporter/register';
``

Run Cypress
-----------
`
npx cypress run --headed --browser chrome --spec fileRelativePath
`
