import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('Should filters by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        StartDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by StartDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        StartDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        StartDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        StartDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        StartDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});