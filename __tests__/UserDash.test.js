import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserDash from '../src/containers/UserDash';

describe('Renders a UserDash container', () => {
  it('Should render a UserDash', () => {
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <UserDash/>
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });
});
