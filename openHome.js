//var assert = require('assert'),
//test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');


const fs = require('fs');
describe('test EIU home', function () {
    const {
        Builder,
        By,
        Keys,
        until,
        chromeOptions
    } = require('selenium-webdriver');
    var driver;

    beforeEach(() => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

    });

    afterEach(() => {
        //       setTimeout(function () { driver.quit() }, 100);
    });




    it('should open EIU home page and navigate', function () {
        try {
            this.timeout(2500);
            driver.get('http://www.eiu.com/home.aspx');
            driver.manage().window().maximize();
            driver.wait(until.elementIsVisible(driver.findElement(By.className(`eiu-logo scroll-link`)), 1000));
            driver.findElement(By.className('top global')).click();
            driver.findElement(By.xpath('//*[@id="global-sub"]/div/div[5]/a[1]')).click(); // Speaker bureau link
            driver.findElement(By.xpath('//*[@id="global-sub"]/div/div[5]/a[2]')).click(); // Global advisory Service link
            driver.findElement(By.xpath('//*[@id="global-sub"]/div/div[5]/a[3]')).click(); // Our analyst link
            var windowtabs = driver.getAllWindowHandles();
            driver.switchTo().window(windowtabs);//.then(function(){
        //    driver.getTitle();
    //             driver.getTitle().then(function(title) {
   //                 console.log("The title is: " + title)
    //                console.log("success")

   //         });
   //         this.timeout(2500);
   //         driver.findElement(By.xpath('//*[@id="global-sub"]/div/div[5]/a[3]')).click();
            
  //      });
    }finally {
   //         setTimeout(function () { driver.quit() }, 100);
        };
        //      
        //      
        //      elementspeaker.click();
        /*    let image = driver.takeScreenshot().then(
            fs.writeFileSync('out.png', image, 'base64', function (err) {
                console.log(err);
            })  
            );*/
    });




});