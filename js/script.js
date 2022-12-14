
// import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'
// updateClock();
const date = new Date();

// this is for using function ===> convertEnglishDateToNepali()
const mo = date.getMonth() + 1;
const yr = date.getFullYear();
console.log()
let dy;


let nepalidate =[];

const renderCalendar = () => {
  date.setDate(1); // setDate(1) means gives the first day number of the month; value can be 0, 32 etc


  const monthDays = document.querySelector(".days");
  // const ndays = document.querySelector("#ndays")

  // getMonth, 0 ===> previous month last day
  // getMonth, 1 ===> current month first day



  //============ current month last day===========//
  const lastDay = new Date(
    date.getFullYear(), 
    date.getMonth() + 1, 
    0 
  ).getDate();


  //============ previous month last day===========//
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();


//==========gives the index of first day of month, like sundays=============//
  const firstDayIndex = date.getDay();
  

//========== gives the index of last day of month, like sundays============//
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
    


  //========== to generate next months days ============//
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  let days = "";
  
  //===loop to generate previous month end days upto first day of current month=====//
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

//===loop to generate days upto current month last day date=====//
  for (let i = 1; i <= lastDay; i++) {
    dy = i;

    nepalidate = convertEnglishDateToNepali(yr, mo, dy);
    // console.log(nepalidate[1]);
    
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      
      days += `<div class="today">${i}<div class ="ndays">${nepalidate[0]}</div></div>`;
      document.querySelector(".date p").innerHTML = nepalidate[1];   //changed from toDateString()

    } else {
      days += `<div class="edays" >${i}<div class ="ndays">${nepalidate[0]}</div></div>`;
    }
  }

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];




//===loop to generate next montn days from lastdayindex|| nextdays of current month=====//
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;


};


//========= generate previous month======//
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

//========= generate previous month======//
renderCalendar();
