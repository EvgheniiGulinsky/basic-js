module.exports = function transform(arr) {
    let result = []

    if (!Array.isArray(arr)) 
    throw new Error()

    if (arr[0]=="--discard-prev" || arr[0]=="--double-prev")
    arr.shift()
    if (arr[arr.length-1]=="--discard-next" || arr[arr.length-1]=="--double-next")
    arr.pop()
  
    if (!arr.length) 
    return result
  
    for (let i = 0; i < arr.length; i++) {        
      if (arr[i]=="--double-prev" && arr[i-1]!== undefined)
        result.push(arr[i-1])
      else if (arr[i]=="--double-next" &&  arr[i+1]!== undefined)
        result.push(arr[i+1])
      else if (arr[i]=="--discard-prev" && arr[i-1]!== undefined)
        result.pop()
      else if (arr[i]=="--discard-next") 
      i++
      else
     result.push(arr[i])
    }
  
    return result
  }