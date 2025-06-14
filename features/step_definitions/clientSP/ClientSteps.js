const { exec } = require("child_process")

const { defineParameterType, When, And, Given, Then } = require("@cucumber/cucumber")
const path = require("path")
let poManager
const playwright = require('@playwright/test');
const { test, expect } = require('@playwright/test');
const { POManager } = require('../../../pageobjects/POManager');
const assert = require("assert")
const binDir = path.resolve(__dirname, "../../bin")
console.log(binDir)

// visit homepage
Given('I visit the homepage', { timeout: 20000 }, async function () {
    await this.page.goto("https://sonvu.blog/");
    const size = await this.page.viewportSize();
    console.log('Current viewport:', size);
    console.log(await this.page.title());

});

When('I click on login menu', { timeout: 100 * 1000 }, async function () {
    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    // this.page.pause(); // wait for the page to load
    await loginPage.clickLoginMenu();
});

Then('I login with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.validLogin(username,password)
});

Then('I should see the menu item {string}', { timeout: 100 * 1000 }, async function (menuItem) {
    const locator = this.page.locator(`text="${menuItem}"`);
    await expect((locator).first()).toBeVisible();
});