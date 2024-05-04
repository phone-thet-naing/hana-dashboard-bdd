class DataBaseSelectors {
    get username() {
        return $('input[id="input_username"]')
    }

    get password() {
        return $('input[id="input_password"]')
    }

    get btnSubmit() {
        return $('input[id="input_go"]');
    }

    get phpMyAdminImage() {
        return $('img[id="imgpmalogo"]')
    }

    get uatPlusIcon() {
        return $('li.last.navGroup img.ic_b_plus')
    }

    get dbUATDashboard() {
        return $('a*=uat_dashboard')
    }

    get actionEventsTable() {
        return $('a*=action_events')
    }

    get SQLTab() {
        return $('a*=SQL')
    }

    get queryBoxContainer() {
        return $('fieldset[id="queryboxf"]')
    }

    get queryBox() {
        return $('textarea[id="sqlquery"]')
    }

    get submitQueryBtn() {
        return $('input[id="button_submit_query"][value="Go"]')
    }

    get querySuccessAlert() {
        return $('img.icon.ic_s_success')
    }
}

export default new DataBaseSelectors()