const errorMsgLocator = '[data-test="error"]';
class LoginPage {
    login(username,password){
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
    }
    invalidAssertion(){
        cy.get(errorMsgLocator).should("contain","Username and password do not match");
    }
    assertLockedOutUser(){
        cy.get(errorMsgLocator).should("contain","this user has been locked out");
    }
}
export default LoginPage;