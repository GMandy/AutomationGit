Feature: login website

  Scenario Outline: login website using correct account
    Given I am on the login page
    When I login using <username> and <password>
    And  I click singin button
    Then I login successful

    Examples:
        |         username            |    password      |
        |   rmgao@nltechdev.com       |   Gm111111       |
        |   gm01@test.com             |   Gm222222       |
