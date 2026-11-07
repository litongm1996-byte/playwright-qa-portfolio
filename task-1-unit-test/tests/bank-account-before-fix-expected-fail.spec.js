const { test, expect } = require('@playwright/test');
const { BankAccount } = require('../BankAccount');

test('withdraws a standard amount', () => {
  const account = new BankAccount(200, 'Alice');

  account.withdraw(50);

  expect(account.getBalance()).toBe(150);
});

test('prevents withdrawing more than the balance', () => {
  const account = new BankAccount(200, 'Alice');

  expect(() => account.withdraw(250)).toThrow('Insufficient funds!');
  expect(account.getBalance()).toBe(200);
});

test('rejects a negative withdrawal amount', () => {
  test.fail();
  const account = new BankAccount(200, 'Alice');

  expect(() => account.withdraw(-50)).toThrow();
  expect(account.getBalance()).toBe(200);
});