import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import App from '../App';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});