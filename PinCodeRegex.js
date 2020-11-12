
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('What is your PIN CODE ? : ', PIN => {
    console.log(`PIN IS : ` + PIN);
    //calling test function
    testForPinCode(PIN);
    readline.close();
  });
  
  //regex pattern
const pincodeRegexPattern=RegExp('^[1-9]{1}[0-9]{5}$');

//test function
let testForPinCode=(PIN)=>{
        if(pincodeRegexPattern.test(PIN))
        {
            console.log(`Given pincode ${PIN} IS VALID `);
        }
        else
        console.log(`Given pincode ${PIN} IS INVALID. TRY AGAIN.... `);
    }

