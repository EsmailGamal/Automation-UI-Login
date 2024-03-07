/// <reference types="cypress" />
const LoginInfo = require('../fixtures/login.json');

class LoginPage {
  userNameField() {
    return cy.get('#ctl00_CPHContainer_txtUserLogin').should('be.visible');
  }

  passwordField() {
    return cy.get('#ctl00_CPHContainer_txtPassword').should('be.visible');
  }

  loginButton() {
    return cy.get('#ctl00_CPHContainer_btnLoginn').should('be.visible');
  }

  popUpMessage() {
    return cy.get('#ctl00_CPHContainer_lblOutput')
  }

  visitLoginPage() {
    cy.visit('/');
  }

  ensureActivationMessageDisplay() {
    this.userNameField().should('be.visible')
    this.popUpMessage().invoke('text').should('include' ,'You have not activate your account.')
  }
  
  ensureWarningMessageDisplay() {
    this.userNameField().should('be.visible')
    this.popUpMessage().invoke('text').should('include' ,'Not Match')
  }
  
  loginUser(userType) {
    const credentials = LoginInfo.login[userType];
  
    this.userNameField().type(credentials.username);
    this.passwordField().type(credentials.password);
    this.loginButton().click();
    if (!credentials) {
      throw new Error(`Credentials for user type "${userType}" not found.`);
    }
  }
}
module.exports = new LoginPage();
