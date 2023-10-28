import CheckoutPage from "./CheckOutPage";

class ProductsPage{

    productDashboard(){
        cy.get('.title').should("have.text","Products");
        return this
    }
    viewProduct(){
        cy.get('#item_0_title_link > .inventory_item_name').click();
        return this
    }
    clickOnAddToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        return this;
    }
    goToCart(){
        cy.get('.shopping_cart_link').click();
        return this;
    }
    clickOnCheckOutButton(){
        cy.get('[data-test="checkout"]').click();
        const checkOutPage = new CheckoutPage();
        return checkOutPage;
        
    }

}
export default ProductsPage;