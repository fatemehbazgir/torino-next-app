import { format } from 'date-fns-jalali';

const formatToShamsi = (dateInput) => {
  if (!dateInput) {
    return "-";
  }

  try {
    const dateObject = new Date(dateInput);

    if (isNaN(dateObject.getTime())) {
      return "-";
    }

    return format(dateObject, 'yyyy/MM/dd');

  } catch (error) {
    console.error( error);
    return "-";
  }
};

export {formatToShamsi}