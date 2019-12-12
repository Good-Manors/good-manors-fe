import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignupUser from '../src/containers/SignupUser';

describe('Renders a SignupUser container', () => {
  it('Should render a SignupUser', () => {
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <SignupUser/>
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });
});
