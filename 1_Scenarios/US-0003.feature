Feature: Voucher API
As an EBAC-SHOP admin
I want to create a coupon service
To be able to list and register coupons

Background: 
Given that I access the EBAC store administrator page.

Scenario: Registering a new coupon
When I register a new coupon
Then the message Coupon registered successfully should be displayed

Scenario: Registering a coupon with the same name
When I try to register a coupon with an already registered name 
Then a previously registered coupon error message should be displayed