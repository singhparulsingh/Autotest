var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
    
        var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build(); 


         driver.get('http://www.eiu.com/');
         driver.wait(until.elementIsVisible(driver.findElement(By.id(`product`)),100));


         var promise = driver.getTitle().then(function(title) {
                    console.log("The title is: " + title)
                    console.log("success")
            });
            return promise;
  setTimeout(() => {
                driver.quit();
            }, 100);
    

   
   

