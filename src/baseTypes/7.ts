/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

function isWeekend(day: daysOfWeek): boolean {
  return day === daysOfWeek.SUN || day === daysOfWeek.SAT;
}
