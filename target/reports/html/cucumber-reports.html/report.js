$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/booking.feature");
formatter.feature({
  "name": "Booking a ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "As a user I can book on booking.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should be able to go url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldBeAbleToGoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to click place input",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldBeAbleToClickPlaceInput()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to choose Check-in date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldBeAbleToChooseCheckInDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to choose Check-out date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldBeAbleToChooseCheckOutDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldBeAbleToClickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see total number of properties",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userCanSeeTotalNumberOfProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Verify the Check-in date on the left is 25 \"Sunday\", \"December\" 25, 2022 of next month",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userVerifyTheCheckInDateOnTheLeftIsOfNextMonth(int,java.lang.String,java.lang.String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Verify the Check-out date on the left is 28 \"Wednesday\", \"December\" 28, 2022 of next month",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userVerifyTheCheckOutDateOnTheLeftIsOfNextMonth(int,java.lang.String,java.lang.String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should Print the names of the properties found on this first page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Booking_Step_Def.userShouldPrintTheNamesOfThePropertiesFoundOnThisFirstPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});