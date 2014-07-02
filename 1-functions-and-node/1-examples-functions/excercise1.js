
(function print(i)
{
    if ( typeof i != "number"  )
    {
        throw new Error("idiot");
    }

    console.log(i);

    if ( i < 50 )
    {
        print(i+1);
    }
})(0);