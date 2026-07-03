const calculateDaysBetween = (startDateStr, endDateStr) => {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    const diffInMs = end - start;

    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays + 1;


};


export default calculateDaysBetween;