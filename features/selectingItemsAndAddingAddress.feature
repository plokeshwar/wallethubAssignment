#features/selectingItemsAndValidatingItemCount.feature
Feature: Selecting items from store and checking out to Add Address section
    As a user
    I should be able to select items from RedMart site and checkout
    So that I can add the delivery address

    Scenario: Selecting multiple items, checking out and adding new address
        Given I navigate to site RedMart
        When I click on signup link
        And I enter username as NewUser
        And I enter password as Password1!
        And I enter confirm password as Password1!
        Then I click signup and verify NewUser

        When I search marketplace in searchbox
        Then I select home-outdoor section
        Then I select bath-bed section
        And I select item 132833
        And I select item 139722
        And I select item 133266
        Then the cart should have 3 number of items

        When I search on sale in searchbox
        And I select random 3 items
        Then the cart should have 6 number of items
     
        When I click on Fresh Produce
        And I click on Ready To Eat
        And I select item 127490
        And I select item 174725
        And I select item 182638
        Then the cart should have 9 number of items

        When I delete the 132833 item
        Then the cart should have 8 number of items

        When I click checkout
        Then I click on new address
        And I enter address as Tom Hardy 619747 7 1
        Then the newly address should be selected with Tom Hardy

        Then I will logout
