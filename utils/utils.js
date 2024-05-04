import { readFileSync } from 'fs'

class Utils {
    async waitForElementExistence(selector, timeoutMs) {
        const startTime = Date.now();

        while (Date.now() - startTime < timeoutMs) {
            const isExisting = await $(selector).isExisting();
            if (isExisting) {
                return true; // Element found within the duration
            }
            await browser.pause(100); // Add a small pause between checks
        }

        return false; // Element not found before timeout
    }

    /**
     * 
     * @returns test data from /data
     */
    getDataFromJSON(path) {
        return JSON.parse(readFileSync(path))
    }

    getCurrentDateTime(format = "dd-mm-yyyy") {
        const currentDateTime = new Date();
    
        // Get the day, month, and year components
        const day = currentDateTime.getDate();
        const month = currentDateTime.getMonth() + 1; // Months are zero-indexed
        const year = currentDateTime.getFullYear();
    
        // Get the hour and minute components
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const seconds = currentDateTime.getSeconds();
    
        // Ensure that single-digit day, month, hour, and minute are formatted with leading zeros
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
        let formattedDateTime = "";
        if (format === "dd-mm-yyyy") {
            // Construct the date and time string in "dd-mm-yyyy hh:mm" format
            formattedDateTime = `${formattedDay}-${formattedMonth}-${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        } else if (format === "yyyy-mm-dd") {
            // yyyy-mm-dd
            formattedDateTime = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        } else {
            // mm-dd-yyyy
            formattedDateTime = `${formattedMonth}-${formattedDay}-${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
        
        return formattedDateTime;
    }

    getCallCenterQuery({interview_id, call_date, created_at, updated_at, ca_assessment_date}) {
        return `INSERT INTO
        dp_call_center(id, interview_id, call_status, call_date, remark, uploaded_by, created_at, updated_at)
        VALUES
            (NULL, '${interview_id}', '2', '${call_date}', 'remark', 'ptn', '${created_at}', '${updated_at}' );
    
        INSERT INTO
            dp_call_center_history ( id, interview_id, area_no, region, office, client_id, loan_id, group_name, phone_no1, phone_no2, success_call_phone_no, officer_name, client_name, father_name, nrc, ca_assessment_date, call_date, call_status, remark, uploaded_by, created_at, updated_at )
        VALUES
            ( NULL, '${interview_id}', 'QA Testing', 'Region 1', 'Thein Phyu', '407396', '000000', '_', '9687879625', '-', '-', 'Aung Aung', 'U Min Thu', 'U Thu Win', '၁/မကန()၀၀၀၀၀၅', '${ca_assessment_date}', '${call_date}', '2', 'remark', 'ptn', '${created_at}', '${updated_at}' );`
    }
}

export default new Utils()