import CADashbordPage from "../pageobjects/ca-dashboard/actions.js"
import LoginPage from "../pageobjects/login.page.js"
import Utils from "../../utils/utils.js"

describe("Making CA Review", () => {
    it("Making CA Review to Interview of Given ID", async () => {
        const { interview_id: interviewList, ca_credentials, ca_form_answer_list } = Utils.getDataFromJSON('./data/ca-assessment.json')

        for (const id of interviewList) {
            const url = `https://ca-uat.hanamicrofinance.net/caassessment/${id}/${ca_credentials[0].id}`
            await CADashbordPage.goToSpecificCAAssessment(url)
        
            const selector = 'h3=Welcome to CA Assessment';
            const timeoutMs = 10000;
            
            const isElementFound = await Utils.waitForElementExistence(selector, timeoutMs);
        
            if (isElementFound) {
                await LoginPage.caLogin(ca_credentials[0].username, ca_credentials[0].password);
            }

            const ca_form_answer = ca_form_answer_list[0]
            await CADashbordPage.createCAAssessment(ca_form_answer)
        }
    })
})

