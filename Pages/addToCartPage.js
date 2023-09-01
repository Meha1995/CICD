
import { expect } from '@playwright/test';

exports.addToCartPage = class addToCartPage {

  constructor(page) {

    // Web Elements of addToCartPage

    this.page = page;
    this.ProductLink=page.getByRole('link', { name: ' Products' });
    this.FirstProduct=page.locator('.choose > .nav > li > a').first();
    this.QuantityBox=page.getByRole('spinbutton');
    this.addToCartButton=page.locator("text=Add to cart");
    this.viewCartButton=page.locator("text=View Cart");
    this.quantityOnCartPage=page.locator('.disabled');
    this.wait=page.waitForLoadState('networkidle');
  }
   // Function to verify add to cart functionality

    async verifyAddProductToCart(){
        //Click on Product link
        await this.ProductLink.click();
        //Click on the first product
        await this.FirstProduct.click();
        //wait till the page load
        await this.wait;
        //click on quantity textbox
        await this.QuantityBox.click();
        // Priniting quantity of product on PDP page
        const PdpValue = console.log("Quantity on product description page is:-", await this.QuantityBox.inputValue());
        //Click on the Add to Cart button
        await this.addToCartButton.click()
        //Click on the View Cart link
        await this.viewCartButton.click();
        // Priniting quantity of product on Cart page
        const cartValue = console.log("Quantity on cart page is:-", await this.quantityOnCartPage.textContent());
        //Verify(match) quantity of PDP and Cart page
        await expect(cartValue).toEqual(PdpValue);
}
};