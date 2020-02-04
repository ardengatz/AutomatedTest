import { BeforeAll, Before, setDefaultTimeout } from 'cucumber';
import { browser, protractor } from 'protractor';
import { SecurityPage } from '../po/security.po';

const EC = protractor.ExpectedConditions;

BeforeAll(() => {
    browser.waitForAngularEnabled(false);
    setDefaultTimeout(60 *10000);
});

Before({timeout: 2 * 5000},async () => {
    // Check if logged out, else login
    if (await browser.getCurrentUrl() === 'data:,' || await browser.getCurrentUrl() === 'http://clark.titusgt.com:7542/') {
        browser.get(`http://clark.titusgt.com:7542/`);
        await browser.wait(EC.urlIs(`http://clark.titusgt.com:7542/`), browser.params.defaultTimer);
        await SecurityPage.login();
    }
});

//  Before(async () => {
//      // Check if logged out, else login
//      if (await browser.getCurrentUrl() === 'data:,' || await browser.getCurrentUrl() === 'http://clark.titusgt.com:7542/') {
//          browser.get(`http://clark.titusgt.com:7542/`);
//          await browser.wait(EC.urlIs(`http://clark.titusgt.com:7542/`), browser.params.defaultTimer);
//          await SecurityPage.login();
//      }
//  });
