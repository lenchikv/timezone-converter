import moment from 'moment';
import 'moment-timezone';

export const getMomentDate = date => moment(new Date(date));

export const getTimezonedDate = (date, timezone) => date.tz(timezone).format('h:mm a');

export const getTimezoneList = () => moment.tz.names().filter(zone => zone.startsWith('Etc/GMT'));

export const setDateToFormatted = (date, setHours) => {
  const updateDate = date ? new Date(date) : new Date();
  if (setHours) {
    updateDate.setHours(setHours[0]);
    updateDate.setMinutes(setHours[1]);
  }
  return moment(updateDate).format();
};

export const setDefaultTime = () => {
  const m = moment(new Date());
  const hours = m.hour();
  const minutes = m.minute();
  const outputHours = hours.toString().length < 2 ? `0${hours.toString()}` : hours;
  const outputMinutes = minutes.toString().length < 2 ? `0${minutes}` : minutes;
  return `${outputHours}:${outputMinutes}`;
};

export const getDefaultTimezone = () => moment.tz.guess();

export default {
  setDateToFormatted,
  setDefaultTime,
  getDefaultTimezone,
  getMomentDate,
  getTimezonedDate,
  getTimezoneList,
};
