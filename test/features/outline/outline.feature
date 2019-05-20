Feature: Test Scenario Outline

    Scenario Outline: eating
        Given there are <start> cucumbers
        When I eat <eat> cucumbers
        Then I should have <left> cucumbers

        Example:
            | start | eat  | left |
            | 12    |  5   |   7  |
            | 20    |  5   |   15 |