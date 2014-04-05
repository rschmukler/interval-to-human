# Interval to Human

Convert JS Intervals to human readable text

## Install

```
npm install interval-to-human
```

## Examples

```js
var human = require('interval-to-human');

human(1000); // '1 second'
human(10000); // '10 seconds'
human(65000); // '1 minute'
human(91000); // '2 minutes'
human(1000 * 60 * 60); // '1 hour'
human(1000 * 60 * 60 * 24); // '1 day'
human(1000 * 60 * 60 * 24 * 7); // '1 week'
human(1000 * 60 * 60 * 24 * 7, 'days') // '7 days'
```
