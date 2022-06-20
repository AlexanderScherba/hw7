2я домашка по JS со звездочками:  
  
1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1  
```
for (let i = 1; i <=10; i++)
{
   console.log(2**i)
}
```
  
1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2  
```
const sqrt2 = function(arg){
    return(2**arg)
}
console.log(sqrt2(8))
```
  
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее  
Пример в консоли:  
:)  
:):)  
:):):)  
:):):):)  
:):):):):)  
```
for (i=1; i<=5; i++)
{   
   let out_str=""
   for (j=1; j<=i; j++)
   {
    out_str = out_str + ":)"
   }
   console.log(out_str)
}
```

2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода  
e.g. function printSmile(stroka, numberOfRows)  
```
const prntsml = function(stroka, rows)
{
for (i=1; i<=rows; i++)
{   
   let out_str=""
   for (j=1; j<=i; j++)
   {
    out_str = out_str + stroka
   }
   console.log(out_str)
}
}
prntsml("OO OO ",6)
```
  
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.  
e.g. function getWordStructure(word)  
В консоли:  
Слово (word) состоит из  (число) гласных и (число) согласных букв  
  
Проверки: 'case', 'Case', 'Check-list'  
```
const getwordstructure = function (word)
{
    sogl="BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxZz"
    glas="AaEeIiOoUuYy"
    cnt_glas=0
    cnt_sogl=0
    for (i=0; i< word.length; i++)
    {
        for (j=0; j< sogl.length; j++) if (word[i] == sogl[j]) cnt_sogl++
        for (j=0; j< glas.length; j++) if (word[i] == glas[j]) cnt_glas++
    }
    let res = [cnt_glas, cnt_sogl]
    return(res)
}

in_word="case"
out = getwordstructure(in_word)
console.log("Слово \"" + in_word + "\" состоит из " + out[0] + " гласных и " + out[1] + " согласных букв")
in_word="Case"
out = getwordstructure(in_word)
console.log("Слово \"" + in_word + "\" состоит из " + out[0] + " гласных и " + out[1] + " согласных букв")
in_word="Check-list"
out = getwordstructure(in_word)
console.log("Слово \"" + in_word + "\" состоит из " + out[0] + " гласных и " + out[1] + " согласных букв")
```
  
4**. Написать функцию, которая проверяет, является ли слово палиндромом  
e.g. function isPalindrom(word)  
  
Проверки: 'abba', 'Abba'  
```
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
```
