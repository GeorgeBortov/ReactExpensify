import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectVisibleExpenses from '../selectors/expenses-visible';
import selectHiddenExpenses from '../selectors/expenses-hidden';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ visibleExpenseCount, visibleExpensesTotal, hiddenExpenseCount, hiddenExpensesTotal}) => {
    const viewingExpenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses';
    const visibleFormatedExpensesTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00');
    const hiddenExpenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses';
    const hiddenFormatedExpensesTotal = numeral(hiddenExpensesTotal / 100).format('$0,0.00');
    const totalSum = numeral((visibleExpensesTotal + hiddenExpensesTotal) / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{visibleExpenseCount}</span> {viewingExpenseWord} totalling <span>{visibleFormatedExpensesTotal}</span></h1>
                <h2 className="page-header__title">Hidden <span>{hiddenExpenseCount}</span> {hiddenExpenseWord} totalling <span>{hiddenFormatedExpensesTotal}</span></h2>
                <h3 className="page-header__title">Total sum <span>{totalSum}</span></h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectVisibleExpenses(state.expenses, state.filters);
    const hiddenExpenses = selectHiddenExpenses(state.expenses, visibleExpenses);
    return {
        visibleExpenseCount: visibleExpenses.length,
        hiddenExpenseCount: hiddenExpenses.length,
        visibleExpensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpensesTotal: selectExpensesTotal(hiddenExpenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);