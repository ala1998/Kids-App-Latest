import moment from 'moment-timezone';
// const moment = require('moment-timezone');

export const convertMillisToDuration = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const convertDurationToMillis = (duration) => {
  return (parseInt(duration.split(":")[0]) * 60000) + (parseInt(duration.split(":")[1]) * 1000)
}

export const displaySelectTime = (selectedTime) => {
  let start, end, time;
  if (selectedTime) {
    start =
      selectedTime.split('-')[0].split(':')[0] > 12
        ? selectedTime.split('-')[0].split(':')[0] -
        12 +
        ':' +
        selectedTime.split('-')[0].split(':')[1]
        : selectedTime.split('-')[0];

    end =
      selectedTime.split('-')[1].split(':')[0] > 12
        ? selectedTime.split('-')[1].split(':')[0] -
        12 +
        ':' +
        selectedTime.split('-')[1].split(':')[1]
        : selectedTime.split('-')[1];
    time = selectedTime.split("-")[0].split(":")[0] >= 12 ? "مساءً" : "صباحاً"

  }
  return start + '-' + end + ' ' + time
};

export const days = [
  { key: '0', value: 'الأحد' },
  { key: '1', value: 'الإثنين' },
  { key: '2', value: 'الثلاثاء' },
  { key: '3', value: 'الأربعاء' },
  { key: '4', value: 'الخميس' },
  { key: '5', value: 'الجمعة' },
  { key: '6', value: 'السبت' },
];

const months_in_arabic = 'أشهر';
const two_months_in_arabic = 'شهرين';
const month_in_arabic = 'شهر';
const next_month_in_arabic = 'بداية الشهر القادم';

const weeks_in_arabic = 'أسابيع';
const week_in_arabic = 'أسبوع';
const two_weeks_in_arabic = 'أسبوعين';
const next_week_in_arabic = 'بداية الأسبوع القادم';

const days_in_arabic = 'أيام';
const day_in_arabic = 'يوم';
const two_days_in_arabic = 'يومين';
const next_day_in_arabic = 'غداً';
const less_than_one_day_in_arabic = 'في غضون يوم';

const hours_in_arabic = 'ساعات';
const hour_in_arabic = 'ساعة';
const two_hours_in_arabic = 'ساعتين';
const less_than_one_hour_in_arabic = 'أقل من ساعة';
// const less_than_one_hour_in_arabic = 'في غضون ساعة';

const calculateTimimg = h => {
  let months = 0,
    weeks = 0,
    days = 0,
    hours = 0;

  while (h) {
    if (h >= 744) {
      months++;
      h -= 744;
    } else if (h >= 168) {
      weeks++;
      h -= 168;
    } else if (h >= 24) {
      days++;
      h -= 24;
    } else {
      hours++;
      h--;
    }
  }
  return { months, weeks, days, hours };
};

const prepareRemainingPeriod = (months, weeks, days) => {
  let remaining_period = '';

  let remaining_months =
    months > 2
      ? months + ' ' + months_in_arabic
      : months == 2
        ? two_months_in_arabic
        : months == 1
          ? weeks == 0 && days == 0
            ? next_month_in_arabic
            : month_in_arabic
          : null;

  let remaining_weeks =
    weeks > 2
      ? weeks + ' ' + weeks_in_arabic
      : weeks == 2
        ? two_weeks_in_arabic
        : weeks == 1
          ? months == 0 && days == 0
            ? next_week_in_arabic
            : week_in_arabic
          : null;

  let remaining_days =
    days > 2
      ? days + ' ' + days_in_arabic
      : days == 2
        ? two_days_in_arabic
        : days == 1
          ? months == 0 && weeks == 0
            ? next_day_in_arabic
            : day_in_arabic
          : null;

  let remaining_period_times = [
    remaining_months,
    remaining_weeks,
    remaining_days,
  ];

  remaining_period_times.map(remaining_time_unit => {
    if (remaining_time_unit) {
      remaining_period += remaining_time_unit + '، و ';
    }
  });

  remaining_period = remaining_period
    ? remaining_period.endsWith('، و ')
      ? remaining_period.slice(0, -4)
      : remaining_period
    : less_than_one_day_in_arabic;

  return remaining_period;
};

const prepareElapsedPeriod = (months, weeks, days, hours) => {
  let elapsed_period = '';

  let elapsed_months =
    months > 2
      ? months + ' ' + months_in_arabic
      : months == 2
        ? two_months_in_arabic
        : months == 1 ?
          month_in_arabic
          : null;

  let elapsed_weeks =
    weeks > 2
      ? weeks + ' ' + weeks_in_arabic
      : weeks == 2
        ? two_weeks_in_arabic
        : weeks == 1 ?
          week_in_arabic
          : null;

  let elapsed_days =
    days > 2
      ? days + ' ' + days_in_arabic
      : days == 2
        ? two_days_in_arabic
        : days == 1 ?
          day_in_arabic
          : null;

  let elapsed_hours =
    hours > 10
      ? hours + ' ' + hour_in_arabic
      : hours > 2 && hours <= 10
        ? hours + ' ' + hours_in_arabic
        : hours == 2
          ? two_hours_in_arabic
          : hours == 1 ?
            hour_in_arabic
            : null;

  let elapsed_period_times = [
    elapsed_months,
    elapsed_weeks,
    elapsed_days,
    elapsed_hours,
  ];

  elapsed_period_times.map(elapsed_time_unit => {
    if (elapsed_time_unit) {
      elapsed_period += elapsed_time_unit + '، و ';
    }
  });

  elapsed_period = elapsed_period
    ? elapsed_period.endsWith('، و ')
      ? elapsed_period.slice(0, -4)
      : elapsed_period
    : less_than_one_hour_in_arabic;

  return elapsed_period;
};

export const calculateTime = (date, selectedTime) => {
  let session_period;

  if (date && selectedTime) {
    //here
    let sessionDate = `${date} ${selectedTime.split('-')[0]}:00`;
    let session_date = moment(sessionDate, ["MM-DD-YYYY HH:mm", "YYYY-MM-DD HH:mm"]);
    let now = moment().local(true).format();

    console.log(now)
    let diff_hours = session_date.diff(now, 'hours');

    if (diff_hours > 0) {
      let { months, weeks, days } = calculateTimimg(diff_hours);
      session_period = prepareRemainingPeriod(months, weeks, days);
    } else {
      let { months, weeks, days, hours } = calculateTimimg((diff_hours * -1));
      session_period = prepareElapsedPeriod(months, weeks, days, hours);
    }

    console.log("diff_hours", diff_hours);
  }


  return session_period;
};
// let now = moment().tz('Asia/Hebron').format()