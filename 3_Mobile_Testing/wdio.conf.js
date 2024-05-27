export const config = {
  //runner: "local",
  //port: 4723,

  //SauceLabs configuration
  user: "oauth-rubateixeira-43f63",
  key: "6e869825-20c3-46ce-ab1c-b0885ab7569f",
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,

  capabilities: [
    //{
    //Capabilities for local Appium mobile tests on an Android Emulator
    //platformName: "Android",
    //"appium:deviceName": "MobTestDVC",
    //"appium:platformVersion": "12.0",
    //"appium:automationName": "UiAutomator2",
    //"appium:app": `${process.cwd()}/app/ebacshop.apks`,
    //"appium:appWaitActivity": ".MainActivity",
    //"appium:disableIdLocatorAutocompletion": true,
    //},
    {
      //Capabilities for SauceLabs + Appium mobile to tests in a DeviceFarm
      platformName: "Android",
      "appium:app": "storage:filename=ebacshop.aab", // The filename of the mobile app
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "sauce:options": {
        appiumVersion: "2.0.0",
        build: "appium-build-J0GIU",
        name: "Mobile Test Portfolio",
        deviceOrientation: "PORTRAIT",
      },
      "appium:disableIdLocatorAutocompletion": true,
    },
  ],
  logLevel: "info",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
