import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async navigateToURL (path) {
        await browser.maximizeWindow()
        await browser.url(path)
    }
}

export default new Page()
