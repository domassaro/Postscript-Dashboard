import React from 'react';
import { shallow } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should render correctly with no props', () => {
  const component = shallow(<MainContent />);
  expect(component).toMatchSnapshot();
});

it("displays a link tag with the Login text", () => {
  const component = shallow(<MainContent />);
  let link = component.find("Link").find({ to: "campaign/create/6" });

  expect(link.html()).toBe('<a>Create Campaign</a>');
});
