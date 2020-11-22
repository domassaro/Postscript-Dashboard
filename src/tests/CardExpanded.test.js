import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CardExpanded from '../components/CardExpanded';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should render without error', () => {
  const component = shallow(<CardExpanded />)
  expect(component.length).toBe(1);
})
