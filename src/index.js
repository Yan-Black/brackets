module.exports = function check(str, bracketsConfig) {

  let arr = bracketsConfig.map(el => el.join(''))

    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(arr[i]) != -1) {str = str.replace(arr[i],''); i = arr.indexOf(arr[i] - 1)}
    }
  
  return str.length == 0
}
