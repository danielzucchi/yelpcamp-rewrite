import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('Loading spinner', () => {
  it('When all props are present', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find('.loading')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
