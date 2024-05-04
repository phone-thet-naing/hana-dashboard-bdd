import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button');
    }

    get caUsername () {
        return $('input[name="username"]')
    }

    get caPassword() {
        return $('input[name="password"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * method to automate CA login
     */
    async caLogin (username, password) {
        await this.caUsername.setValue(username)
        await this.caPassword.setValue(password)
        await this.btnSubmit.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
