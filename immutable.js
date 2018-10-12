const update = require('immutability-helper');

const users = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'Mary' },
];

const clone = users.map(user => {
  user.job = 'dev';
  return user;
});

console.log(users);
console.log(clone);

const users2 = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'Mary' },
];

const clone2 = users.map(user => {
  return update(user, { job: { $set: 'dev' } });
});

console.log(users2);
console.log(clone2);
