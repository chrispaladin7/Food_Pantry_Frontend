function toMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  // function to fix data
  const makeDateNice = (dateString: string) => {
    let date = new Date(dateString)
    var localTime = date.toLocaleTimeString('us-US', {
      timeZone: 'Europe/Moscow',
      hourCycle: 'h23',
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
  });

    return localTime
  }

  export default makeDateNice