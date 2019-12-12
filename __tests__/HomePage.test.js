import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomePage from '../src/containers/HomePage';

describe('Renders a HomePage container', () => {
  it('Should render a HomePage', () => {
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <HomePage/>
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });
});
