function solve(speed, location)
{

    let speedlimit = 0;

    switch (location)
    {
        case 'motorway':
            speedlimit = 130;
        break;
        case 'interstate':
            speedlimit = 90;
        break;
        case 'city':
            speedlimit = 50;
        break;
        case 'residential':
            speedlimit = 20;
        break;
    }

    if (speed <= speedlimit) 
    {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`);    
    }
    else
    {
        let difference = speed - speedlimit;
        let status;
        if (difference > 0 && difference <= 20)
        {
            status = 'speeding';
        }
        else if (difference > 20 && difference <= 40)
        {
            status = 'excessive speeding';
        }
        else if (difference > 40)
        {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedlimit} - ${status}`);
    }
}
solve(120, 'interstate');