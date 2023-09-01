
import { test,expect } from '@playwright/test';
import {landingPage}from '../Pages/landingPage'
import {loginPage} from '../Pages/loginPage';
import {addToCartPage} from '../Pages/addToCartPage';


test.beforeEach(async({page})=>{
const lP = new landingPage(page);
// Navigate to the website URL
await lP.gotoWebsite();
});

test('Should add the product to cart', async({page})=>{

  const lP = new landingPage(page);
  const loginP = new loginPage(page);
  const ac = new addToCartPage(page);

  // Function to verify page title
  await lP.verifyPageTittle();
  // Function to verify menu links on homepage
  await lP.verifyMenuLinksOnHomePage();
  // Function to click on login button
  await lP.clickLoginButton();
  // Function to verify login fucntionality
  await loginP.verifyLoginFunctionality();
  // Function to verify add to cart product functionality
  await ac.verifyAddProductToCart();  

  
});

test.afterEach(async ({page})=>{
const lP= new landingPage(page);
// Function to click logout button
await lP.clickLogoutButton();
// Closing page 
await page.close();
});

