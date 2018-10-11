#features/RatingAndReview.feature
Feature: Rate And Add Review
    As a user
    I should be able to rate the site
    So that I can write reviews
        
    Scenario: Rating the walletHub site
        Given I navigate to site
        When I login with pravin_lokesh@rocketmail.com
        When I hover over the rating label
        And I click on 4 star rating
        Then I should be directed to review page
        And The rating label should be Good
        When I select Health from policy dropdown
        And I select 4 star rating as Good
        Then Write 200 of words as review comment
        When I click submit button