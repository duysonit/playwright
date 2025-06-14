const { exec } = require("child_process")

const { defineParameterType, When, Given,Then } = require("@cucumber/cucumber")
const path = require("path")
let poManager 
const playwright = require('@playwright/test');

const {test, expect} = require('@playwright/test');
 const {POManager} = require('../../pageobjects/POManager');
const assert = require("assert")
const binDir = path.resolve(__dirname, "../../bin")
console.log(binDir)

defineParameterType({
  name: "command", 
  regexp: /`(.+)`/,
  transformer: (cmd) => cmd,
})

When("I run {string}", function (string) {
  console.log(string)
  this.stdout = string;
  
  })
