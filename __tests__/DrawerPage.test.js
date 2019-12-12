import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DrawerPage from '../src/containers/DrawerPage';

describe('Renders a DrawerPage', () => {
  it('Should Render DrawerPage', () => {
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <DrawerPage/>
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  }); 
});
