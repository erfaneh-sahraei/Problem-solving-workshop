function isPowerOfTwo(n)
    {
        if (n == 0)
            return 0;
        while (n != 1)
        {
            if (n%2 != 0)
                return 0;
            n = n/2;
        }
        return 1;
    } 
     
    isPowerOfTwo(31)? document.write("Yes" + "</br>"): document.write("No" + "</br>");
    isPowerOfTwo(64)? document.write("Yes"): document.write("No");
 