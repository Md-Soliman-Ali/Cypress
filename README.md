Some VS Code User Shortcut
--------------------------
- Shift+Alt+F (To indent user code)
- Click to File -> Auto Save (For saving your code automatically)
- Ctrl+/ (To comment Your Code)
- Shift+Tab (To reverse Tab)

Install Following Package
-------------------------
``
 npm init -y 
``

``
 npm i cypress
``

``
npm install cypress-xpath
``

``
npm install cypress-iframe
``

``
npm install --save-dev cypress-file-upload
``

``
npm install cypress-downloadfile
``

``
npm install allure-commandline
``

``
npm install mocha-allure-reporter
``

Import Following Support (Commands.js)
---------------------------------------
``
import 'cypress-file-upload';
``

``
import 'cypress-iframe';
``

Import Following Support (e2e.js)
---------------------------------
``
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
``

How To Run
----------
``
 npx cypress open
``

``
 npx cypress run .\cypress\e2e\demo.cy.js
``

``
 npx cypress run --spec .\cypress\e2e\demo.cy.js --headed --browser firefox
``

Run The Allure
--------------
``
 npx cypress run --spec .\cypress\e2e\signup.cy.js --headless --browser electron --reporter mocha-allure-reporter 
``

``
npm run report:allure
``