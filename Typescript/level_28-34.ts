/*
№1
Сделайте перечисление, содержащее дни недели.
 */

enum DayOfWeek {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
console.log(DayOfWeek);

/*
№1
Сделайте перечисление Months и задайте в нем номера всем месяцам в году. Выведите в консоль первый и пятый месяцы.
 */

enum Months {January = 1, February = 2, March = 3, April = 4, May = 5, June = 6, July = 7, August = 8, September = 9, October = 10, November = 11, December = 12};
console.log(Months[1]);
console.log(Months[5]);

/*
№1 Сделайте перечисление с названиями дней недели.
 */

enum DaysOfWeek2 {Monday = 'Monday', Thuesday = 'Thuesday', Thursday = 'Thursday', Friday = 'Friday' }
console.log(DaysOfWeek2);


enum AllMonths {January = 'January', February = 'February', March = 'March', April = 'April', May = 'May', June = 'June', July = 'July', September = 'September', October = 'October', November = 'November', December = 'December' }
console.log(AllMonths);