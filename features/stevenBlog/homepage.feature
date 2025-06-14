Feature: login steven blog

  @login
  Scenario Outline: Login steven blog
    Given I visit the homepage
    Then I click on login menu
    Then I login with "<username>" and "<password>"

    Examples:
      | username | password |
      | user1      |   123456 |

  @menu
  Scenario Outline: Sidebar should display menu item "<menu>"
    Given I visit the homepage
    Then I should see the menu item "<menu>"

    Examples:
      | menu      |
      | QA Basics |
      | Login     |

  @iphone13
  Scenario: Check display banner at the top
    Given I visit the homepage
    # Then I should see the banner displayed correctly

  @ipad
  Scenario: Check display banner at the top
    Given I visit the homepage
    # Then I should see the banner displayed correctly
