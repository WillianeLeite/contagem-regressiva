function countdown(days) {
  const daysForShow = new Date();
  daysForShow.setDate(daysForShow.getDate() + days);

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = daysForShow - currentDate;

    const totalSeconds = Math.floor(timeDifference / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);

    document.getElementById(
      "countdown"
    ).innerHTML = `${totalDays} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }

  setInterval(updateCountdown, 1000);
}

countdown(34);
