export function getTomorrowDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + 1).padStart(2, '0');
  const formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
}

export function formatDate(date) {
  const formatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const formatedDate = new Date(date).toLocaleDateString(
    'es-ES',
    formatOptions,
  );
  return formatedDate;
}

export function formatTimeString(dateString) {
  const originalDate = new Date(dateString);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const formattedDate = originalDate.toLocaleString('en-US', options);

  return formattedDate;
}