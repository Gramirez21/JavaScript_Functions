console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdd(count){
    for(i = 0; i != count; ){
        if(i % 2 != 0){
            console.log(i)
        }
        if(count < 0){
            i--
    
        }
        else{
            i++
        }
    }
    
}
 
printOdd(-100)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
  if(age >= 16){
    console.log(`"Congrats ${userName} you can drive"`);
  }
  else{
    console.log(`"Sorry ${userName}, you hae to wait to be 16 to drive"`)
  }
}

// Exercise 3 Section

function whichQuad(x,y){
  if(x > 0 && y > 0){
    console.log("Quadrant1");
  }
  if(x < 0 && y > 0){
    console.log('Quadrant2');

  }
  if(x < 0 && y < 0){
    console.log('Quadrant3');

  }
  if(x >0 & y < 0){
    console.log("Quadrant4");
  }
  if(x == 0){
    console.log("X axis");
  }
  if(y == 0){
    console.log("Y axis")
  }

}

function triangle(a,b,c){
  let solution = false;
  if(a + b > c && b + c > a && a + c > b){
    solution = true;
  }
  if(solution == true){
    if(a == b && b == c){
      console.log('Equilateral')
    }
    if (a != b && c != b && a != c){
      console.log('Scalene')
    }
    if(a == b  || b == c  || a == c){
      console.log('Isosceles')
    }
  }
}

dataPlan(100,15,56);
function dataPlan(planLimit, day, usage)
{
    let userUsage = usage / day   ;
    let monthlyUsage = Math.trunc(userUsage);
    let endOfMonth = (userUsage * 30) - 100
  let daysLeft = 30 - day

  if (userUsage * 30 > planLimit)
    {
        console.log(`'${day} days used, ${daysLeft} days remaining

        Average daily use: ${monthlyUsage}
        GB / day
    You are EXCEEDING your average daily use(${userUsage}
        GB / day),
    continuing this high usage, you'll exceed your data plan by
    ${endOfMonth} GB.
    To stay below your data plan, use no more than 2.93 GB / day.'`)
  }
}


  





         
     

