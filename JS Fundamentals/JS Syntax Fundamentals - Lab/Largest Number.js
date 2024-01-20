function biggestNumber(num1, num2, num3)
{
    let result;
    maxNum = num1;
    if(maxNum < num2)
    {
        maxNum = num2;
    }

    if (maxNum < num3)
    {
        maxNum = num3;
    }
    console.log(`The largest number is ${maxNum}.`);
}
biggestNumber(2.66,3.77,3.88);