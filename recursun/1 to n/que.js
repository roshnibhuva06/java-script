function welcome(n)
{
    document.write(n + " ")

    if(n < 10)
    {
        welcome(n+1);
    }
}

welcome(1);