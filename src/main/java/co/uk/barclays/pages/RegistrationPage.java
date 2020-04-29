package co.uk.barclays.pages;

/*
Created by SP
*/

import co.uk.barclays.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrationPage extends Utility {
    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    //Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//input[@name='surname']")
    WebElement _surnameField;

    public void enterSurname(String surname) {
        Reporter.addStepLog("Entering Surname  : " + surname + " on Surname Field " + _surnameField.toString());
        sendTextToElement(_surnameField, surname);

        log.info("Entering Surname  : " + surname + " on Surname Field " + _surnameField.toString());
    }

    @FindBy(id = "dateOfBirth0")
    WebElement _dateField;

    public void enterDateofBirth(String date) {
        Reporter.addStepLog("Entering date  : " + date + " on Date Field " + _dateField.toString());
        //    mouseHoverToElementAndClick(_dateField);
        sendTextToElement(_dateField, date);
        log.info("Entering date  : " + date + " on Date Field " + _dateField.toString());
    }

    @FindBy(id = "dateOfBirth1")
    WebElement _monthField;

    public void enterMonthofBirth(String month) {
        Reporter.addStepLog("Entering month  : " + month + " on Month Field " + _monthField.toString());
        sendTextToElement(_monthField, month);
        log.info("Entering month  : " + month + " on Month Field " + _monthField.toString());
    }

    @FindBy(id = "dateOfBirth2")
    WebElement _yearField;

    public void enterYearofBirth(String year) {
        Reporter.addStepLog("Entering year  : " + year + " on Year Field " + _yearField.toString());
        sendTextToElement(_yearField, year);
        log.info("Entering year  : " + year + " on Year Field " + _yearField.toString());
    }

    @FindBy(id = "postcode")
    WebElement _postcode;

    public void enterPostCode(String postcode) {
        Reporter.addStepLog("Entering postcode  : " + postcode + " on Postcode Field " + _postcode.toString());
        //    mouseHoverToElementAndClick(_postcode);
        sendTextToElement(_postcode, postcode);
        log.info("Entering postcode  : " + postcode + " on Postcode Field " + _postcode.toString());

    }

    @FindBy(xpath = "//input[@name='email']")
    WebElement _email;

    public void enterEmail(String email) {
        Reporter.addStepLog("Entering email  : " + email + " on Email Field " + _email.toString());
        sendTextToElement(_email, email);
        log.info("Entering email  : " + email + " on Email Field " + _email.toString());
    }

    @FindBy(xpath = "//input[@name='confirmEmail']")
    WebElement _confirmEmail;

    public void enterConfirmEmail(String email) {
        Reporter.addStepLog("Confirming email  : " + email + " on Confirm Email Field " + _confirmEmail.toString());
        sendTextToElement(_confirmEmail, email);
        log.info("Confirming email  : " + email + " on Confirm Email Field " + _confirmEmail.toString());
    }

    @FindBy(xpath = "//button[@class='btn btn-primary pull-right margin-bottom-40px btn-width']")
    WebElement _registerNextBtn;

    public void clickOnRegisterNextButton() {
        Reporter.addStepLog("Clicking on Next Button  " + _registerNextBtn.toString());
        clickOnElement(_registerNextBtn);
        log.info("Clicking on Next Step Button : " + _registerNextBtn.toString());
    }

    @FindBy(xpath = "//p[@class='alert-heading error-heading ng-binding']")
    WebElement _alertMessage;

    public String getRegistrationAlertMessage() {
        Reporter.addStepLog("Displaying Registration Alert Message " + _alertMessage.toString());
        log.info("Displaying Registration Alert Message " + _alertMessage.toString());
        return getTextFromElement(_alertMessage);
    }

}
