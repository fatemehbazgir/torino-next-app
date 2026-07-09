const formatDateCustom = (date) => {
  const d = new Date(date);


  const weekday = d.toLocaleDateString("fa", { weekday: 'long' });


  const datePart = d.toLocaleDateString("fa", { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return `${weekday} ${datePart}`;
};

export{formatDateCustom}