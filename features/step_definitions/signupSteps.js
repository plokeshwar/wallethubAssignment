// Step definitions

var review = require('../pages/reviewPage.js');
var randomWords = require('random-words');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	var newName;
	
	When('I navigate to site', function (done){
		review.navigateToSite();
		done();
	});
	
	When('I login with {username}', function(username, done){
		review.login(username, 'Password1!');
		browser.sleep(5000)
		browser.driver.findElement(by.xpath('//a[@class=\'user\']')).getText().then(function (text) {
		console.log('User Logged In : '+text)	
		expect(username).to.contain(text)
		done();
		});


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

	Then('I select {rate} star rating as {label}', function(rate, label, done){
		review.selectRating(rate)
		browser.driver.findElement(by.xpath('//span[@class=\'rating-label\']')).getText().then(function (text) {
		console.log('Actual Rating : '+text)	
		expect(text).to.be.equal(label)
				done();
		});
	});

	Then('Write {numb} of words as review comment', function(numb, done){
		console.log('Entering '+numb+' of words for review.')
		var value = randomWords({ exactly: parseInt(numb), join: ' ' }).toString()
        console.log(value)
        
		review.enterReview(value);
		
		browser.driver.findElement(by.xpath('//input[@type=\'submit\']')).isDisplayed().then(function (flag) {
		console.log('Submit Button Displayed : '+flag)	
		expect(flag).to.be.equal(true)
				done();
		});
		
	});

	When('I click submit button', function(done){


	});

		
});
