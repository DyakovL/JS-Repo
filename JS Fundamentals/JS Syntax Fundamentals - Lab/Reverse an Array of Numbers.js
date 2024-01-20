function solve(n, array)
{
    array.splice(n, array.length - n);
    array.reverse();
    console.log(array.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);