const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
const dayArr = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22rd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st"
];
const talkingCalendar = function(date) {
  let dateToArr = date.split("/");
  let convertDate = "";
  let month = "";
  let day = "";

  month = monthArr[dateToArr[1] - 1];
  day = dayArr[dateToArr[2] - 1];
  convertDate = month + " " + day + ", " + dateToArr[0];
  return convertDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2011/11/11"));
console.log(talkingCalendar("1987/08/24"));
