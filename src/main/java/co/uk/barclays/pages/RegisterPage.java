package co.uk.barclays.pages;

import co.uk.barclays.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class RegisterPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    //Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy (xpath = "//h2[@class='h2 jumbo-title']")
    WebElement _registerJumboText;

    @FindBy(xpath="//div[@class='col-xs-12 accptclose-btn-main pull-right hidden-xs']//button[@class='btn btn-secondary btn-width-xs'][contains(text(),'Accept and close')]")
    WebElement _acceptAndCloseBtn;

    @FindBy(xpath="//button[@class='btn btn-primary pull-right margin-bottom-40px btn-width']")
            WebElement _startBtn;



    public void verifyRegisterJumboText(){
        Reporter.addStepLog("Displaying Register Page Text " + _registerJumboText.toString() + "<br>");
        verifyThatTextIsDisplayed(_registerJumboText, "Register for Online Banking");
        log.info("Displaying Register Page Text : " + _registerJumboText.toString());

    }

    public String getRegisterJumboText (){
        Reporter.addStepLog("Displaying Register Page Text " + _registerJumboText.toString() + "<br>");
        log.info("Displaying Register Page Text : " + _registerJumboText.toString());
        return getTextFromElement(_registerJumboText);
    }

    public void clickOnAcceptAndCloseButton(){
        Reporter.addStepLog("Clicking on Accept and Close Button  " + _acceptAndCloseBtn.toString());
        clickOnElement(_acceptAndCloseBtn);
        log.info("Clicking on Accept and Close Button : " + _acceptAndCloseBtn.toString());
    }

    public void clickOnStartButton(){
        Reporter.addStepLog("Clicking on Start Button  " + _startBtn.toString());
        clickOnElement(_startBtn);
        log.info("Clicking on Accept and Close Button : " + _startBtn.toString());
    }


}
