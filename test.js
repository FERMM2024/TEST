const assert = require('assert');
const portfolio = require('./portfolio');

assert.ok(portfolio.personal.photo, 'Photo is missing');
assert.ok(/base64/.test(portfolio.personal.photo), 'Photo must be base64 image');
assert.ok(portfolio.personal.phone, 'Phone is missing');
assert.ok(portfolio.personal.name, 'Name is missing');

assert.ok(Array.isArray(portfolio.skills), 'Skills must be array');
assert.ok(portfolio.skills.length >= 5, 'Need at least 5 skills');

assert.ok(Array.isArray(portfolio.projects), 'Projects must be array');
assert.ok(portfolio.projects.length >= 3, 'Need at least 3 projects');

console.log('All tests passed');
