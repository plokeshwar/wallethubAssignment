#features/selectingItemsAndValidatingItemCount.feature
Feature: Selecting items from store and validating the count in checkout
    As a user
    I should be able to select items from RedMart site
    So that I can see information and purchase items
        
    Scenario: Selecting multiple items from marketplace and validating the checkout count
       
        Given I navigate to site RedMart
        When I click on signup link
        And I enter username as NewUser
        And I enter password as Password1!
        And I enter confirm password as Password1!
        Then I click signup and verify NewUser

        When I search marketplace in searchbox
        Then I select home-outdoor section
        Then I select bath-bed section
        And I select random 4 items
        Then the cart should have 4 number of items
     
        When I click on Fresh Produce
        And I click on Ready To Eat
        And I select random 5 items
        Then the cart should have 9 number of items
        
        Then I will logout