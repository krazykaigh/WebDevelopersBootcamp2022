/*jshint esversion: 8 */
// DESTRUCTURING FROM ARRAYS
// A short, clean syntax to 'unpack'
// 1 - array values
// 2 - properties form objects
// into distinct variables

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Jillian Marks', 
'Quinisha Rudd', 'Jonquarry Rhodes', 'Belizima Carter'];
// To destructure that array I do this
const [gold, silver, bronze, ...everyoneElse] = raceResults;
console.log(`Race results:`);
console.log(`Gold - ${gold}`);
console.log(`Silver -  ${silver}`);
console.log(`Bronze - ${bronze}`);
console.log(`Participation awards - ${everyoneElse}`);

// DESTRUCTURING FROM OBJECTS
const user = {
  email: 'harveyweintraub@msnbc.com',
  password: '123passward!!#@@##',
  firstName: 'Harvey',
  lastName: 'Weintraub',
  yob: 1968,
  mob: 2,
  dob: 29,
  died: 2022,
  bio: 'Harvey Weintraub was a fine programmer and father',
  city: 'San Carlos',
  state: 'Nevada'
}
// Now let's destructure
// Old way
let fName = user.firstName;
let lNamw = user.lastName;
 // Destrurcture
 const{email, password:pass, firstName:firstN, lastName:lastN, bio: whodat, died: dod} = user;

 console.log(email, pass, firstN, lastN, whodat, dod);

 const user2 = {
  email: 'jilianbelcherb@msnbc.com',
  password: '123!!#@@##password',
  firstName: 'Gilian',
  lastName: 'Belcher',
  yob: 1998,
  mob: 5,
  dob: 12,
  city: 'New York City',
  state: 'New York'
}

const{email: mailE, password:passphrase, firstName:first, lastName:last, died = 
  'N/A', bio='Nothing yet'} = user2;
// Notice how a default can be put in place where undefined would show up
console.log(mailE, passphrase, first, last, bio, died);