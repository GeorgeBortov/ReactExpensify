import React from 'react';
import { shallow } from 'enzyme';
import PrivacyPolicyPage from '../../components/PrivacyPolicyPage';

test('should render PrivacyPolicyPage correctly', () => {
    const wrapper = shallow(<PrivacyPolicyPage />);
    expect(wrapper).toMatchSnapshot();
});

