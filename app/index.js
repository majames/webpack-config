
const $ = require('jquery');

import { MyMath } from './utils';

document.getElementsByTagName('body')[0].innerHTML = `Hi Michael!
  Would you like some ${MyMath.PI}?`;

console.log(`pi cubed is ${MyMath.PI ** 3}`);

debugger;
