package co.uk.barclays.cucumber.stepdefs;
/*
Created by SP
*/

import co.uk.barclays.pages.HomePage;
import co.uk.barclays.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }
    @When("^I click on Login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }
    @Then("^I am able see the Login Page Message Quick,safe and Convenient$")
    public void iAmAbleSeeTheLoginPageMessageQuickSafeAndConvenient() {
        Assert.assertEquals(new LoginPage().getTextOnLoginPage(), "Quick, safe and convenient");
    }

    @Given("^I am on Login Page$")
    public void iAmOnLoginPage() {
        new HomePage().clickOnLoginLink();
    }

    @When("^I enter \"([^\"]*)\"$")
    public void iEnter(String surname)  {
        new LoginPage().enterSurname(surname);

    }

    @And("^I enter invalid \"([^\"]*)\"$")
    public void iEnterInvalid(String membership)  {
        new LoginPage().enterMembership(membership);

    }

    @And("^I click on Next Step$")
    public void iClickOnNextStep() {
        new LoginPage().clickOnNextStepButton();
    }

    @Then("^I get Membership error Message$")
    public void iGetMembershipErrorMessage() {
        Assert.assertEquals(new LoginPage().getMembershipErrorMessage(),
                "Sorry, we can't log you in to Online Banking because the details you've entered don't match our records. Please check that they're correct before trying again. This includes your name and your 12-digit membership number.");
    }
}
