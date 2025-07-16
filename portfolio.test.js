const test = require('node:test');
const assert = require('node:assert');
const portfolio = require('./portfolio');

test('personal info includes base64 photo, phone, and name', () => {
  assert.ok(/^data:image/.test(portfolio.personal.photo));
  assert.ok(portfolio.personal.phone);
  assert.ok(portfolio.personal.name);
});

test('skill list has at least 5 items', () => {
  assert.ok(Array.isArray(portfolio.skills));
  assert.ok(portfolio.skills.length >= 5);
});

test('project list has at least 3 items', () => {
  assert.ok(Array.isArray(portfolio.projects));
  assert.ok(portfolio.projects.length >= 3);
});
