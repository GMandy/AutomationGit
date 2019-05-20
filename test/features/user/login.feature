Feature: login website

  Scenario: login website successful using correct account
    Given I am on the login page
    When I login using correct account userGao
    Then I can logout


