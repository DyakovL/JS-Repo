function solve(par1, par2, par3)
{
    let arr = [par1, par2, par3];

    let str = '';
    for (let index = 0; index < arr.length; index++) 
    {
        str += arr[index.toString()];
    }

    console.log(str);
}
solve('1',
'5',
'p');