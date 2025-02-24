function welcome(n)
{
    document.write(n + " ")

    if(n > 0)
    {
        welcome(n-1);
    }
}

welcome(10);