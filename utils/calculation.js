const calculateDaysBetween = (startDateStr, endDateStr) => {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    const diffInMs = end - start;

    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays + 1;

};
const calculateStayDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffInMs = end - start;

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));


    if (diffInDays < 0) return

    return {
        nights: diffInDays,
        days: diffInDays + 1
    };
};


export default calculateDaysBetween;
export { calculateStayDuration }