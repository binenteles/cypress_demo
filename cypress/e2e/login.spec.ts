import LoginPage from "../pages/LoginPage";
import inventory from "../support/locators/inventory";
import login from "../support/locators/login";

function loginWithStandardUser(user: string) {
    LoginPage.open();
    cy.get(login.username).should('be.visible');
    cy.get(login.username).click();
    cy.get(login.username).type(user);
    cy.get(login.password).click();
    cy.get(login.password).type('secret_sauce');
    cy.get(login.loginButton).click();
    cy.get(inventory.title).should('be.visible');
}

function logout() {
    cy.get(inventory.openMenu).click();
    cy.get(inventory.logout).should('be.visible');
    cy.get(inventory.logout).click();
    cy.get(login.username).should('be.visible');
}

describe('On demo website', () => {
    it('using correct credential should be able to login with standard user', () => {
        loginWithStandardUser('standard_user');
        logout();
    });

    it('using correct credential should be able to login with locked out user', () => {
        loginWithStandardUser('locked_out_user');
    })
})