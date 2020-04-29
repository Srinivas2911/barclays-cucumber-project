$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/co/uk/barclays/resource/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "As a user I want to login to Barclays Bank",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20597503000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is Able to Navigate to Login Page",
  "description": "",
  "id": "login-feature;verify-user-is-able-to-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am able see the Login Page Message Quick,safe and Convenient",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 246649000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 14789813000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmAbleSeeTheLoginPageMessageQuickSafeAndConvenient()"
});
formatter.result({
  "duration": 187892300,
  "status": "passed"
});
formatter.after({
  "duration": 1616406300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify User is Unable to Login with invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003csurname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid \"\u003cmembership\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Next Step",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Membership error Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "surname",
        "membership"
      ],
      "line": 20,
      "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Worrow",
        "123456789123"
      ],
      "line": 21,
      "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Johnson",
        "354656765654"
      ],
      "line": 22,
      "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Morwood",
        "656576560987"
      ],
      "line": 23,
      "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16228373200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User is Unable to Login with invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"Worrow\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid \"123456789123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Next Step",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Membership error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 13280608300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Worrow",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnter(String)"
});
formatter.result({
  "duration": 395990800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789123",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalid(String)"
});
formatter.result({
  "duration": 402470100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextStep()"
});
formatter.result({
  "duration": 796641500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iGetMembershipErrorMessage()"
});
formatter.result({
  "duration": 181368200,
  "status": "passed"
});
formatter.after({
  "duration": 1639843200,
  "status": "passed"
});
formatter.before({
  "duration": 15497648400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User is Unable to Login with invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"Johnson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid \"354656765654\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Next Step",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Membership error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 13275084200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnson",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnter(String)"
});
formatter.result({
  "duration": 331667200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354656765654",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalid(String)"
});
formatter.result({
  "duration": 365165900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextStep()"
});
formatter.result({
  "duration": 736942100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iGetMembershipErrorMessage()"
});
formatter.result({
  "duration": 254123900,
  "status": "passed"
});
formatter.after({
  "duration": 1464407100,
  "status": "passed"
});
formatter.before({
  "duration": 15258592600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User is Unable to Login with invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-is-unable-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"Morwood\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid \"656576560987\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Next Step",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Membership error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12084985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morwood",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnter(String)"
});
formatter.result({
  "duration": 342991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "656576560987",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalid(String)"
});
formatter.result({
  "duration": 507152900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextStep()"
});
formatter.result({
  "duration": 911932200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iGetMembershipErrorMessage()"
});
formatter.result({
  "duration": 107745800,
  "status": "passed"
});
formatter.after({
  "duration": 2339531100,
  "status": "passed"
});
formatter.uri("src/test/java/co/uk/barclays/resource/featurefile/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register feature",
  "description": "As a user I want to register to Barclays Account",
  "id": "register-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15437025200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is Able to navigate to register page",
  "description": "",
  "id": "register-feature;verify-user-is-able-to-navigate-to-register-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Accept and Close Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am able to see the Register For Online Banking Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 11671597900,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickOnAcceptAndCloseButton()"
});
formatter.result({
  "duration": 185030900,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iAmAbleToSeeTheRegisterForOnlineBankingText()"
});
formatter.result({
  "duration": 99224300,
  "status": "passed"
});
formatter.after({
  "duration": 1421900700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify User is Not Able to Register with Invalid Credentials",
  "description": "",
  "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Start Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter surname \"\u003csurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter date of birth \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter month of birth \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter year of birth \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I confirm the email \"\u003cconfirmEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Next Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I am able to see the Error Alert Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "surname",
        "date",
        "month",
        "year",
        "postcode",
        "email",
        "confirmEmail"
      ],
      "line": 28,
      "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Worrow",
        "28",
        "02",
        "1956",
        "HA6 1NW",
        "worrow@gmail.com",
        "worrow@gmail.com"
      ],
      "line": 29,
      "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Johnson",
        "15",
        "08",
        "1966",
        "N3 1QS",
        "johnson@boris.com",
        "johnson@boris.com"
      ],
      "line": 30,
      "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Morwood",
        "08",
        "12",
        "1944",
        "UB10 8PD",
        "morwood@yahoo.com",
        "morwood@yahoo.com"
      ],
      "line": 31,
      "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14341609700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "Verify User is Not Able to Register with Invalid Credentials",
  "description": "",
  "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Start Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter surname \"Worrow\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter date of birth \"28\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter month of birth \"02\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter year of birth \"1956\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"HA6 1NW\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter email \"worrow@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I confirm the email \"worrow@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Next Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I am able to see the Error Alert Message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegStepsDefs.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 11550772700,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickOnStartButton()"
});
formatter.result({
  "duration": 200103900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Worrow",
      "offset": 17
    }
  ],
  "location": "RegStepsDefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 558974100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 221446800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 24
    }
  ],
  "location": "RegStepsDefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 141905200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1956",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 182926400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA6 1NW",
      "offset": 18
    }
  ],
  "location": "RegStepsDefs.iEnterPostcode(String)"
});
formatter.result({
  "duration": 247311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "worrow@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegStepsDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 449882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "worrow@gmail.com",
      "offset": 21
    }
  ],
  "location": "RegStepsDefs.iConfirmTheEmail(String)"
});
formatter.result({
  "duration": 289614000,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickTheNextButton()"
});
formatter.result({
  "duration": 246958300,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iAmAbleToSeeTheErrorAlertMessage()"
});
formatter.result({
  "duration": 84225000,
  "status": "passed"
});
formatter.after({
  "duration": 1320516800,
  "status": "passed"
});
formatter.before({
  "duration": 16129427700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "Verify User is Not Able to Register with Invalid Credentials",
  "description": "",
  "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Start Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter surname \"Johnson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter date of birth \"15\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter month of birth \"08\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter year of birth \"1966\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"N3 1QS\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter email \"johnson@boris.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I confirm the email \"johnson@boris.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Next Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I am able to see the Error Alert Message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegStepsDefs.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 11822440600,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickOnStartButton()"
});
formatter.result({
  "duration": 206252900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnson",
      "offset": 17
    }
  ],
  "location": "RegStepsDefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 644113300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 221164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 24
    }
  ],
  "location": "RegStepsDefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 147204100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1966",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 169979200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N3 1QS",
      "offset": 18
    }
  ],
  "location": "RegStepsDefs.iEnterPostcode(String)"
});
formatter.result({
  "duration": 335278600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnson@boris.com",
      "offset": 15
    }
  ],
  "location": "RegStepsDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 525356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnson@boris.com",
      "offset": 21
    }
  ],
  "location": "RegStepsDefs.iConfirmTheEmail(String)"
});
formatter.result({
  "duration": 398000700,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickTheNextButton()"
});
formatter.result({
  "duration": 218385500,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iAmAbleToSeeTheErrorAlertMessage()"
});
formatter.result({
  "duration": 195139200,
  "status": "passed"
});
formatter.after({
  "duration": 1662811600,
  "status": "passed"
});
formatter.before({
  "duration": 14921183500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User in on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "Verify User is Not Able to Register with Invalid Credentials",
  "description": "",
  "id": "register-feature;verify-user-is-not-able-to-register-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Start Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter surname \"Morwood\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter date of birth \"08\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter month of birth \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter year of birth \"1944\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"UB10 8PD\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter email \"morwood@yahoo.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I confirm the email \"morwood@yahoo.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Next Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I am able to see the Error Alert Message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegStepsDefs.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 12485050300,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickOnStartButton()"
});
formatter.result({
  "duration": 204854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morwood",
      "offset": 17
    }
  ],
  "location": "RegStepsDefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 619198100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 205897700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 24
    }
  ],
  "location": "RegStepsDefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 123761100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1944",
      "offset": 23
    }
  ],
  "location": "RegStepsDefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 150238800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UB10 8PD",
      "offset": 18
    }
  ],
  "location": "RegStepsDefs.iEnterPostcode(String)"
});
formatter.result({
  "duration": 264361200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "morwood@yahoo.com",
      "offset": 15
    }
  ],
  "location": "RegStepsDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 509274500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "morwood@yahoo.com",
      "offset": 21
    }
  ],
  "location": "RegStepsDefs.iConfirmTheEmail(String)"
});
formatter.result({
  "duration": 295431300,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iClickTheNextButton()"
});
formatter.result({
  "duration": 167936100,
  "status": "passed"
});
formatter.match({
  "location": "RegStepsDefs.iAmAbleToSeeTheErrorAlertMessage()"
});
formatter.result({
  "duration": 149963200,
  "status": "passed"
});
formatter.after({
  "duration": 1557664800,
  "status": "passed"
});
});