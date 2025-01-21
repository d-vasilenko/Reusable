'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = {
    name: 'Denis',
  };
  let obj2 = {
    name: 'Milana',
  };
  obj1.name = 'Vasia';
  obj2.name = 'Alisa';
  //obj1 = {};
  obj2 = {};
};



module.exports = { fn };
