# Selenium

## Links

- [Official Documentaion](https://www.selenium.dev/documentation/webdriver/understanding_the_components/)
- [Selenium tutorial with Python](https://www.youtube.com/watch?v=b5jt2bhSeXs)
- [Selenium WebDriver API documentation](https://selenium-python.readthedocs.io/api.html)
- [Python's selenium.webdriver.support.expected_conditions class](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html?highlight=expected)

## Understanding the components in WebDriver

### Terms

- API: The set of “commands” you use to manipulate WebDriver
- Library: A code module which contains the APIs and the code necessary to implement them.
- Driver: Responsible for controlling the actual browser.
- Framework: An additional library used as a support for WebDriver suites.

### The Parts and Pieces

- WebDriver talks to a browser through a driver
- The driver is specific to the browser(e.g. ChromeDriver, GeckoDriver ...)
- Communication to the browser may also be remote communication through Selenium Server or RemoteWebDriver.

### Where Frameworks fit in
- WebDriver has one job and one job only: communicate with the browser via any of the methods above.

## Waits

- [Python's selenium.webdriver.support.expected_conditions class](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html?highlight=expected)

- Sometimes because the web platform has an intrinsically asynchronous nature, WebDriver does not track the active, real-time state of the DOM

- In a multi-threaded environment, you should be careful to operate on the driver reference passed in to the condition rather than the reference to the driver in the outer scope.
