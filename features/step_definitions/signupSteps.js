// Step definitions

var search = require('../pages/homePage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	var newName;
	
	When(/^I navigate to site (.*)$/, function (name, done){
		search.navigateToRedMart()
		done();
	});
	
	When('I click on signup link', function(callback){
		search.clickSignUpLink();
		expect(search.signUpEmailElement().isDisplayed()).to.eventually.equal(true)
      .and.notify(callback)
	});

	When('I enter username as {name}', function(name, done){
		if(name === 'NewUser'){
			newName = makeid();
			search.signUpEmail('pravin'+newName+'@gmail.com');
			done();
		}else{
			search.signUpEmail(name);
			done();
		}
	});

	When('I enter password as {name}', function(name, done){
		search.signUpPassword(name);
		done();
	});

	When('I enter confirm password as {name}', function(name, done){
		search.signUpConfirmPassword(name);
		done();
	});

	Then('I will logout', function(done){
		search.logOut();
		done();
	});


	Then('I click signup and verify {name}',function(name, done){
		search.signUpButton();
		if(name === 'Error'){
			browser.driver.findElement(by.xpath("//p[@class='Input__input_error_message___18S36']")).getText().then(function(text){
			expect(text).to.be.equal('Sorry, we could not sign you up. That email is already registered.')
			done();
			})
		}else{
			browser.driver.findElement(by.id("accountPreview")).getText().then(function(text){
				console.log('Account Name : '+text)
				expect(text.toLowerCase()).to.contain('pravin'+newName.toLowerCase())
				done();
			})
		}
	});

	When('I select random {number} items', function(number, done){

		search.selectRandomItems(number);
		done();

	});


	When('I select item {code}',function(code, done){
		search.selectItem(code);

		var el = browser.driver.findElement(by.xpath("//section[@class='itemsInCart']//div[@class='carttext']"));
		browser.driver.actions().mouseMove(el).perform();
       
		el.getText().then(function(text){
			console.log('Message : '+text)
			expect(text).to.contain('item added')
			done();
		})

	});

	When('I search {text} in searchbox', function(text, done){
		search.searchBox(text);
		
		done();
	});

	When('I select home-outdoor section', function(done){
		search.homeOutdoor();
		done();
	});

	When('I select bath-bed section', function(done){
		search.bedBath();
		done();
	});

	Then('the cart should have {count} number of items', function(count, done){

		search.clickShowCart();
		browser.driver.findElements(by.xpath("//div[@id='cartPreviewProductList']//div[@class='productList']//div[@class='productContainer']")).then(function(counter){
		console.log('Actual : '+counter.length)
		console.log('Expected : '+count)
		expect(counter.length).to.equal(parseInt(count))
		done();
		})

	});

	When('I delete the {code} item', function(code, done){

		browser.driver.findElement(by.xpath("//div[@id='cartPreviewProductList']//div[@class='productList']//div[@class='productContainer']//li[@data-id='"+code+"']//button")).click()
		browser.sleep(5000)

		var el = browser.driver.findElement(by.xpath("//section[@class='itemsInCart']//div[@class='carttext']"));
		browser.driver.actions().mouseMove(el).perform();
       
		el.getText().then(function(text){
			console.log('Message : '+text)
			expect(text).to.contain('item removed')
			done();
		})
	
	})

	When('I click on Fresh Produce',function(done){
		search.clickFreshProduce();
		done();

	});

	When('I click on Ready To Eat',function(done){
		search.clickReadyToUse();
		done();

	});

	When('I click checkout',function(done){
		search.clickCheckoutButton();
		done();

	});

	Then('I click on new address',function(done){
		search.addNewAddress();
		done();

	});

	When('I enter address as {First} {Last} {Postcode} {Floor} {Unit}',function(First, Last, Postcode, Floor, Unit, done){
		search.selectAddress(First, Last, Postcode, Floor, Unit);
		done();

	});

	Then('the newly address should be selected with {value}',function(value, done){
		var el = browser.driver.findElement(by.xpath("//li[@class='address selected']//span"));
		browser.driver.actions().mouseMove(el).perform();
       
		el.getText().then(function(text){
			console.log('Message : '+text)
			expect(text.toLowerCase()).to.contain(value.toLowerCase())
			done();
		})


	});


	function makeid() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 5; i++)
		  text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	  }

		
});
