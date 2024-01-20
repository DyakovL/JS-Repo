function solve(num1, num2)
{
    let sum = 0;
    let arr = '';
    for (let index = num1; index <= num2; index++) 
    {
        sum += index;
        arr += `${index} `;
    }

    console.log(arr.trimEnd());
    console.log(`Sum: ${sum}`)
}

solve(5,
    10);