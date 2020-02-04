import {Given, When, Then } from 'cucumber';
import { browser,  element, by, Key  } from 'protractor';
import { SecurityPage } from '../po/security.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;


// Given('I go to {String}', async function(action: string) {
//   switch (action){
//   case '/#/hmws/companies':
//     // const currentUrl = await browser.getCurrentUrl();
//     // const dashboardUrl = 'http://clark.titusgt.com:7542/#/dashboard';
  
//     // if (currentUrl !== dashboardUrl) {
//     //   await browser.get(dashboardUrl);

//       await browser.get('http://clark.titusgt.com:7542/#/hmws/companies');

//     // };
//     break;

//     default:
//       throw Error(` The user is not on the "${action}" page `)
//   }
// });


Given('I go to companies', async function() {
  await browser.get('http://clark.titusgt.com:7542/#/hmws/companies');
});

When('I create a company', async function() {

});

Then('I should see the created item details of the company', async function() {

});