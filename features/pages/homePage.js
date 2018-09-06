// Page class for search page

var HomePage = function() {

    this.navigateToRedMart = function(){
        browser.driver.get('https://redmart.com/')
        browser.sleep(3000)
        browser.driver.manage().window().maximize();
    }

    this.clickSignUpLink = function(){
        waitForElement('id', 'NAVBAR_SIGNUP_BTN').click()
    }

    this.signUpEmail = function(param){
        waitForElement('name','email').sendKeys(param)
    }

    this.signUpEmailElement = function(){
        return waitForElement('name','email');
    }


    this.signUpPassword = function(param){
        waitForElement('name', 'password').sendKeys(param)
    }

    this.signUpConfirmPassword = function(param){
        waitForElement('name','confirmPassword').sendKeys(param)
    }

    this.signUpButton = function(){
        waitForElement('xpath','//div[@class=\'Auth__signup_button___1PuOd\']').click()
        browser.sleep(5000)
    }

    this.logOut = function(){
        var el = waitForElement('id', 'accountPreview')
        browser.driver.actions().mouseMove(el).perform();
        waitForElement("id", "NAVBAR_SIGNOUT_BTN").click();
        browser.sleep(7000)
//        waitForElement('xpath', '//div[@class=\'notificationInner withIcon\']//a').click();
        browser.driver.get('https://redmart.com/')
   }

   this.getPageTitle = function(){
     var temp;
      browser.driver.getTitle().then(function(text){
        console.log('Page Title : '+text)
        temp = text;
        })
       return temp;
   }

   this.getCurrentUrl = function(){
    browser.driver.getCurrentUrl().then(function(actualUrl) {
        console.log('Current URL : '+actualUrl)
        return actualUrl;
      });
   }

    this.accountNameGetter = function(){
        waitForElement('id', 'accountPreview').getText().then(function(text){
            console.log('Account Name : '+text)
        return text
        })
    }

    this.accountName = function(){
        return waitForElement('id', 'accountPreview')
    }

    this.duplicateError = function(){
        return waitForElement('xpath', '//p[@class=\'Input__input_error_message___18S36\']')
    }

    this.searchBox = function(param){
        waitForElement('xpath', '//input[@class=\'SearchInputBox__input___2ZwUc\']').sendKeys(param)
        waitForElement('xpath', '//button[@class=\'SearchInputBox__button___1sNM_\']').click()
        browser.sleep(5000)
    }

    this.homeOutdoor = function(){
        waitForElement('xpath', '//a[@href=\'/search/marketplace/home-outdoor\']').click()
        browser.sleep(2000)
    }

    this.bedBath = function(){
        waitForElement('xpath', '//a[@href="/search/marketplace/home-outdoor/bath-bed"]').click()
        browser.sleep(2000)
    }

    this.clickShowCart = function(){
        waitForElement('id', 'cartPreviewInner').click()
        browser.sleep(2000)
    }

    this.clickFreshProduce = function(){

        //browser.setLocation('fresh-produce')
        browser.driver.get('https://redmart.com/fresh-produce')
        //waitForElement('xpath', '//a[@href=\'/fresh-produce\']').click()
        browser.sleep(3000)
    }

    this.clickReadyToUse = function(){
        waitForElement('xpath', '//article[@id=\'contentSection\']//li//a[@href=\'/fresh-produce/readytoeat\']').click()
        browser.sleep(3000)
    }

    this.clickCheckoutButton = function(){
        waitForElement('xpath', '//div[@id=\'ordersummary\']//div[@class=\'orderSummaryCheckoutBtn\']').click()
        browser.sleep(3000)
    }

    this.addNewAddress = function(){
        waitForElement('xpath', '//a[@class=\'addBtn editMode\']').click()
        browser.sleep(3000)
    }

    this.enterPostalCode = function(param){
        waitForElement('id', 'ADDRESS_WIZARD_SUGGESTIONS_INPUT').sendKeys(param)
        browser.sleep(3000)
    }

    this.selectAddress = function(first_name, last_name, postcode, floor, unit){

        this.enterPostalCode(postcode);

        waitForElement('xpath', '//form//li[contains(., \"Can\'t find your address?\")]').click()
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'first_name\']').sendKeys(first_name);
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'last_name\']').sendKeys(last_name);
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'street\']').sendKeys("Fishery Port Rd");
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'postcode\']').sendKeys(postcode);
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'building_no\']').sendKeys("6");
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'floor\']').sendKeys(floor);
        waitForElement('xpath', '//div[@class=\'addressManually\']//form[@class=\'editDeliveryAddress\']//input[@name=\'unit_number\']').sendKeys(unit);
        waitForElement('xpath', '//div[@class=\'addressManually\']//a').click();
        browser.sleep(3000)
    }

    this.selectRandomItems = function(param){
      var count = 0;
      browser.driver.findElements(By.xpath("//li[@class='productPreview  ']//a//span[contains(., \"Add to cart\")]")).then(function(elems){
        elems.forEach(function (elem) {
          count++;
          if(count>param){return;}else{
            browser.driver.actions().mouseMove(elem).perform();
            browser.sleep(2000)
            elem.click();}
        });
      });
    }



    this.selectItem = function(param){

        var el = waitForElement('xpath', "//div[@class=\'productShelf\']//ul//li[@data-id=\'"+param+"\']//div[@class=\'controls\']//a");
        browser.driver.actions().mouseMove(el).perform();
        browser.sleep(500)
        el.click();
        browser.sleep(5000)
    }

    function waitForElement(findType, findValue){
        browser.sleep(2000);
        console.log('Finding Element with '+findType+' : '+findValue)
        var el;
        if(findType === 'xpath'){
            el = browser.driver.findElement(by.xpath(findValue))
        }else if(findType === 'name'){
            el = browser.driver.findElement(by.name(findValue))
        }else if(findType === 'id'){
            el = browser.driver.findElement(by.id(findValue))
        }

        browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el, "color: green; border: 2px solid green;").
        then(function(resp){
          browser.sleep(500);
        },function(err){
          console.log("error is :"+err);
        });
        return el;
      };

}

module.exports = new HomePage();
