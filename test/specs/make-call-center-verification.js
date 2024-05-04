import Page from "../pageobjects/page.js"
import DatabaseActions from "../pageobjects/database/actions.js"
import Utils from "../../utils/utils.js"

describe("Making Call Center Verification", () => {
    it("Make Call Center Verification to Given Interview Id", async () => {
        const {
            base_url,
            credentials,
            interview_id_list
        } = Utils.getDataFromJSON("./data/database.json")
        await Page.navigateToURL(base_url)

        await DatabaseActions.login(credentials.username, credentials.password)

        await DatabaseActions.insertCallCenterQuery(interview_id_list)

        await browser.pause(5000)
    })
})