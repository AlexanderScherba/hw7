const check_palindrom = function (word)
{
    str = word.toLowerCase() 
    len = word.length
    ln2 = Math.trunc(len/2)
    for (i=0; i< ln2; i++) if ((str[i]) != (str[len-i-1])) return ("Это не палиндром!")
        
            
    return ("Это палиндром!")

}

console.log(check_palindrom("Abba"))
console.log(check_palindrom("abba"))
console.log(check_palindrom("аbba")) // первая буква "а" написана в русской раскладке.
console.log(check_palindrom("abcba"))
console.log(check_palindrom("abcdba"))