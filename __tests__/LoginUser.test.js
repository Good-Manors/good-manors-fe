import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginUser from '../src/containers/LoginUser';

describe('LoginUser', () => {
  it('Renders a LoginUser container', () => {
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <LoginUser />
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });  
});
