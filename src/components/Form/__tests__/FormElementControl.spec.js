import React from 'react';
import { shallow } from 'enzyme';

import FormElementControl from '../FormElementControl';

describe('<FormElementControl />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<FormElementControl>{child}</FormElementControl>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-form-element__control').contains(child)).toBeTruthy();
  });

  it('renders left icon', () => {
    mounted.setProps({ hasIconLeft: true });
    expect(mounted.hasClass('slds-input-has-icon_right')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon_left')).toBeTruthy();
  });

  it('renders right icon', () => {
    mounted.setProps({ hasIconRight: true });
    expect(mounted.hasClass('slds-input-has-icon_left')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon_right')).toBeTruthy();
  });

  it('renders left and right icon together', () => {
    mounted.setProps({ hasIconLeft: true, hasIconRight: true });
    expect(mounted.hasClass('slds-input-has-icon_right')).toBeFalsy();
    expect(mounted.hasClass('slds-input-has-icon_left')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon_left-right')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__control').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').prop('data-test')).toEqual('bar');
  });
});
