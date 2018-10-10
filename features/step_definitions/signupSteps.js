// Step definitions

var review = require('../pages/reviewPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	var newName;
	
	When('I navigate to site', function (done){
		review.navigateToSite();
		done();
	});
	
	When('I hover over the rating label', function(done){
		review.hoverOverReview();
		done();
	});


	When('I click on {rate} star rating', function(rate, done){
		review.clickRating(rate);
		done();
		});

	Then('I should be directed to review page', function(done){
		var expected = 'Reviews | Write Review';

		browser.sleep(5000);
		browser.driver.getTitle().then(function(webpagetitle){
				console.log('Actual Title : '+webpagetitle)
				expect(webpagetitle).to.be.equal(expected)
				done();
			})
	});

	Then('The rating label should be {rateLabel}', function(rateLabel, done){
		
		browser.driver.findElement(by.xpath('//span[@class=\'rating-label\']')).getText().then(function (text) {
		console.log('Actual Rating : '+text)	
		expect(text).to.be.equal(rateLabel)
				done();
		});
	});


	Then('I select {option} from policy dropdown', function(option, done){
		review.selectPolicy(option);
		
		done();
	});

	Then('Write {numb} of words as review comment and submit', function(numb, done){
		review.enterReview(numb);
		//done();	
		});

		
});
