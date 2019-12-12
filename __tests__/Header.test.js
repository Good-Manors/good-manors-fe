import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header/Header';
import Logo from '../src/components/Logo/Logo';


describe('Header and Logo', () => {
  
  it('Should render a Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Logo', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
