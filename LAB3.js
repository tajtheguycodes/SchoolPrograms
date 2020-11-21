//the result array
let rezultat = [];

//calculate 7 random numbers
for(let i = 0; i < 7; i++)
{
    //reset is same bool  
    let enaka = false;

    //calculate a random number from 1 to 40
    let izzrebanaStevila = Math.floor(Math.random() * 39) + 1;
     
    //check if the numbers is already in the array
    for(let j = 0; j < rezultat.length; j++)
    {
        //compare the given value with the 
        if(izzrebanaStevila == rezultat[j])
        {
            //decrease i by one and change same bool to true
            i--;
            enaka = true;
        }
    }

    //print the value if the same bool is false
    if(enaka == false)
    {
       rezultat[i] = izzrebanaStevila; 
    }    
    
}

//sort the numbers in ascending order
rezultat.sort(function(a,b){return a-b});

//post the result
alert("Rezultati loto7 so: \n"  + rezultat);