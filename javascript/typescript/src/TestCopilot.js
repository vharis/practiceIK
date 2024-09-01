"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSecondsInYear = void 0;
// calculate number of seconds in a year  using arrow function
var calculateSecondsInYear = function () {
    var secondsInMinute = 60;
    var minutesInHour = 60;
    var hoursInDay = 24;
    var daysInYear = 365;
    return secondsInMinute * minutesInHour * hoursInDay * daysInYear;
};
exports.calculateSecondsInYear = calculateSecondsInYear;
console.log((0, exports.calculateSecondsInYear)());
