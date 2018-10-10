#features/RatingAndReview.feature
Feature: Rate And Add Review
    As a user
    I should be able to rate the site
    So that I can write reviews
        
    Scenario: Rating the walletHub site
        Given I navigate to site
        When I hover over the rating label
        And I click on 3 star rating
        Then I should be directed to review page
        And The rating label should be Average
        When I select Health from policy dropdown
        Then Write 500 of words as review comment and submit