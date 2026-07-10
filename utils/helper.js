const flattenObject = (obj, delimiter = ".", prefix = "") => {
  return Object.keys(obj).reduce((acc, k) => {
    const newKey = prefix ? `${prefix}${delimiter}${k}` : k;

    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      !Array.isArray(obj[k]) && 
      Object.keys(obj[k]).length > 0
    ) {
      Object.assign(acc, flattenObject(obj[k], delimiter, newKey));
    } else {
      acc[newKey] = obj[k];
    }
    return acc;
  }, {});
};

const DateToIso = (date) => {
  if (!date) return null; 
  const d = new Date(date);
  return isNaN(d.getTime()) ? null : d.toISOString();
};

export { flattenObject, DateToIso };
