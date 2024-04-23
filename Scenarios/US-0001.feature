Feature: Add products to cart
  As an EBAC-SHOP customer
  I want to add products to my cart 
  To purchase items

Background: 
Given that I add products to the cart in the EBAC store.

Scenario: Stock limit
When I try to add more items than are available in stock
Then it should display the message: "The value must be less than or equal to the limit"

Scenario: Product out of stock
When I try to add product out of stock
Then it should show the message: "Sorry, this product is not available. Please choose a different combination."

Scenario: Use voucher 
When I enter a valid discount voucher 
Then it should show the voucher name and discount amount in the description 