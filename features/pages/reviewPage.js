// Page class for search page
var randomWords = require('random-words');
var HomePage = function() {

    this.navigateToSite = function(){
        browser.driver.get('https://wallethub.com/profile/test_insurance_company/')
        browser.sleep(3000)
        browser.driver.manage().window().maximize();
    }

    this.hoverOverReview = function(){
        browser.sleep(3000)
        try {
            waitForElement('xpath', '//i[@class=\'af-icon-cross\']').click();
            browser.sleep(3000)
        } catch (error) {
            
        }
        
        browser.actions().mouseMove(waitForElement('xpath', '//span[contains(text(), \'Rating\')]')).perform();
        browser.sleep(5000)
    }

    this.clickRating = function(param){
        var el = waitForElement('xpath', '//div[@class=\'wh-rating-choices-holder\']/a['+param+']')
            el.click();
            browser.sleep(5000)
        }

    this.selectPolicy = function(param){
        browser.sleep(5000)
        waitForElement('xpath', '//div[@class=\'dropdown-list-new\']//span[@class=\'drop-arrow\']').click();
        browser.sleep(5000)
        waitForElement('xpath', '//ul[@class=\'drop-el\']//li//a[@data-target=\''+param+'\']').click();
        browser.sleep(5000)
    }


    this.enterReview = function(param){
        browser.sleep(5000)
        var txt = ""
        var value = randomWords({ exactly: param, join: ' ' }).toString()
       // console.log(value)
        /*value.forEach(function(element) {
            txt = txt+" "+element
          });
*/
        waitForElement('xpath', '//textarea[@name=\'review\']').sendKeys(value);
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
