import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({adapter: new Adapter()});

import App from '../App';
import store from '../store';

describe('<App />', () => {
  describe('should render without crashing', () => {
    it('renders without crashing', () => {
      shallow(<App store={store} />)
    });
  });
})

