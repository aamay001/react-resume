import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {MenuButton} from '../../../components/tools/MenuButton';

describe('<MenuButton />', () => {
  describe('should render without crashing', () => {
    it('renders without crashing', () => {
      shallow(<MenuButton />);
    });
  });
});