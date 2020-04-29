package co.uk.barclays.cucumber.stepdefs;

/*
Created by SP
*/

import co.uk.barclays.pages.HomePage;
import co.uk.barclays.pages.RegisterPage;
import co.uk.barclays.pages.RegistrationPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegStepsDefs {
    @When("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @And("^I click on Accept and Close Button$")
    public void iClickOnAcceptAndCloseButton() {
        new RegisterPage().clickOnAcceptAndCloseButton();
    }

    @Then("^I am able to see the Register For Online Banking Text$")
    public void iAmAbleToSeeTheRegisterForOnlineBankingText() {
        Assert.assertEquals(new RegisterPage().getRegisterJumboText(), "Register for Online Banking");
    }

    @Given("^I am on Registration Page$")
    public void iAmOnRegistrationPage() {
        new HomePage().clickOnRegisterLink();
        new RegisterPage().clickOnAcceptAndCloseButton();

    }

    @When("^I click on Start Button$")
    public void iClickOnStartButton() {
        new RegisterPage().clickOnStartButton();
    }

    @And("^I enter surname \"([^\"]*)\"$")
    public void iEnterSurname(String surname)  {
        new RegistrationPage().enterSurname(surname);

    }

    @And("^I enter date of birth \"([^\"]*)\"$")
    public void iEnterDateOfBirth(String date)  {
        new RegistrationPage().enterDateofBirth(date);

    }

    @And("^I enter month of birth \"([^\"]*)\"$")
    public void iEnterMonthOfBirth(String month)  {
        new RegistrationPage().enterMonthofBirth(month);

    }

    @And("^I enter year of birth \"([^\"]*)\"$")
    public void iEnterYearOfBirth(String year)  {
        new RegistrationPage().enterYearofBirth(year);
    }

    @And("^I enter postcode \"([^\"]*)\"$")
    public void iEnterPostcode(String postcode)  {
        new RegistrationPage().enterPostCode(postcode);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new RegistrationPage().enterEmail(email);

    }

    @And("^I confirm the email \"([^\"]*)\"$")
    public void iConfirmTheEmail(String confirmEmail)  {
        new RegistrationPage().enterConfirmEmail(confirmEmail);

    }

    @And("^I click the Next Button$")
    public void iClickTheNextButton() {
        new RegistrationPage().clickOnRegisterNextButton();
    }

    @Then("^I am able to see the Error Alert Message$")
    public void iAmAbleToSeeTheErrorAlertMessage() {
        Assert.assertEquals(new RegistrationPage().getRegistrationAlertMessage(),"There are 2 problems with the information you've given. You'll need to correct these before you can continue.");
    }

}
