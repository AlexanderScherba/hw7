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