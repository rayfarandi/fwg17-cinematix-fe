const getDay = (str) => {
  const baseDate = new Date(2000, 0, 1)
  baseDate.setFullYear(str.slice(0, 4), Number(str.slice(5, 7)) - 1, str.slice(8, 10))
  return baseDate.toLocaleDateString('en-US', { weekday: 'long' })
}

const getMonth = (str) => {
  const baseDate = new Date(2000, 0, 1)
  baseDate.setFullYear(str.slice(0, 4), Number(str.slice(5, 7)) - 1, str.slice(8, 10))
  return baseDate.toLocaleDateString('en-US', { month: 'long' })
}

const getWholeDate = (str1, str2) => {
  return getDay(str1) + ', ' + str1.slice(8, 10) + ' ' + getMonth(str1) + ' - ' + str2.slice(11, 16)
}

const getWholeYear = (str1) => {
  return getDay(str1) + ', ' + str1.slice(8, 10) + ' ' + getMonth(str1) + ' ' + str1.slice(0, 4)
}

export default getWholeDate
export {getMonth, getWholeYear}
