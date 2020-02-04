import {Given, When, Then } from 'cucumber';
import { browser,  element, by, Key  } from 'protractor';
import { SecurityPage } from '../po/security.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the login page',{timeout: 2 * 5000}, async function() {
  await browser.get('http://clark.titusgt.com:7542/#/login');

});
When('I log in',{timeout: 2 * 5000}, async function() {
  await SecurityPage.login();
  
});
Then('I should be redirected to the dashboard',{timeout: 4 * 5000}, async function() {
  browser.sleep(1000);
  expect (await browser.getCurrentUrl()).to.equal('http://clark.titusgt.com:7542/#/dashboard');

});