import { expect } from '@playwright/test';

exports.landingPage = class landingPage {

  
  constructor(page) {

    // Web Elements of Landing page
    
    this.page = page;
    this.loginLink = page.locator('text= Signup / Login');
    this.homeLink= page.getByRole('link',{Name: ' Home'}).nth(1);
    this.productLink= page.getByRole('link',{Name: ' Products'}).nth(2);
    this.cartLink=page.getByRole('link',{Name: ' Cart'}).nth(3);
    this.testCasesLink=page.locator('text= Test Cases').nth(0);
    this.apiTestingLink=page.getByRole('link',{Name: ' API Testing'}).nth(6);
    this.videoTutorialsLink = page.locator('text= Video Tutorials');
    this.contactUs = page.getByRole('link',{Name: ' Contact us'}).nth(8);
    this.logoutLink= page.getByRole('link',{Name:' Logout'}).nth(4);
    this.loginHeading= page.getByRole('heading', {Name:'Login to your account'}).first();
  }

// This will navigate to the website

  async gotoWebsite() {
    await this.page.goto('/');
    
  }

// This will verify menu links present on homepage
  async verifyMenuLinksOnHomePage(){
    // Verifying the product icon link
    await expect(this.productLink).toBeVisible();
    // Verifying the cart icon link
    await expect(this.cartLink).toBeVisible();
    // Verifying the testcases icon link
    await expect(this.testCasesLink).toBeVisible();
    // Verifying the api testing  icon link
    await expect(this.apiTestingLink).toBeVisible();
    // Verifying the video Tutorials icon link
    await expect(this.videoTutorialsLink).toBeVisible();
    // Verifying the login icon link
    await expect(this.loginLink).toBeVisible();
    // Verifying the home icon link
    await expect(this.homeLink).toBeVisible();
    // Verifying the contact us icon link
    await expect(this.contactUs).toBeVisible();
    // Printing all the menu links names  present on home page
    console.log("Menu links of home page are", await this.loginLink.textContent(), ",",await this.productLink.textContent(),",",await this.cartLink.textContent(),",", await this.contactUs.textContent(),",",await this.homeLink.textContent(),",", await this.loginLink.textContent(),",", await this.videoTutorialsLink.textContent(), ",", await this.apiTestingLink.textContent());
  }
// This will verify page tittle of home page
  async verifyPageTittle() {
// Waiting for load state untill netwrok is in idle
  await this.page.waitForLoadState('networkidle');
  const homeTitle= await this.page.title();
// Printing thr title of home page
  console.log("Title of the page is",homeTitle);
// Verifying the tittle is coorect or not
  expect(homeTitle).toBe("Automation Exercise");
    
  }
// This will click on login button
  async clickLoginButton() {
  // Clicking on the login link present on menu of home page
    await this.loginLink.click();
    const loginTitle= await this.page.title();
  // Printing the title of login page
    console.log("Title of this page is", loginTitle)
    // Verifying the tittle of login page
    expect(loginTitle).toBe('Automation Exercise - Signup / Login');

  }

  // This will click on logout button
  async clickLogoutButton(){
    // Clicking on logout button
    await this.logoutLink.click();
    // Verifying the login heading 
    expect(await this.loginHeading).toBeVisible();
    // Printing the heading on login page
    console.log("The heading on login page is", await this.loginHeading.textContent());

  }
};