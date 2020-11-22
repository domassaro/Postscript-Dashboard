import React from 'react';
import { shallow } from 'enzyme';
import SegmentsDropdown from '../components/SegmentsDropdown';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should render without error', () => {
  const component = shallow(<SegmentsDropdown />)
  expect(component.length).toBe(1);
})