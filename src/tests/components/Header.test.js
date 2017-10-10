import React from 'react';
import Enzyme, {shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {Header} from '../../components/Header';

describe('<Header />', () => {
  describe('should render without crash', () => {
    it('renders without crashing', () => {
      shallow(<Header />);
    });
  });
});