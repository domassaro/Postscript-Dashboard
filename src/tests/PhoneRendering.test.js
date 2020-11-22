import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PhoneRendering from '../components/PhoneRendering';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should render without error', () => {
  const component = shallow(<PhoneRendering />)
  expect(component.length).toBe(1);
})
