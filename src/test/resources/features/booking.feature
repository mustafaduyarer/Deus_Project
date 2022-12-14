@smoke
Feature: Booking a ticket

  Scenario: As a user I can book on booking.com
    Given user should be able to go url
    When user should be able to click place input
    And user should be able to choose Check-in date
    And user should be able to choose Check-out date
    Then user should be able to click search button
    And user can see total number of properties
    Then user Verify the Check-in date on the left is 25 "Sunday", "December" 25, 2022 of next month
    Then user Verify the Check-out date on the left is 28 "Wednesday", "December" 28, 2022 of next month
    And user should Print the names of the properties found on this first page