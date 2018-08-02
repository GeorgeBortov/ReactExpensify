import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    const wrapper = shallow(<ExpensesSummary expenseCount="1" expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});
