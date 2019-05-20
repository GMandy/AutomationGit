Feature: add a item to shopping cart

  Scenario: open a product page and add to cart
    Given I opened a product page
    When I select options and click add to cart button
    Then The product is added to shopping cart