function getTourStatus(startDate, endDate) {
    const now = new Date();
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T23:59:59");

    if (now < start) {
        return "هنوز شروع نشده";
    }

    if (now >= start && now <= end) {
        return "در حال برگزاری";
    }

    return "به اتمام رسیده";
}

export { getTourStatus }






