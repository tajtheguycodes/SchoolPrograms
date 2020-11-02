//prompt input a,b,c and C and convert to
let a = parseInt(prompt("Vstavi daljico a:","cm"));
let b = parseInt(prompt("Vstavi daljico b:","cm"));
let c = parseInt(prompt("Vstavi daljico c:","cm"));
let C = parseInt(prompt("Vstavi kot C:","v kotnih stopinjah"));

//check if C is empty
if (isNaN(C) == true)
{
    C = -1;
}

//check if c is empty
if (isNaN(c) == true)
{
    c = -1;
}

//c is not defined and C is
if( c < 0 && C >= 0 && C < 180 )
{
    //convert C to radians
    radC = Math.PI/180 * C;

    //calculate s
    s = Math.abs((a*b*Math.sin(radC))/2);

    //round s value
    s = parseFloat(s.toFixed(2));

    //print s 
    alert("Površina trikotnika je " + s + " cm2");
}

//C is not defined and c is
else if(c >= 0 && C < 0 )
{
    //the triangle is imposible
    if( (a+b)<c || (a+c)<b || (b+c)<a)
    {
        //print alert
        alert("Trikotnik z danimi stanicami ne obstaja!!?");
    }

    //the triangle is possible
    else
    {
     //calculate C
    C=(a*a+b*b-c*c)/(2*a*b);
    C=1/Math.cos(C);

    //convert C to degrees
    degC = (C * 180)/Math.PI;

    //round C value 
    C = parseFloat(degC.toFixed(2));

    //print C
    alert("Kot C je " + C + " '");
    }
       
}

//both C and c are defined
else
{
    //print alert message
    alert("NAPAČEN VNOS PODATKOV?");
}

