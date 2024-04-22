# Something about testing 
:construction: Project in progress :construction:

## Abstract
The main objective of this project is to show my skills in static and dynamic testing processes, based on an activity proposed in the Software Testing course at EBAC.

About the course, [click here](https://ebaconline.com.br/qualidade-de-software)

## Proposition

Considering the user stories: 
- **US-0001** - Add item to cart <br>
  > **As** an EBAC-SHOP customer <br>
   **I want** to add products to my cart <br> 
   **To** purchase items <br>
  > 
  > **Business rules:** 
  > + Do not allow products to be added to the cart above stock availability; 
  > + Block adding out-of-stock products to the cart; 
  > + Must only accept valid discount coupons.
 
- **US-0002** - Login to the platform <br>
  > **As** an EBAC-SHOP customer <br>
   **I want** log in to the platform <br> 
   **To** view my orders <br>
  > 
  > **Business rules:** 
  > + Only active users can log in;
  > + An error message must be displayed if the user enters the wrong login and password;
  > + Login must allow e-mail or username.
   
- **US-0003** - Voucher API <br>
  > **As** an EBAC-SHOP admin <br>
   **I want** create a voucher service <br> 
   **To** be able to list and register vouchers <br>
  > 
  > **Business rules:** 
  > + You must register the vouchers with the mandatory fields below:
  >   * Voucher code
  >   * Value
  >   * Discount type
  >   * Description
  > + Coupon name cannot be repeated 

## Testing strategy mind map
- **US-0001** <br>
  ![US-0001](img_readme/US-0001.png)
- **US-0002** <br>
  ![US-0002](img_readme/US-0002.png)
- **US-0003** <br>
  ![US-0003](img_readme/US-0003.png)

## Test execution
### Static Test
- Acceptance Criteria
  + **US-0001**
  + **US-0002**
  + **US-0003**

- Test Cases
  + **US-0001**
  + **US-0002**
  + **US-0003**

### Dynamic Test
- Web
  + **US-0001**
  + **US-0002**

- Mobile
  + **US-0001**
  + **US-0002**

- API
  + **US-0003**

## Tools  
<br>
<a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/> </a> &nbsp;
<a href="https://www.appium.io/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/appium/appium/master/packages/appium/docs/assets/images/appium-logo-horiz.png" alt="appium" width="180" height="40"/> </a> &nbsp;
<a href="https://https://jmeter.apache.org/" target="_blank" rel="noreferrer"> <img src="https://jmeter.apache.org/images/logo.svg" alt="jmeter" width="120" height="40"/> </a> &nbsp;
<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> &nbsp;
<a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a> &nbsp;
