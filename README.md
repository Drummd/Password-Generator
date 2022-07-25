# Password-Generator
-set up repository
- html skeleton
-link to java 
-variables setup  for number and letts etc
-a series of user inputs for password criteria
-funtionw within function holding variables made
-questions for user input involving said variables
-.mathfloor .random .uppercase .lowercase 
-decided to redo project and make them all into functions but to be careful with being unorganized with code
made a function with the questions and a function with using the lengths and proper characters when asked
-now my problem seems to be no prompts popping up when the html is running

------------------------------------------------------------------------
As AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
------------------------------------------------------------------------

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
--- At least 12 characters (required for your Muhlenberg password)—the more characters, the better.
A mixture of both uppercase and lowercase letters.
A mixture of letters and numbers.
Inclusion of at least one special character, e.g., ! @ # ? ] ---

WHEN prompted for password criteria
THEN I select which criteria to include in the password
- user inputs to answer questions (if and else statements and boolean for yes and no)

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
-limit character usage from 8 to 128

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
-include a funtion with .lowercase or .uppercase .mathfloor math.random
-include charset of alphabet

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
-use alert to provide the password to user
---------------------------------------------------------------------------
examples:
==	equal to	if (day == "Monday")
>	greater than	if (salary > 9000)
<	less than	if (age < 18)






