import { Page } from '@playwright/test';

export class AuthenticationPage {
    page: Page;

    xpathUserName = '';
    xpathPassword = '';
    xpathRemember = '';
    xpathErrorMessage = '';

    

    constructor( page: Page ) {
        this.page = page;
    };

    async login (username: string, password: string) {
        await this.page.fill(this.xpathUserName, 'admin');
        await this.page.fill(this.xpathPassword, '123');

    }
}