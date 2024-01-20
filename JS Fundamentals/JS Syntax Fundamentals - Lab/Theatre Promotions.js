function promotions(typeOfDay, age)
{
    let price;
    if(age < 0 || age > 122)
    {
        console.log("Error!");
        return;
    }

    switch(typeOfDay)
    {
        case "Weekday":
            if(age >= 0 && age<= 18)
            {
                price = 12;
                console.log(`${price}$`);
            }
            if(age > 18 && age <= 64)
            {
                price = 18;
                console.log(`${price}$`);
            }
            if(age > 64 && age <= 122)
            {
                price = 12;
                console.log(`${price}$`);
            }
        break;
        case "Weekend":
            if(age >= 0 && age<= 18)
            {
                price = 15;
                console.log(`${price}$`);
            }
            if(age > 18 && age <= 64)
            {
                price = 20;
                console.log(`${price}$`);
            }
            if(age > 64 && age <= 122)
            {
                price = 15;
                console.log(`${price}$`);
            }
        break;
        case "Holiday":
            if(age >= 0 && age<= 18)
            {
                price = 5;
                console.log(`${price}$`);
            }
            if(age > 18 && age <= 64)
            {
                price = 12;
                console.log(`${price}$`);
            }
            if(age > 64 && age <= 122)
            {
                price = 10;
                console.log(`${price}$`);
            }
        break;
    }
}
promotions('Weekday', 123);