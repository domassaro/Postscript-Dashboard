import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Card from '../components/Card';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders the card', () => {
  const container = mount(<Card />);
  console.log(container, "hello")
  expect(container.length).toBe(1);
})
 