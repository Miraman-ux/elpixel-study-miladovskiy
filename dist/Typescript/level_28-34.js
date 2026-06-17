"use strict";
/*
№1
Сделайте перечисление, содержащее дни недели.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 0] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 1] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 2] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 3] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 4] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 5] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 6] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
console.log(DayOfWeek);
/*
№1
Сделайте перечисление Months и задайте в нем номера всем месяцам в году. Выведите в консоль первый и пятый месяцы.
 */
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
;
console.log(Months[1]);
console.log(Months[5]);
/*
№1 Сделайте перечисление с названиями дней недели.
 */
var DaysOfWeek2;
(function (DaysOfWeek2) {
    DaysOfWeek2["Monday"] = "Monday";
    DaysOfWeek2["Thuesday"] = "Thuesday";
    DaysOfWeek2["Thursday"] = "Thursday";
    DaysOfWeek2["Friday"] = "Friday";
})(DaysOfWeek2 || (DaysOfWeek2 = {}));
console.log(DaysOfWeek2);
var AllMonths;
(function (AllMonths) {
    AllMonths["January"] = "January";
    AllMonths["February"] = "February";
    AllMonths["March"] = "March";
    AllMonths["April"] = "April";
    AllMonths["May"] = "May";
    AllMonths["June"] = "June";
    AllMonths["July"] = "July";
    AllMonths["September"] = "September";
    AllMonths["October"] = "October";
    AllMonths["November"] = "November";
    AllMonths["December"] = "December";
})(AllMonths || (AllMonths = {}));
console.log(AllMonths);
//# sourceMappingURL=level_28-34.js.map