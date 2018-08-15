import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let startEditExpense, startRemoveExpense, history, openModal, closeModal, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    openModal = jest.fn();
    closeModal = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        closeModal={closeModal}
        openModal={openModal}
        history={history}
        expense={expenses[1]}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('ConfirmModal').prop('onRemove')();
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    });
    expect(closeModal).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle openModal', () => {
    wrapper.find('.button.button--secondary').simulate('click');
    expect(openModal).toHaveBeenCalled();
});
test('should handle closeModal', () => {
    wrapper.find('ConfirmModal').prop('onRequestClose')();
    expect(closeModal).toHaveBeenCalled();
});