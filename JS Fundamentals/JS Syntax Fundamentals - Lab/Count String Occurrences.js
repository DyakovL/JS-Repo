function solve(string, searchedWord)
{
    let words = string.split(' ');
    let counter = 0;
    
    for (let index = 0; index < words.length; index++)
    {
        if (words[index] == searchedWord)
        {
            counter ++;    
        }
    }

    console.log(counter);
}
solve('This is a word and it also is a sentence', 'is');