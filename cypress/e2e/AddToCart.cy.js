import LoginPage from "../Pages/LoginPage";
import ProductsPage from "../Pages/ProductPage";

describe("Product Purchase",()=>{
    const loginPage = new LoginPage();
    const productPage = new ProductsPage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
        loginPage.login("standard_user","secret_sauce");
    });
    it("Verify Product Purchase is successful",()=>{
        productPage.productDashboard()
                    .viewProduct()
                    .clickOnAddToCart()
                    .goToCart()
                    .clickOnCheckOutButton()
                    .addUserInfo("Foysal","Shahnewaz","1217")
                    .clickOnFinish()
                    .assertPurchaseCompletion("Thank you for your order!")
        
    });
    it("Verify Product Purchase is Cancelled",()=>{
        productPage.productDashboard()
                    .viewProduct()
                    .clickOnAddToCart()
                    .goToCart()
                    .clickOnCheckOutButton()
                    .addUserInfo("Foysal","Shahnewaz","1217")
                    .clickOnCancelButton()
                    .productDashboard();
                    
    });
    
})