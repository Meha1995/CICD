import { expect } from '@playwright/test';
import {credentials} from './data';

exports.loginPage = class LoginPage {

  constructor(page) {

    // Web Elements of login Page

    this.page = page;
    this.emailAddress = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.logOutLink = page.locator('text= Logout');
  }

  // This will verify login functionality
  async verifyLoginFunctionality() {
   
    // Typing the email address 
    await this.emailAddress.type(credentials.emailAddress);
    const enteredEmail = await this.emailAddress.inputValue(); 
    // Printing the value of entered email address
    console.log("Entered email address is", enteredEmail);
    // Typing the password
    await this.password.type(credentials.password);
    // Clicking on login button
    await this.loginButton.click()
    // Waiting for load state to be ficnished untill network is idle
    await this.page.waitForLoadState('networkidle');
    // Verifying logout link is visible after loging 
    await expect(this.logOutLink).toBeVisible();
  }
};

  
 
