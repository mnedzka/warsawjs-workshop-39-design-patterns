'use strict';

const ValueObject = require('./ValueObject');

class DateRange extends ValueObject {
  constructor({ start, end }) {
    start = new Date(start)
    end = new Date(end)
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new TypeError('start or end is invalid')
    }
    super({ start, end })
  }
}

module.exports = DateRange;