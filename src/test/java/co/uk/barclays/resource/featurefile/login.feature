Feature: Login feature
  As a user I want to login to Barclays Bank

  Background: User in on Home page

  Scenario: Verify User is Able to Navigate to Login Page

    Given I am on Home Page
    When I click on Login link
    Then I am able see the Login Page Message Quick,safe and Convenient

  Scenario Outline: Verify User is Unable to Login with invalid credentials

    Given I am on Login Page
    When I enter "<surname>"
    And I enter invalid "<membership>"
    And I click on Next Step
    Then I get Membership error Message
    Examples:
      | surname | membership   |
      | Worrow  | 123456789123 |
      | Johnson | 354656765654 |
      | Morwood | 656576560987 |