#features/signupDuplicateUser.feature
Feature: Signing up duplicate user
    As a user
    I should not be able to signup again in RedMart site
    So that system cannot store duplicate records
        
    Scenario: Signup a duplicate user on RedMart
        Given I navigate to site RedMart
        When I click on signup link
        And I enter username as pravin09@gmail.com
        And I enter password as Password1!
        And I enter confirm password as Password1!
        When I click signup and verify Error