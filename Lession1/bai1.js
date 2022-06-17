const reverseString= a => {
    let splitString = a.split("")
    let reverseArray = splitString.reverse()
    let re = reverseArray.join("")
    console.log(re)
}
reverseString(`abcdef`)