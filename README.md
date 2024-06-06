# Something about testing

## Abstract

The main objective of this project is to show my skills in static and dynamic testing processes, based on the activities proposed in the Software Testing course at EBAC.

About the course, [click here](https://ebaconline.com.br/qualidade-de-software)

## Proposition

Considering the user stories:

- **US-0001** - Add item to cart <br>

  > **As** an EBAC-SHOP customer <br> **I want** to add products to my cart <br> **To** purchase items <br>
  >
  > **Business rules:**
  >
  > - Do not allow products to be added to the cart above stock availability;
  > - Block adding out-of-stock products to the cart;
  > - Must only accept valid discount coupons.

- **US-0002** - Login to the platform <br>
  > **As** an EBAC-SHOP customer <br> **I want** log in to the platform <br> **To** view my orders <br>
  >
  > **Business rules:**
  >
  > - Only active users can log in;
  > - An error message must be displayed if the user enters the wrong login and password;
  > - Login must allow e-mail or username.
- **US-0003** - Voucher API <br>
  > **As** an EBAC-SHOP admin <br> **I want** create a voucher service <br> **To** be able to list and register vouchers <br>
  >
  > **Business rules:**
  >
  > - You must register the vouchers with the mandatory fields below:
  >   - Voucher code
  >   - Value
  >   - Discount type
  >   - Description
  > - Coupon name cannot be repeated

## Testing strategy mind map

- **US-0001** <br>
  ![US-0001](img_readme/US-0001.png)
- **US-0002** <br>
  ![US-0002](img_readme/US-0002.png)
- **US-0003** <br>
  ![US-0003](img_readme/US-0003.png)

## Test execution

### Static Test

- Acceptance Criteria <br>
  I chose to use the **_Gherkin_** language to write the acceptance criteria, documentation available at the links below:

  - [**US-0001**](1_Scenarios/US-0001.feature)
  - [**US-0002**](1_Scenarios/US-0002.feature)
  - [**US-0003**](1_Scenarios/US-0003.feature)

- Test Cases

  - **US-0001** <br>
    Looking at the requirements: <br>
    a. Do not allow products to be added to the cart above stock availability;<br>
    b. Block adding out-of-stock products to the cart;<br>
    I came up with the following visualization of partitioning and limit values: <br>
    ![US001-PEBL](img_readme/US001-PEBL.png)
    <br>
    From there, I wrote the test case for this scenario: <br>

    **CT01 - Add products to cart** <br>
    **Description:** Test to validate rules for adding items to the product page <br>
    **Preconditions:** Single product with stock or no stock available <br>
    **Required parameters:** Select size and color <br>
    **Actions:** <br>
    1- Go to the product page <br>
    2- Select size and color <br>
    3- Enter quantity <br>
    4- Click on the Buy button <br>
    **Expected results:** <br>
    ![US0001TC01](img_readme/US001TC01.png)

    Finally, for the last business rule: <br>
    c. Must only accept valid discount coupons. <br>
    As this is a boolean rule, I created the test case for coverage in the valid and invalid cases: <br>

    **CT02 - Using a discount voucher** <br>
    **Description:** Test of the use of a voucher when purchasing a product <br>
    **Preconditions:** Valid voucher <br>
    **Required parameters:** Have product added to cart <br>
    **Actions:** <br>
    1- Access the shopping cart <br>
    2- Enter the voucher code <br>
    3- Confirm the discount in the final price <br>
    **Expected results:** <br>
    ![US0001TC02](img_readme/US001TC02.png)

  - **US-0002** <br>
    For this user story, we have the following rules: <br>
    a. Only active users can log in; <br>
    b. An error message must be displayed if the user enters the wrong login and password; <br>
    c. Login must allow e-mail or username. <br>
    Just to illustrate the login dynamics, I've used the simplified decision tables for each scenario:

    - Access with e-mail <br>
      ![Condition1](img_readme/US002Conditional1.png)
    - Access with username <br>
      ![Condition1](img_readme/US002Conditional2.png)

    From this, defining the test case: <br>

    **CT01 - Login testing** <br>
    **Description:** Test access with email, or username and password <br>
    **Preconditions:** User already registered <br>
    **Required parameters:** Massive data with email, password and username <br>
    **Actions:** <br>
    1- Access login page <br>
    2- Enter email or username and password <br>
    3- Click on the Login button <br>
    **Expected results:** <br>
    ![US002TC01](img_readme/US002TC01.png)

  - **US-0003** <br>
    For this last user story, apart from the indication of fields to fill in, we only have a very simple rule: <br>
    a. Coupon name cannot be repeated. <br>

    Visualizing the rule, we have: <br>
    ![US0003Conditional](img_readme/US003Conditional1.png)

    So I wrote the test case like this: <br>

    **CT01 - Create voucher code** <br>
    **Description:** Test creation of voucher for discount on purchases. <br>
    **Preconditions:** Have administrator password, single name voucher <br>
    **Required parameters:** Voucher code, Amount, Discount type, description <br>
    **Actions:** <br>
    1- Access the API <br>
    2- List existing vouchers <br>
    3- Enter new voucher details <br>
    4- Register new voucher <br>
    **Expected results:** <br>
    ![US0003TC01](img_readme/US003TC01.png)

### Dynamic Test

- Web <br>
  The tests were carried out using the Cypress platform.<br>
  I chose to use customized commands and also data masses in the fixture folder.<br>
  Check out the structure in the options:

  - [**US-0001**](2_Web_Testing/cypress/e2e/US001)
  - [**US-0002**](2_Web_Testing/cypress/e2e/US002)

- Mobile <br>
  For the mobile test, I used Appium, with the Webdriver\IO structure.<br>
  I implemented it for local testing, but I also included a framework for use in Sauce Labs.<br>
  I opted for a simple login test, with just one spec including all the scenarios, but also using the page objects feature.<br>
  Check out the structure at the link below:

  - [**US-0002**](3_Mobile_Testing/test/specs/US002)

- API <br>
  API tests were carried out using Postman and Cypress, the configuration and code files are in the link below.
  - [**US-0003**](2_Web_Testing/cypress/e2e/US003)

## Performance Testing

This test was carried out using Jmeter, testing performance with the login flow.

Performance test configurations:

- Virtual users: 20
- Execution time: 2 minutes
- RampUp: 20 seconds
- Data mass: User / password

Check out the configuration [here](4_Performance_Testing).

## Tools

<br>
<a href="https://cucumber.io/" target="_blank" rel="noreferrer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiEs8iInyRBbmwwGExDQDBF77BJ-Ok54tpxjIHyUxGw&s" alt="cucumber" width="40" height="40"/> </a> &nbsp;
<a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/> </a> &nbsp;
<a href="https://www.appium.io/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/appium/appium/master/packages/appium/docs/assets/images/appium-logo-horiz.png" alt="appium" width="180" height="40"/> </a> &nbsp;
<a href="https://saucelabs.com/" target="_blank" rel="noreferrer"> <img src="https://saucelabs.com/images/logo.svg" alt="saucelabs" width="180" height="40"/> </a> &nbsp;
<a href="https://https://jmeter.apache.org/" target="_blank" rel="noreferrer"> <img src="https://jmeter.apache.org/images/logo.svg" alt="jmeter" width="120" height="40"/> </a> &nbsp;
<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> &nbsp;
