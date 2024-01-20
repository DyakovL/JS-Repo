function solve(people, type, day)
{
    let price = 0;
    switch (type) 
    {
        case 'Students':
            switch (day) 
            {
                case 'Friday':
                    price += people * 8.45;
                break;
                case 'Saturday':
                    price += people * 9.80;
                break;
                case 'Sunday':
                    price += people * 10.46;
                break;
            }
        break;
        case 'Business':
            switch (day) 
            {
                case 'Friday':
                    if (people >= 100)
                    {
                        price += (people - 10) * 10.90;
                    }
                    else
                    {
                        price += people * 10.90;
                    }
                break;
                case 'Saturday':
                    if (people >= 100)
                    {
                        price += (people - 10) * 15.60;
                    }
                    else
                    {
                        price += people * 15.60;
                    }
                break;
                case 'Sunday':
                    if (people >= 100)
                    {
                        price += (people - 10) * 16;
                    }
                    else
                    {
                        price += people * 16;
                    }
                break;
            }
        break;
        case 'Regular':
            switch (day) 
            {
                case 'Friday':
                    price += people * 15;
                break;
                case 'Saturday':
                    price += people * 20;
                break;
                case 'Sunday':
                    price += people * 22.50;
                break;
            }
        break;
    }

    if (type == 'Students' && people >= 30)
    {
        price *= 0.85;
    }

    if (type == 'Regular' && people >= 10 && people <= 20)
    {
        price *= 0.95;
    }
    
    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday");