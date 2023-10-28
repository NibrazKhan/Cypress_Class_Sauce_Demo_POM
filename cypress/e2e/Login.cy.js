import LoginPage from "../Pages/LoginPage";

describe("Login suite",()=>{
    const loginPage = new LoginPage();
    it("Testing with valid credentials",()=>{
        loginPage.login("standard_user","secret_sauce");
    })
    it("Testing with invalid credentials",()=>{
        loginPage.login("standarduser","secret_sauce");
        loginPage.invalidAssertion();
    })
    it.skip("Login with locked_out_user",()=>{
        loginPage.login("locked_out_user","secret_sauce");
        loginPage.assertLockedOutUser();
    })
})