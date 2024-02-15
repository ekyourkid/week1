function nilaiUn ( mtk, bindo, binggris, ipa )
{
    let calc = ( mtk + bindo ) + ( binggris + ipa )
    let result = calc / 4
    var grade = ''

    if ( result >= 90 && result <= 100 )
    {
        grade = "A"
    } else if ( result >= 80 && result <= 89 )
    {
        grade = 'B'
    } else if ( result >= 70 && result <= 79 )
    {
        grade = 'C'
    } else if ( result >= 60 && result <= 69 )
    {
        grade = 'D'
    }else if ( result >= 0 && result <= 59 )
    {
        grade = 'E'
    }
    return `Rata-rata = ${result}
     Grade =  ${grade}`
}

console.log(nilaiUn(80,90,50,50))