import { Page } from "@playwright/test";
import { AuthenticationPage } from "../dashboard/authentication.page";

export function getPOM (page: Page, pomName: string) {
    switch (pomName) {
        case 'Authentication':
            return new AuthenticationPage(page);
            break;
        
        case 'Category':
            // return new CategoryPage(page);
            break;

        case 'Product':
            // return new CategoryPage(page);
            break;           
        
    }
}