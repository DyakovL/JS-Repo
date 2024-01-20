function solve(num)
{
    let sum = 0;
    let numToString = num.toString();
    for (let index = 0; index < numToString.length; index++) 
    {
        sum += parseInt(numToString[index]);
    }

    console.log(sum);
}

solve(245678);