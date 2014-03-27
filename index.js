module.exports = function(interval, unit) {
  var units = { };
  units.second = 1000;
  units.minute = units.second * 60;
  units.hour   = units.minute * 60;
  units.day = units.hour * 24;
  units.week = units.day * 7;
  units.month = units.week * 4;

  if(!unit) {
    unit = 'second';
    for(var key in units) {
      if(units[key] <= interval && units[key] > units[unit]) {
        unit = key;
      }
    }
  }

  var num = Math.floor(interval / units[unit]),
      roundUp = (interval % units[unit]) / ( units[unit] / 2) > 1;
  if(roundUp) num++;

  return '' + num + ' ' + unit + ( num > 1 ? 's' : '');
};
