import DatabaseSelectors from "./selectors.js"
import Utils from "../../../utils/utils.js"

class DatabaseActions {
    async login(username, password) {
        await DatabaseSelectors.username.setValue(username)
        await DatabaseSelectors.password.setValue(password)
        await DatabaseSelectors.btnSubmit.click()

        await expect(await DatabaseSelectors.phpMyAdminImage).toExist()
    }

    async insertCallCenterQuery(interviewIdList) {
        // Navigating to the SQL section to paste the queries
        await DatabaseSelectors.uatPlusIcon.waitForClickable({
            timeout: 5000, timeoutMsg: "Could not click + icon"
        })

        await expect(await DatabaseSelectors.actionEventsTable).toExist()

        await DatabaseSelectors.SQLTab.waitForClickable()
        await DatabaseSelectors.SQLTab.click()

        await DatabaseSelectors.queryBoxContainer.waitForExist()

        // Converting Interview IDs into Queries
        const callCenterQueries = interviewIdList.map((interview_id) => {
            const currentDateTime = Utils.getCurrentDateTime("yyyy-mm-dd");

            const queryData = {
                interview_id: interview_id,
                call_date: currentDateTime,
                created_at: currentDateTime,
                updated_at: currentDateTime,
                ca_assessment_date: currentDateTime
            }

            const callCenterQuery = Utils.getCallCenterQuery(queryData);

            return callCenterQuery;
        })

        await browser.keys(callCenterQueries.join("\n"))

        await DatabaseSelectors.submitQueryBtn.click()

        await expect(await DatabaseSelectors.querySuccessAlert).toExist()
    }
}   

export default new DatabaseActions()