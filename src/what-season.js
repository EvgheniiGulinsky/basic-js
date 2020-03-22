module.exports = function getSeason(date) {
  if (!date) 
      return "Unable to determine the time of year!"
    if (!(date.getTime())) {
      throw "Error"
    }
    let month = date.getMonth()
    if (month <= 1 || month==11)
    return "winter"
    if (month>=2 && month<=4)
    return "spring"
    if (month>=5 && month<=7)
    return "summer"
    else 
    return "autumn"
}

