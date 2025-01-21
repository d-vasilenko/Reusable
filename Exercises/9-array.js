'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Denis Vasilenko', phone: '+79673196182' },
  { name: 'Milane Ganeeva', phone: '+78934832938' },
];

const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

console.log(findPhoneByName('Denis Vasilenko'));



module.exports = { phonebook, findPhoneByName };
