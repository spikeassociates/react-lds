import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  FormElement,
  FormElementControl,
  FormElementError,
  FormElementLabel,
} from '../../Form';

const ComboboxDropdown = React.forwardRef((props, ref) => {
  const {
    children,
    dropdownClassName,
    error,
    height,
    hideErrorMessage,
    hideLabel,
    id,
    isOpen,
    isRequired,
    isSingleInlineSelection,
    label,
    listboxId,
    renderInput,
    renderListbox,
    ...rest
  } = props;

  const comboboxContainerClasses = [
    'slds-combobox_container',
    { 'slds-has-selection': isSingleInlineSelection },
  ];

  const comboboxClasses = [
    'slds-combobox',
    'slds-dropdown-trigger',
    'slds-dropdown-trigger_click',
    { 'slds-is-open': isOpen },
  ];

  const comboboxFormElementClasses = [
    'slds-combobox__form-element',
    'slds-input-has-icon',
    { 'slds-input-has-icon_left-right': isSingleInlineSelection },
    { 'slds-input-has-icon_right': !isSingleInlineSelection }
  ];

  const dropdownClasses = [
    'slds-dropdown',
    'slds-dropdown_fluid',
    { [`slds-dropdown_length-with-icon-${height}`]: height },
    dropdownClassName,
  ];

  return (
    <FormElement error={error} required={isRequired} {...rest}>
      {!hideLabel && <FormElementLabel id={id} label={label} required={isRequired} />}
      {!hideErrorMessage && <FormElementError error={error} id={`error-${id}`} />}
      <FormElementControl>
        <div className={cx(comboboxContainerClasses)}>
          <div
            className={cx(comboboxClasses)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            role="combobox"
          >
            <div className={cx(comboboxFormElementClasses)} role="none">
              {renderInput()}
            </div>
            <div
              className={cx(dropdownClasses)}
              id={listboxId}
              ref={ref}
              role="listbox"
              tabIndex="-1"
            >
              {children}
            </div>
          </div>
        </div>
        {renderListbox && renderListbox()}
      </FormElementControl>
    </FormElement>
  );
});

ComboboxDropdown.displayName = 'ComboboxDropdown';

ComboboxDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string,
  error: PropTypes.string,
  height: PropTypes.number.isRequired,
  hideErrorMessage: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool,
  isSingleInlineSelection: PropTypes.bool,
  label: PropTypes.node.isRequired,
  listboxId: PropTypes.string.isRequired,
  renderInput: PropTypes.func.isRequired,
  renderListbox: PropTypes.func,
};

ComboboxDropdown.defaultProps = {
  children: null,
  className: null,
  dropdownClassName: null,
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  isRequired: false,
  isSingleInlineSelection: false,
  renderListbox: null,
};

export default ComboboxDropdown;
