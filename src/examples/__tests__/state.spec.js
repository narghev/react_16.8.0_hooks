import React from 'react';
import State from '../state';
import { mount } from 'enzyme';

describe('Counter component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<State />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders correct children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('Increases the value of p when clicking on button', () => {
    const p = wrapper.find('p');
    const oldValue = Number(p.text());
    wrapper.find('button').simulate('click');
    const newValue = Number(p.text());
    expect(newValue).toEqual(oldValue + 1);
  });
});