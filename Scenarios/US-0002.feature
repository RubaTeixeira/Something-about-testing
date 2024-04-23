Feature: Login Page
  As an EBAC-SHOP customer
  I want to log in to the platform  
  To view my orders

Background: 
Given that I access the authentication page of the EBAC store.

Scenario: Access with inactive user or incorret email
When I try to log in with inactive user data
Then it should display the message: "Unknown email address. Check again or try your username."

Scenario: Incorrect password
When I try to log in with the correct e-mail address and an incorrect password
Then it should display the message: "The password provided for the e-mail address <email> is incorrect. Have you lost your password?"

Scenario: Access with alternative data
When I try to access Registered username and correct password
Then a welcome message should be displayed