require('colors');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const wd = require('wd');

// TODO: fill out the followings
const testobjectApiKey = "<Your testobject api key>";

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
const driver = wd.promiseChainRemote('http://us1-manual.app.testobject.com/wd/hub');

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

const makeRequest = async () => {
  try {
    await driver.init({
      testobject_api_key: testobjectApiKey,
      platformName: 'iOS',
      platformVersion: '12.4',
      deviceName: 'iPad_Pro_11_2018_real',
      appiumVersion: '1.17.0',
      testobject_session_creation_timeout: '900000',
      testobject_suite_name: 'Default Appium Suite',
      testobject_test_name: 'Default Appium Test'
    });
    
    await sleep(5000);
    const time = await driver.getDeviceTime();
    console.log(time);
  
  } catch( err ) {
    console.log(err);
  } finally {
    await driver.quit();
  }
  return "done";
}
makeRequest();

