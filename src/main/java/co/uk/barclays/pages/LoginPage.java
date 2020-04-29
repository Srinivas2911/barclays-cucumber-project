package co.uk.barclays.pages;

import co.uk.barclays.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {


    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    //Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//strong[contains(text(),'Quick, safe and convenient')]")
    WebElement _textOnLoginPage;

    @FindBy(linkText = "Register now")
    WebElement _registerNowLink;

    @FindBy(id = "surname0")
    WebElement _surname;

    @FindBy(id = "membershipNum0")
    WebElement _membership;

    @FindBy(className = "btn")
        WebElement _nextStepButton;

    @FindBy(xpath = "//div[contains(text(),\"Sorry, we can't log you in to Online Banking becau\")]")
    WebElement _membershipError;

    public void verifyTextOnLoginPage() {
        Reporter.addStepLog("Displaying Login Page Text " + _textOnLoginPage.toString());
        verifyThatTextIsDisplayed(_textOnLoginPage, "Quick, safe and convenient");
        log.info("Displaying Login Page Text : " + _textOnLoginPage.toString());
    }

    public String getTextOnLoginPage() {
        Reporter.addStepLog("Displaying Login Page Text " + _textOnLoginPage.toString());
        log.info("Displaying Login Page Text : " + _textOnLoginPage.toString());
        return getTextFromElement(_textOnLoginPage);
    }

    public void clickOnRegisterNowLink() {
        Reporter.addStepLog("Clicking on Register Link  " + _registerNowLink.toString());
        clickOnElement(_registerNowLink);
        log.info("Clicking on Register Link : " + _registerNowLink.toString());
    }


    public void enterSurname(String surname) {
        Reporter.addStepLog("Entering Surname  : " + surname + " on Surname Field " + _surname.toString());
        clickOnElement(_surname);
        sendTextToElement(_surname, surname);
        log.info("Entering Surname  : " + surname + " on Surname Field " + _surname.toString());
    }

    public void enterMembership(String membership) {
        Reporter.addStepLog("Entering Membership  : " + membership + " on Surname Field " + _membership.toString());
        clickOnElement(_membership);
        sendTextToElement(_membership, membership);
        log.info("Entering Surname  : " + membership + " on Surname Field " + _membership.toString());
    }

    public void clickOnNextStepButton() {
        Reporter.addStepLog("Clicking on Next Step Button  " + _nextStepButton.toString());
        clickOnElement(_nextStepButton);
        log.info("Clicking on Next Step Button : " + _nextStepButton.toString());
    }

    public String getMembershipErrorMessage() {
        Reporter.addStepLog("Getting Membership Error Message : " + _membershipError.toString());
        log.info("Getting Membership Error Message : " + _membershipError.toString());
        return getTextFromElement(_membershipError);
    }


}
