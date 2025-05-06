import { expect, test } from '@playwright/test';
import { AuthenticationPage } from '../../../pom/dashboard/authentication.page';
import { getPOM } from '../../../pom/pom-manager/pom-manager';
import * as fs from 'fs';

let loginPage: AuthenticationPage;

test.beforeEach( async ({ page }) => {
    loginPage = new AuthenticationPage( page);
    // loginPage = getPOM(page, 'Authentication';)
});

// test ('test error msg show on login failure', async ({ page }) => {
//     // const loginPage = new AuthenticationPage(page);
//     await loginPage.login('ac','123');

//     const errorLocator = loginPage.page.locator(loginPage.xpathErrorMessage);
//     expect( errorLocator).toBeVisible();
// })

test ('test error msg show on login failure', async ({ page }) => {
    // read data from json
    // đường dẫn đến file JSON
    const filePath = 'data/accounts.json';

    // Đọc nội dung file và parse sang object
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    //In ra console
    console.log('Nội dung JSON:', jsonData);

    for (const item of jsonData.accounts) {
        await loginPage.login(item.username, item.password);

        if (item.is_success) {
            //validate success msg show
        } else {
            const errorMsg = loginPage.page.locator(loginPage.xpathErrorMessage)
            await expect (errorMsg).toBeVisible();
        }
    }

    // for (list data)
        //login
        // if is_success = true => validate success msg
        // if is_success = false => validate error msg

});