import selectHiddenExpenses from '../../selectors/expenses-hidden';
import expenses from '../fixtures/expenses';

test('should return all expenses if all are hidden', () => {
    const visibleExpenses = [];
    const result = selectHiddenExpenses(expenses, visibleExpenses);
    expect(result).toEqual(expenses);
});

test('should return 0 expenses if all are visible', () => {
    const visibleExpenses = expenses;
    const result = selectHiddenExpenses(expenses, visibleExpenses);
    expect(result).toEqual([]);
});

test('should return hidden expense', () => {
    const visibleExpenses = [expenses[0], expenses[1]];
    const result = selectHiddenExpenses(expenses, visibleExpenses);
    expect(result).toEqual([expenses[2]]);
});