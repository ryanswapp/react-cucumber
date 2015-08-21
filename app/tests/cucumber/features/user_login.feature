Feature: User Login

  As an existing user
  I want to be able to login
  So that I can access the awesome app

  Background:
    Given I am an existing user
    And I navigate to "/login"

  @dev
  Scenario: Log in
    When I enter my email "ryancswapp@gmail.com" and password "foodbars"
    And I submit the form
    Then I should see the home page
