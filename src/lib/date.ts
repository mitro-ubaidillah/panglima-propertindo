export const formatDate = (date: string) => {
  const [datePart, timePart] = date.split(' ');
  const dates = datePart.split('-');
  const times = timePart ? timePart.split(':') : null;

  const month = generateMonthToId(Number(dates[1]) - 1, 'long');

  // Format waktu jika ada
  const timeString = times ? ` ${times[0]}:${times[1]}` : '';

  return `${dates[2]} ${month} ${dates[0]}, ${timeString}`;
}

export const generateMonthToId = (
  monthIndex: number,
  type: 'short' | 'long',
): string => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];
  let month = '';

  for (let i = 0; i <= months.length; i++) {
    if (monthIndex === i) {
      if (type === 'short') {
        month = shortMonths[i];
      } else {
        month = months[i];
      }
    }
  }

  return month;
};