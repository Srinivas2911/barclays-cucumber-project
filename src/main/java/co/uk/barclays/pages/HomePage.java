package co.uk.barclays.pages;

import co.uk.barclays.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {


    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    //Using selenium @Findby and initElement methods
// using _ help separate from variable

     @FindBy(linkText = "Log In")
    WebElement _loginLink;


    @FindBy (linkText = "Register")
    WebElement _registerLink;

    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on Login Link " + _loginLink.toString() + "<br>");
        clickOnElement(_loginLink);
        log.info("Clicking on Login link : " + _loginLink.toString());
    }

    public void clickOnRegisterLink() {
        Reporter.addStepLog("Clicking on Register  Link " + _registerLink.toString() + "<br>");
        clickOnElement(_registerLink);
        log.info("Clicking on Register link : " + _registerLink.toString());

    }

}
