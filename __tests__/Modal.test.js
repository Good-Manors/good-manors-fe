import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Modal from '../src/components/modal/Modal';

describe('Modals', () => {
  it('Modal.js', () => {
    jest.mock('react-redux', () => ({
      useDispatch: ()=> { },
      useSelector: () => ({})
    }));
    const getWrapper = (mockStore = createStore()) => mount(
      <Provider store={mockStore}>
        <Modal />
      </Provider>
    );
    expect(getWrapper).toMatchSnapshot();
  });


  
});
