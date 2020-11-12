//first part-compare two numbers and check if they are amicable numbers
//nubers input
let a = parseInt(prompt("Vstavi število 1:"));
let b = parseInt(prompt("Vstavi število 2:"));

//check if the input is a number
if (isNaN(a) == true || isNaN(b) == true)
{
    //alert that the input is wrong
    alert("Napečen vnos števil!!")
}

//the input is a number
else
{
    //define a and b sum
    let aVsota = 0;
    let bVsota = 0;

    //calculation for a number
    for(let i=0; i <= a-1; i++)
    {    
        //find and calculate the sum of proper divisors
        if(a%i == 0)
        {
            aVsota += i;        
        }
    }

    //calculation for b number
    for(let j=0; j <= b-1; j++)
    {    
        //find and calculate the sum of proper divisors
        if(b%j == 0)
        {
            bVsota += j;
        }
    }

    //check if they are amicable numbers
    if(a == bVsota && b == aVsota)
    {   
        //alert that numbers are amicable numbers
        alert("Števili " + a + " in " + b + " sta prijateljski.");
    }

    //the numbers are not amicable numbers
    else
    {   
        //alert that the numbers are not amicable numbers
        alert("Števili " + a + " in " + b + " nista prijateljski.");
    }
}

//second part-calculate all the amicable numbers in the chosen range (may take a while)
//input of min and max numbers
let min = parseInt(prompt("Vstavi minimalno vrednost:"));
let max = parseInt(prompt("Vstavi maksimalno vrednost:"));

//set c and d to min value
let c = min;
let d = min;

//array with the solutions
let stevila = [];

//wile c is below the max value
while(c <= max-1)
{
    //while d is below the max value
    while(d < max)
    {   
        //calculation for c number 
        let cVsota = 0;
        for(let k=0; k <= c-1; k++)
            {
                //find and calculate the sum of proper divisors
                if(c%k == 0)
                {                    
                    cVsota += k;        
                }
    
            }
        //increse d by one 
        d++;

        //calculation for d number
        let dVsota = 0;
        for(let l=0; l <= d-1; l++)
        {
            //find and calculate the sum of proper divisors
            if(d%l == 0)
            {
                dVsota += l;
            }
        }

        //check if they are amicable numbers
        if(c == dVsota && d == cVsota)
        {
            stevila.push(c + " in " + d);
            console.log(c + " in " + d);
        } 
        
        //increase c by one when d is equal to max
        if(d >= max)
        {
            c++;
            d = c;
        }
    }
}

//check if the input is a number and if min is more than max
if(isNaN(c) || isNaN (d) || max < min)
    {  
    //alert that the inut is not correct 
    alert("Napačen vnos števil!?");
    }

//print the result 
else
    {
    alert("Prijateljska števila med " + min + " in " + max + " so: " + stevila);  
    }  