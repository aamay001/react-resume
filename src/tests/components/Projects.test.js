import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {Projects} from '../../components/Projects';

describe('<Projects />', () => {
  describe('should render without crashing', () => {
    it('renders without crashing', () => {
      shallow(<Projects />);
    });
  });
});
