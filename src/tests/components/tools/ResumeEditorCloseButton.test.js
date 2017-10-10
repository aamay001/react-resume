import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter:new Adapter()});

import {ResumeEditorCloseButton} from '../../../components/tools/ResumeEditorCloseButton';

describe('<ResumeEditorCloseButton />', () => {
  describe('should render witout crashing', ()=> {
    it('renders without crashing', () => {
      shallow(<ResumeEditorCloseButton />);
    });
  });
});