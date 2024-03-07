/// <reference types="cypress" />
const loginPage = require('./LoginPage');

describe('Login Module', () => {
   
  it('Ensure User can visit system', () => {
    loginPage.visitLoginPage(); // Corrected to be a function call
  });

  it('Ensure Activation Message Display To User Once Login', () => {
    loginPage.visitLoginPage();
    loginPage.loginUser('makerUserType');
    loginPage.ensureActivationMessageDisplay();
  
    
    // Add your assertions here
  });

  it('Ensure Warning Message Display Incase Credentials Did Not Match', () => { // Changed the description for clarity
    loginPage.visitLoginPage();
    loginPage.loginUser('checkerUserType');
    loginPage.ensureWarningMessageDisplay();
    
    // Add your assertions here
  });

});
