import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/ConfirmModal';
import expenses from '../fixtures/expenses';

let onRequestClose, onRemove;

beforeEach(() => {
    onRequestClose = jest.fn();
    onRemove = jest.fn();
});

test('should render ConfirmModal correctly', () => {
    const wrapper = shallow(<ConfirmModal
        expenseDescription={expenses[0].description}
        isOpen={false}
        onRemove={onRemove}
        onRequestClose={onRequestClose}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should render open ConfirmModal correctly', () => {
    const wrapper = shallow(<ConfirmModal
        expenseDescription={expenses[0].description}
        isOpen={true}
        onRemove={onRemove}
        onRequestClose={onRequestClose}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onRemove', () => {
    const wrapper = shallow(<ConfirmModal
        expenseDescription={expenses[0].description}
        isOpen={false}
        onRemove={onRemove}
        onRequestClose={onRequestClose}
    />);
    wrapper.find('.removeExpense').simulate('click');
    expect(onRemove).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should handle onRequestClose with button "NO" ', () => {
    const wrapper = shallow(<ConfirmModal
        expenseDescription={expenses[0].description}
        isOpen={false}
        onRemove={onRemove}
        onRequestClose={onRequestClose}
    />);
    wrapper.find('.button--secondary').simulate('click');
    expect(onRequestClose).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should handle onRequestClose with button "X" ', () => {
    const wrapper = shallow(<ConfirmModal
        expenseDescription={expenses[0].description}
        isOpen={false}
        onRemove={onRemove}
        onRequestClose={onRequestClose}
    />);
    wrapper.find('.modal__close').simulate('click');
    expect(onRequestClose).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});
// isOpen={this.props.modalStatus}
// onRequestClose={this.closeModal}
// expenseDescription={this.props.expense.description}
// onRemove={this.onRemove}