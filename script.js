// var alphabet = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
// var numbers = [0,1,2,3,4,5,6,7,8,9];
// var specChar = ["!,@,#,$,%,^,&,*,(,),_,+,~,`,|,},{,[,],\,:,;,?,>,<,.,/,-,=,"];
// var minLength = [8];
// var maxLength = [128];
// var userInput = ("Here is your very own password! ");

// var yesPassword = confirm("Lets get a password!")
// var yesSpecChar = confirm("Would you like special characters?")
// var yesUpper = confirm("Would you like uppercase letters?")
// var yesNum = confirm("Would you like numbers? ")

// function getPassword(arr) {
//     var randomIndex = Math.floor(Math.random() * arr.length) ;
//     var Password = arr[randomIndex];
//     return Password;
// };

// if (yesSpecChar) {
//     var randomSpecChar = getPassword(specChar);
//     NewPassword.push(randomSpecChar);
// };
// if (yesUpper) {
//     var randomAlpha = getPassword.toUpperCase(alphabet);
//     NewPassword.push(randomAlpha);
//     }else {
//         randomAlpha = getPassword.toLowerCase(alphabet)
//         NewPassword.push(randomAlpha);
// };
// if (yesNum) {
//     var randomNum = getPassword(numbers);
//     NewPassword.push(randomNum);
// };

// var NewPassword = [];

// too much getting confused need to put more into functions


var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];

function generatePassword() {
    var length = parseInt(prompt("How many characters would you like in your password?"));
    if(length < 8) {
        alert(`The password must be 8 characters minnimum.`);
        return;
    }
    if(length > 128) {
        alert(`The password has a 128 character limit.`);
        return;
    };
    var askSpecChar = confirm("Would you like special characters?");
    var askNumbers = confrim("Would you like numbers with your password?");
    var asklower = confirm("Would you like Lowercase letters?");
    var askupper = confirm("Would you like Uppercase letters?");

    if (!askSpecChar && !askNumbers && !asklower && !askupper) {
        alert("Your password must contain at least one special, lowercase, or uppercase character, and numeric.");
        return;
    }
    var questions = {
        length: length,
        specialChar: askSpecChar,
        number: askNumbers,
        lowercase: asklower,
        uppercase: askupper
    }
    return questions;
};

function NewPassword() {
    var userChoices = generatePassword();
    console.log(userChoices)

    var passwordOptions = [];
    console.log(passwordOptions)

    if(userChoices.specialChar) {
        for(i = 0; i< specialCharacters.length; ++i){
            passwordOptions.push(specialCharacters[i]);
        }
    }
    if (userChoices.number) {
        for (i = 0; i < numbers.length; ++i) {
            passwordOptions.push(numbers[i]);
        }
    }
    if (userChoices.lowerCase) {
        for (i = 0; i < lower.length; ++i) {
            passwordOptions.push(lower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < upper.length; ++i) {
            passwordOptions.push(upper[i]);
        }
    }
    var officialPassword = [];

    for (let i = 0; i< userChoices.length; ++i) {
        var randomPass = Math.floor(Math.random() * Math.floor(passwordOptions.length));
        officialPassword.push(passwordOptions[randomPass])
    }
    console.log(officialPassword)
    var official = officialPassword.join("");
    console.log(officialPassword)
}
var password = "";