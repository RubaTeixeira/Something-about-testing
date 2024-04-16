# Something about testing 
:construction: Project in progress :construction:

### Abstract
The main objective of this project is to show my skills in static and dynamic testing processes, based on an activity proposed in the Software Testing course at EBAC.

About the course, [click here](https://ebaconline.com.br/qualidade-de-software)

### Proposition

Considering the user stories: 
- **US-0001** - Add item to cart <br>
  > **As** an EBAC-SHOP customer <br>
   **I want** to add products to my cart <br> 
   **To** purchase items <br>
  > 
  > **Business rules:** 
  > + Do not allow products to be added to the cart above stock availability; 
  > + Block adding out-of-stock products to the cart;
  > + Allow changing the quantity of products in the cart; 
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
   
- **US-0003** - Coupon API <br>
  > **As** an EBAC-SHOP admin <br>
   **I want** create a coupon service <br> 
   **To** be able to list and register coupons <br>
  > 
  > **Business rules:** 
  > + You must register the coupons with the mandatory fields below:
  >   * Coupon code
  >   * Value
  >   * Discount type
  >   * Description
  > + Coupon name cannot be repeated 

### Testing strategy mind map
- **US-0001** <br>
  ![US-0001](img_readme/US-0001.png)
- **US-0002** <br>
  ![US-0002](img_readme/US-0002.png)
- **US-0003** <br>
  ![US-0003](img_readme/US-0003.png)
