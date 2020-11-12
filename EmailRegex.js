
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('What is your EMAIL ? : ', email => {
    console.log(`EMAIL IS : ` + email);
    //calling test function
    testForEmail(email);
    readline.close();
  });
  
  //regex pattern
const emailRegexPattern = RegExp("^(abc[+_-]{0,}[.][A-Za-z]+@bridgelabz[.]co[.][A-Za-z]{2,})$");

//test function
let testForEmail=(email)=>{
        if(emailRegexPattern.test(email))
        {
            console.log(`Given EMAIL ID --> ${email} : IS VALID `);
        }
        else
        console.log(`Given EMAIL ID --> ${email} : IS INVALID. TRY AGAIN.... `);
    }
