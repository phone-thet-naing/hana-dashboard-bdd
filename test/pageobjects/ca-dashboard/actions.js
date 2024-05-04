import { $ } from '@wdio/globals'
import CADashboardSelectors from "./selectors.js"


class CADashboardPage {
    async goToSpecificCAAssessment(url) {
        await browser.maximizeWindow()
        await browser.url(url)
    }

    async chooseCAassessmentOption() {
        const parentMenuIcon = await CADashboardSelectors.threeDotMenu;
        await parentMenuIcon.waitForExist({
            timeout: 10000,
            timeoutMsg: `Three-dot menu was not visible after 10 seconds`
        })
        await parentMenuIcon.click();

        const caAssessmentBtn = await CADashboardSelectors.viewAssessmentOptionBtn;
        await caAssessmentBtn.waitForClickable({
            timeout: 5000,
            timeoutMsg: "CA Assessment button was not clickable after timeout"
        });
        await caAssessmentBtn.click();

        const maximizeIcon = await CADashboardSelectors.caFormMaximizeBtn;
        await maximizeIcon.waitForExist({ timeout: 8000 });
        await maximizeIcon.click();
    }

    async fillCAForm(data) {
        // choosing mcix family members
        if (data.mcixFamilyMember === "yes") {
            await expect(await CADashboardSelectors.mcixFamilyMembersYesRadio).toBeClickable();
            await (await CADashboardSelectors.mcixFamilyMembersYesRadio).click();
        } else {
            await expect(await CADashboardSelectors.mcixFamilyMembersNoRadio).toBeClickable();
            await (await CADashboardSelectors.mcixFamilyMembersNoRadio).click();
        }

        // Choosing business photo radio option
        if (data.business_photo === "yes") {
            await expect(await CADashboardSelectors.businessPhotoYesRadio).toBeClickable()
            await (await CADashboardSelectors.businessPhotoYesRadio).click()
        } else {
            await expect(await CADashboardSelectors.businessPhotoNoRadio).toBeClickable()
            await (await CADashboardSelectors.businessPhotoNoRadio).click()
        }

        // Choosing Loan Purpose
        const loanPurposeMenu = await CADashboardSelectors.loanPurposeOptionMenu;
        await loanPurposeMenu.click();

        const chosenOption = await $(`div*=${data.loan_purpose}`);
        await chosenOption.click();

        // Choosing business description
        const businessDescriptionMenu = await (await $(`label*=${data.loan_purpose} (Business Description)`)).nextElement();
        await expect(businessDescriptionMenu).toBeClickable();
        await businessDescriptionMenu.click();

        const desiredBusinessDescriptionOption = data.descriptionOption;
        const selectedSubOption = await $('div*=' + desiredBusinessDescriptionOption);
        await selectedSubOption.click();

        // rent or own
        const isPlaceRentOrOwn = await CADashboardSelectors.caLivestockOwnerRent;
        await isPlaceRentOrOwn.click();

        // has recommendation or no
        const hasRecommendation = await CADashboardSelectors.hasRecommendationYes;
        await hasRecommendation.click();

        // sale per month
        const salePerMonthInput = await (await $('label*=လုပ်ငန်းမှ တစ်လ ရောင်းရငွေ')).nextElement();
        await salePerMonthInput.setValue(500000);

        // expense per month
        const expensePerMonthInput = await (await $('label*=လုပ်ငန်းတွင် တစ်လ ကုန်ကျစရိတ်ငွေ')).nextElement();
        await expensePerMonthInput.setValue(400000);

        const { profitCalculateBtn, netProfitCalculateBtn } = await browser.waitUntil(async () => {
            const calculationBtnList = await $$('svg.ca-calculation-icon.ms-2.ca-btn');

            if (calculationBtnList.length < 2) {
                return false;
            }

            return { profitCalculateBtn: calculationBtnList[0], netProfitCalculateBtn: calculationBtnList[1] }
        });

        await profitCalculateBtn.click();
        await netProfitCalculateBtn.click();

        // CA approved amount
        const caRecommendedAmountInput = await (await $('label*=CA မှ ထောက်ခံသော ပမာဏ')).nextElement();
        await caRecommendedAmountInput.setValue(800000);

        await (await CADashboardSelectors.caFormSubmitBtn).waitForClickable({ timeout: 5000, timeoutMsg: "CA Form Submit Button was not Clickable" });
        await (await CADashboardSelectors.caFormSubmitBtn).click();
    }

    async createCAAssessment(data) {
        await this.chooseCAassessmentOption()
        await this.fillCAForm(data)
    }
}

export default new CADashboardPage()