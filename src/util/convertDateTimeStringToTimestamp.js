export default dateString => {
  const dateTimeParts = dateString.split(' ')
  const timeParts = dateTimeParts[1].split(':')
  const dateParts = dateTimeParts[0].split('-')

  const date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);
  return date.getTime()
}