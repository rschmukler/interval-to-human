# Interval to Human

Convert JS Intervals to human readable text

## Install

```
npm install interval-to-human
```

## Examples

```ts
import intervalToHuman from 'interval-to-human';

intervalToHuman(1000); // '1 second'
intervalToHuman(10000); // '10 seconds'
intervalToHuman(65000); // '1 minute'
intervalToHuman(91000); // '2 minutes'
intervalToHuman(1000 * 60 * 60); // '1 hour'
intervalToHuman(1000 * 60 * 60 * 24); // '1 day'
intervalToHuman(1000 * 60 * 60 * 24 * 7); // '1 week'
intervalToHuman(1000 * 60 * 60 * 24 * 7, 'days') // '7 days'
```
