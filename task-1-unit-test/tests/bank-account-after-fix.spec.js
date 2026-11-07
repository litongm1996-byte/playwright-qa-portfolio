const { test, expect } = require('@playwright/test');
const { BankAccountFixed } = require('../BankAccountFixed');

test('withdraws a standard amount', () => {
  const account = new BankAccountFixed(200, 'Alice');

  account.withdraw(50);

  expect(account.getBalance()).toBe(150);
});

test('prevents withdrawing more than the balance', () => {
  const account = new BankAccountFixed(200, 'Alice');

  expect(() => account.withdraw(250)).toThrow('Insufficient funds!');
  expect(account.getBalance()).toBe(200);
});

test('rejects a negative withdrawal amount', () => {
  const account = new BankAccountFixed(200, 'Alice');

  expect(() => account.withdraw(-50)).toThrow();
  expect(account.getBalance()).toBe(200);
});

//added additional test to check the invalid value
test('rejects an invalid withdrawal amount', () => {
  const account = new BankAccountFixed(200, 'Alice');

  expect(() => account.withdraw(NaN)).toThrow();
  expect(account.getBalance()).toBe(200);
});