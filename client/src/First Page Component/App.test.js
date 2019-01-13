import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import App from './App';
import { expect } from 'chai';
import FlipInfo from './flipInfo.jsx';
import User from '../User Component/User.jsx';
import IntroPage from './IntroPage.js';
import HowItWorks from './HowItWorks.jsx';

Enzyme.configure({ adapter: new Adapter() });


// test for checking components and its functionality
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test for checking Category components and its functionality
describe('<App />', () => {
  it('renders one <FlipInfo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FlipInfo)).to.have.lengthOf(0);
  });

  it('renders an `.allflip`', () => {
    const wrapper = shallow(<FlipInfo />);
    expect(wrapper.find('.allflip')).to.have.lengthOf(1);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><FlipInfo className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});



<<<<<<< HEAD
// test for checking IntroPage components and its functionality
describe('<App />', () => {
  it('renders one <IntroPage /> components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(IntroPage)).to.have.lengthOf(0);
=======
// test for checking Category components and its functionality
describe('<App />', () => {
  it('renders one <IntroPage /> components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(IntroPage)).to.have.lengthOf(1);
>>>>>>> 0c1cf9b734333ea1ed37f496114d4060926124cb
  });

  it('renders an `.anyCont`', () => {
    const wrapper = shallow(<IntroPage />);
    expect(wrapper.find('.anyCont')).to.have.lengthOf(1);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><IntroPage className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntroPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
<<<<<<< HEAD
=======

>>>>>>> 0c1cf9b734333ea1ed37f496114d4060926124cb

describe('<App />', () => {
  it('renders one <HowItWorks /> components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(HowItWorks)).to.have.lengthOf(0);
  });

  it('renders an `.steps`', () => {
    const wrapper = shallow(<HowItWorks />);
    expect(wrapper.find('.steps')).to.have.lengthOf(5);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><HowItWorks className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HowItWorks />, div);
  ReactDOM.unmountComponentAtNode(div);
});




