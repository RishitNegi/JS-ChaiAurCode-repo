const accountId = 12345
let accountEmail = "Rishitnegi2001@gmail.com    "
var accountPassword = "fghjkl;'"
accountCity = "Bhopal"
let accountState;

/*
Prefer not to use var 
because of the issue it creates in the block scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountState])