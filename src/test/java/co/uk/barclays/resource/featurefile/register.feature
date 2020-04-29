Feature: Register feature
  As a user I want to register to Barclays Account

  Background: User in on Home page

  Scenario: Verify User is Able to navigate to register page
    Given I am on Home Page
    When I click on Register Link
    And I click on Accept and Close Button
    Then I am able to see the Register For Online Banking Text


  Scenario Outline: Verify User is Not Able to Register with Invalid Credentials

    Given I am on Registration Page
    When I click on Start Button
    And  I enter surname "<surname>"
    And I enter date of birth "<date>"
    And I enter month of birth "<month>"
    And I enter year of birth "<year>"
    And I enter postcode "<postcode>"
    And I enter email "<email>"
    And I confirm the email "<confirmEmail>"
    And I click the Next Button
    Then I am able to see the Error Alert Message

    Examples:
      | surname | date | month | year | postcode | email             | confirmEmail      |
      | Worrow  | 28   | 02    | 1956 | HA6 1NW  | worrow@gmail.com  | worrow@gmail.com  |
      | Johnson | 15   | 08    | 1966 | N3 1QS   | johnson@boris.com | johnson@boris.com |
      | Morwood | 08   | 12    | 1944 | UB10 8PD | morwood@yahoo.com | morwood@yahoo.com |