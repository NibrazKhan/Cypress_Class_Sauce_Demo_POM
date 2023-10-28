import ProductsPage from "./ProductPage";

class CheckoutPage{
    addUserInfo(firstName,lastName,postalCode){
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        return this;
    }
    clickOnFinish(){
        cy.get('[data-test="finish"]').click();
        return this;
    }
    assertPurchaseCompletion(expectedText){
        cy.get('.complete-header').should("have.text",expectedText)
        return this;
    }
    clickOnCancelButton(){
        cy.get('[data-test="cancel"]').click()
        const productPage = new ProductsPage();
        return productPage;
    }
}
export default CheckoutPage;