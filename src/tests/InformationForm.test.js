import React from 'react';
import { shallow } from 'enzyme';
import InformationForm from '../components/InformationForm';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should render correctly with no props', () => {
  const component = shallow(<InformationForm />);
  expect(component).toMatchSnapshot();
});
