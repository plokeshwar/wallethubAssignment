#features/signupNewUser.feature
Feature: Signing up new user
    As a user
    I should be able to signup in RedMart site
    So that I can see search and purchase items
        
    Scenario: Signup a new user on RedMart
        Given I navigate to site RedMart
        When I click on signup link
        And I enter username as NewUser
        And I enter password as Password1!
        And I enter confirm password as Password1!
        When I click signup and verify NewUser
        Then I will logout