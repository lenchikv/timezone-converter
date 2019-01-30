# Timezone converter

Play with timezones
https://lenchikv.github.io/timezone-converter/

download and install the dependenices by running 
npm install
run the dev-server by running the command 
npm run dev-server
run the tests by running the command 
npm run test


React - Redux with Material-UI boilerplate (https://github.com/jishnukoottala/React-Redux-Material-UI-starter-template) as base.
Added eslint and jest support.

## Description

### Task: 

Create a world time zone converter

### Requirements:

Initial page should have two time zones, 1 for the users current time zone and one for GMT time
The user should be able to add new time zones to the list of time zones and show the current time in each zone
The user should be able to enter any time for each of the listed time zones and it will automatically update what that time is in the other time zones visible on the page.
Implement your solution in ReactJS, your welcome to use Redux as well. At Validately we use the ReactJS view framework and Redux to provide structure and session management. Avoid JQuery.

### Testing:

Please include test cases for the core of your solution. There are many unit testing tools out there for Javascript and ReactJS.

## Selected Approach

* React + redux with material was used
* Moment.js is using as main tool for converting
* Current time with current timezone is shown on the first screen.
* The filtered list of Timezones is obtained from moment.js - only timezones with GMT to reduce the size of the list and increase UX
* A new zone can be added, any zone can be deleted except of the first one (GMT)
* User can edit time and corresponding changes will be visible for choosen timezones.

![Desktop view](../master/src/assets/img/desktop.png)
![Mobile and tests output](../master/src/assets/img/mobile_and_testing.png)
