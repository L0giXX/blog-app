export function formatDate(date: Meta[]) {
  for (let i = 0; i < date.length; i++) {
    const newDate = new Date(date[i].date);
    date[i].date = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date;
}

export function formatDate2(date: BlogPost) {
  const newDate = new Date(date.meta.date);
  date.meta.date = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
}
