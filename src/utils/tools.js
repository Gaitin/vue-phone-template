export function getLocalTime(nS) {
  let time = nS.toString().substr(0, nS.toString().length - 3)
  // console.log(time)
  return new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function changeDataToForm(data) {
  var result = ''
  for (var key in data) {
    result = result + '&' + key + '=' + data[key]
  }
  if (result.length > 1) {
    result = result.substring(1)
  }
  return result

}

export function JsonToForm(params) {
  let str = ''
  for (let key in params) {
    str += key + '=' + params[key] + '&'
  }
  str = str.substr(0, str.length - 1)
  return str
}
