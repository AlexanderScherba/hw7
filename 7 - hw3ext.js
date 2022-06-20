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