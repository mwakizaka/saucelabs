# saucelabs
## Abstract
- Used for saucelabs testing

## Prerequisite
- Please prepare npm and node.
- In my local environment, I used npm version 6.12.1 and node v12.13.1
- Then you run 
```
cd <path/to>saucelabs
npm install
```

## How to run saucelabs.js
Please don't forget to fill `testobjectApiKey` out
```
node saucelabs.js
```

## Example result
```
$ node saucelabs.js
> 2070-10-07T19:50:18+441657:55
```
I expect it should be around 2020-05-20T02:55:03-07:00

1. The date should be arround May 20th, 2020
2. The date format should be ISO-8601(like `YYYY-MM-DDTHH:mm:ssZ`)
