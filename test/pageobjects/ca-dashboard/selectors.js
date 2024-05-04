class CADashboardSelectors {
    get viewAssessmentOptionBtn() {
        return $('#root > div > div.d-flex.flex-column.p-3.shadow.border.ca-radius.ca-popup-top.w-auto.ca-open > div > nav > div:nth-child(1)')
    }

    get threeDotMenu() {
        return $('#root > div > div.row.mb-3 > div.col-8.text-end > svg:nth-child(4)')
    }

    get caFormMaximizeBtn() {
        return $('#root > div > div.ca-desktop-form.p-2.pt-2 > div.pl-4.pr-4 > div > div > div > svg:nth-child(2)');
    }

    get firstInterviewResultsTab() {
        return $('span*=Interview Results')
    }

    get secondInterviewResultsTab() {
        return $('a[href="https://dashboard-uat.hanamicrofinance.net/interview-results"]')
    }

    get searchInput() {
        return $('input[type="search"]')
    }

    get threeDotMenu() {
        return $('#root > div > div.row.mb-3 > div.col-8.text-end > svg:nth-child(4)')
    }

    get changeRequestCommentBox() {
        return $('textarea.form-control[placeholder="Leave a comment here"]')
    }

    get commentBox() {
        return $('textarea[name="comment"]');
    }

    get feedbackToFoOptionBtn() {
        return $(`div*=Feedback To FO`)
    }

    get viewAssessmentOptionBtn() {
        return $('#root > div > div.d-flex.flex-column.p-3.shadow.border.ca-radius.ca-popup-top.w-auto.ca-open > div > nav > div:nth-child(1)')
        // return $('div*=View Assessment')
    }

    get undoNgasayaOptionBtn() {
        return $("div*=Undo Ngasaya");
    }

    get feedbackToFoCommentBox() {
        return $('body > div:nth-child(13) > ons-dialog > div.dialog > div > div > div.row.p-1 > div.col-12.mb-2 > textarea');
    }

    get feedbackToFoConfirmBtn() {
        return $("button*=Feedback");
    }

    get processAlert() {
        return $('div[id="datatable_processing"]');
    }

    get interviewStatusFilter() {
        return $('button[class="multiselect dropdown-toggle btn btn-default"][data-toggle="dropdown"]');
    }

    get foFilter() {
        return $('select[id="filterFOStation"]')
    }

    get btnFilter() {
        return $('button[id="btnSearchTable"]');
    }

    get btnReset() {
        return $('button[id="btnResetTable"]');
    }

    get changeRequestSuccessAlert() {
        return $('div*=change_request successfully.')
    }

    get caReviewForm() {
        return $('div[class="ca-desktop-form"]')
    }

    get caReviewFormHeader() {
        return $('h4*=Create CA Assessment')
    }

    get loanPurposeSubMenu() {
        return $('#root > div > div.ca-desktop-form.ca-desktop-form-large.p-2.pt-2 > div.ca-form-container.ca-form-desktop-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div.css-1hwfws3 > div.css-1uccc91-singleValue');
    }

    get mcixFamilyMembersYesRadio() {
        return $('input[type="radio"][name="ca_mcix_family_members"][value="1001"]')
    }

    get mcixFamilyMembersNoRadio() {
        return $('input[type="radio"][name="ca_mcix_family_members"][value="1002"]')
    }

    get businessPhotoYesRadio() {
        return $('input[type="radio"][name="ca_business_photo"][value="1001"]');
    }

    get businessPhotoNoRadio() {
        return $('input[type="radio"][name="ca_business_photo"][value="1002"]');
    }

    get caFormSubmitBtn() {
        return $('button*=Submit');
    }

    get loanPurposeOptionMenu() {
        // return $('div[class="26l3qy-menu"]');
        return $('#root > div > div.ca-desktop-form.p-2.pt-2 > div.ca-form-container.ca-form-desktop-container > div > div:nth-child(1) > div:nth-child(1) > div > div > div.css-1hwfws3')
    }

    get interviewResultDetailInCaDashboard() {
        return $("h3*=Interview Result Detail");
    }

    get btnApprove() {
        return $('button=Approve');
    }

    get caLivestockOwnerRent() {
        return $('input[type="radio"][name="ca_livestock_owner_rent"][value="1001"]');
    }

    get hasRecommendationYes() {
        return $('input[type="radio"][name="ca_livestock_recommendation"][value="1001"]');
    }
}

export default new CADashboardSelectors()