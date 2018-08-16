import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 hidden expense', () => {
    const total = selectExpensesTotal([expenses[0]]);

    const wrapper = shallow(<ExpensesSummary 
        visibleExpenseCount={0} 
        visibleExpensesTotal={0}
        hiddenExpenseCount={1}
        hiddenExpensesTotal={total}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 visible expense', () => {
    const total = selectExpensesTotal([expenses[2]]);
    
    const wrapper = shallow(<ExpensesSummary 
        visibleExpenseCount={1} 
        visibleExpensesTotal={total}
        hiddenExpenseCount={0}
        hiddenExpensesTotal={0}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const visible = [ expenses[0], expenses[2] ];
    const hidden = [expenses[1]]
    const totalVisible = selectExpensesTotal(visible);
    const totalHidden = selectExpensesTotal(hidden);

    const wrapper = shallow(<ExpensesSummary 
        visibleExpenseCount={visible.length}
        visibleExpensesTotal={totalVisible}
        hiddenExpenseCount={hidden.length}
        hiddenExpensesTotal={totalHidden}
    />);
    expect(wrapper).toMatchSnapshot();
});
