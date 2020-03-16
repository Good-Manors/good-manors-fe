import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from '../src/components/Search';
import Menu from '../src/components/Menu';
import AboutUs from '../src/components/AboutPage';
import UserForm from '../src/components/user/UserForm';
import Dashboard from '../src/components/user/Dashboard';

describe('Tests small components', () => {
  
  it('Search.js', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Menu.js', () => {
    jest.mock('react-redux', () => ({
      useDispatch: ()=> { },
      useSelector: () => ({})
    }));
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <Menu />
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });

  it('AboutUs.js', () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });

});

describe('User folder', () => {
  it('UserForm.js', () => {
    jest.mock('react-redux', () => ({
      useDispatch: ()=> { },
      useSelector: () => ({})
    }));

    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <UserForm buttonText={'test'} handleSubmit={()=>{}} />
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });
 
  it('Dashboard.js', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
