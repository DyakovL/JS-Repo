function solve(arr)
{
    let even = 0;
    let odd = 0;

    for (let index = 0; index < arr.length; index++) 
    {
        if(arr[index] % 2 == 0)
        {
            even += arr[index];
        }
        else
        {
            odd += arr[index];
        }
    }

        console.log(even - odd);
}
solve([3,5,7,9]);