function printSegitiga ( nilai )
{
    for ( let index = nilai; index >= 1; index-- )
    {
        var temp = ''
        for ( let j = 1; j <= index; j++ )
        {
            temp += j
        }
        console.log(+temp)
    }
  
}

console.log( printSegitiga( 5 ) )